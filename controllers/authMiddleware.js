const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }

        console.log("Decoded token:", decoded); // Agregar esta línea para depurar
        req.userId = decoded.id; // Almacenar el ID del usuario decodificado en el request
        next();
    });
};

module.exports = verifyToken;
