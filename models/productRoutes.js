const express = require('express');
const { createProduct, readAllProducts, readOneProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/create', createProduct);
router.get('/readall', readAllProducts);
router.get('/readone/:id', readOneProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
