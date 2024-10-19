const express = require('express'); 
const { createProduct, readAllProducts, readOneProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const verifyTokenMiddleware = require('../controllers/authMiddleware'); // Importa el middleware de autenticación

const router = express.Router();

// Ruta para crear un producto (requiere autenticación)
router.post('/create', verifyTokenMiddleware, createProduct);

// Ruta para leer todos los productos (requiere autenticación)
router.get('/readall', verifyTokenMiddleware, readAllProducts);

// Ruta para leer un producto específico (requiere autenticación)
router.get('/readone/:id', verifyTokenMiddleware, readOneProduct);

// Ruta para actualizar un producto (requiere autenticación)
router.put('/update/:id', verifyTokenMiddleware, updateProduct);

// Ruta para eliminar un producto (requiere autenticación)
router.delete('/delete/:id', verifyTokenMiddleware, deleteProduct);

module.exports = router;
