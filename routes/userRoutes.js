const express = require('express');
const verifyTokenMiddleware = require('../controllers/authMiddleware'); // Import middleware to protect routes
const { registerUser, loginUser, verifyToken, updateUser, deleteAllUsers } = require('../controllers/userController');

const router = express.Router(); // Initialize the router

// Route for registering a user
router.post('/register', (req, res, next) => {
  const { name, email, password } = req.body; 
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }
  next();
}, registerUser);

// Route for user login
router.post('/login', (req, res, next) => {
  const { email, password } = req.body; 
  if (!email || !password) {
    return res.status(400).json({ message: "Email y contraseña son requeridos" });
  }
  next();
}, loginUser);

// Route for verifying user token 
router.get('/verifytoken', verifyTokenMiddleware, verifyToken);

// Route for updating user information 
router.put('/update', verifyTokenMiddleware, (req, res, next) => {
  const { name, email, password } = req.body; 
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios para actualizar" });
  }
  next();
}, updateUser);

// Route for deleting all users 
router.delete('/deleteAll', verifyTokenMiddleware, deleteAllUsers);

module.exports = router;
