const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const product = await Product.create({ name, description, price, user: req.userId });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.readAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('user');
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.readOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('user');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
