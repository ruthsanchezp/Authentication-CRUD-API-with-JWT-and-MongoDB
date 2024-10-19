const express = require('express');
const { createProduct, readAllProducts, readOneProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// Ruta para crear un producto
router.post('/create', createProduct);

// Ruta para leer todos los productos
router.get('/readall', readAllProducts);

// Ruta para leer un producto específico
router.get('/readone/:id', readOneProduct);

// Ruta para actualizar un producto
router.put('/update/:id', updateProduct);

// Ruta para eliminar un producto
router.delete('/delete/:id', deleteProduct);

module.exports = router;
