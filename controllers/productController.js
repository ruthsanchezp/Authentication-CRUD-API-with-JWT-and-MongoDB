const Product = require('../models/productModel');


// Crear producto
exports.createProduct = async (req, res) => {
    const { name, description, price, user } = req.body; // Asegurar de que 'user' esté incluido en el cuerpo

    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            user: user // Almacenar el ID del usuario aquí desde el cuerpo de la solicitud
        });
        
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Leer todos los productos
exports.readAllProducts = async (req, res) => {
    try {
        // Obtener todos los productos y popular el campo 'user' con la información del usuario
        const products = await Product.find().populate('user');
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Leer un producto específico por su ID
exports.readOneProduct = async (req, res) => {
    try {
        // Buscar producto por ID
        const product = await Product.findById(req.params.id).populate('user');
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
        
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Actualizar el producto con los nuevos datos
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Eliminar un producto (cualquiera puede eliminar)
exports.deleteProduct = async (req, res) => {
    try {
        // Buscar el producto por ID
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Eliminar el producto
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
