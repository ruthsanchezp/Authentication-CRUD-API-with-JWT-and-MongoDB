const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Registrar usuario
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }

        // Crear el nuevo usuario sin encriptar la contraseña
        const newUser = await User.create({ name, email, password: password }); // Sin hashear

        const { password: _, ...userWithoutPassword } = newUser.toObject();
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Iniciar sesión de usuario
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) { // Comparar directamente
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Generar el token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Devolver el token en la respuesta
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Verificar token
exports.verifyToken = (req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No se proporcionó token' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token inválido' });
        res.status(200).json({ message: 'Token válido', userId: decoded.id });
    });
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Verificar si el usuario existe
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar la contraseña directamente si se proporciona
        user.password = password || user.password;

        // Actualizar los demás datos del usuario
        user.name = name || user.name;
        user.email = email || user.email;

        // Guardar los cambios
        await user.save();

        // Eliminar la contraseña antes de devolver la respuesta
        const { password: _, ...userWithoutPassword } = user.toObject();
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar todos los usuarios
exports.deleteAllUsers = async (req, res) => {
    try {
        // Eliminar todos los usuarios
        await User.deleteMany({});
        res.status(200).json({ message: 'Todos los usuarios han sido eliminados' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
