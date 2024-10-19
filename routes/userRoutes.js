const express = require('express');
const { registerUser, loginUser, verifyToken, updateUser, deleteAllUsers } = require('../controllers/userController');  // Importar todos los controladores
const verifyTokenMiddleware = require('../controllers/authMiddleware');  // Importar el middleware para proteger rutas

const router = express.Router();  // Inicializar el router

// Ruta para registrar un usuario
router.post('/register', (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }
  next();
}, registerUser);

// Ruta para iniciar sesión
router.post('/login', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Email y contraseña son requeridos" });
  }
  next();
}, loginUser);

// Ruta para verificar el token del usuario (no requiere autenticación)
router.get('/verifytoken', verifyToken);

// Ruta para actualizar la información del usuario (requiere autenticación)
router.put('/update', verifyTokenMiddleware, (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Faltan campos obligatorios para actualizar" });
  }
  next();
}, updateUser);

// Ruta para eliminar todos los usuarios (puedes protegerla con un middleware si lo deseas)
router.delete('/deleteAll', deleteAllUsers);

module.exports = router;
