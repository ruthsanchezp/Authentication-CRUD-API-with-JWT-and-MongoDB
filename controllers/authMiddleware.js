const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  // Obtener el token del header Authorization

    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó token' });  // Si no hay token, responder con un error
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {  // Verificar el token con la clave secreta
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });  // Si el token es inválido, responder con un error
        }

        req.userId = decoded.id;  // Almacenar el ID del usuario decodificado en el request
        next();  // Pasar al siguiente middleware o controlador
    });
};

module.exports = verifyToken;
