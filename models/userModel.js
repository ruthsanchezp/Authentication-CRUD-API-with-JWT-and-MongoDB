const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Eliminar el middleware de hash de la contraseña
userSchema.pre('save', async function(next) {
    // No necesitas hashear la contraseña, simplemente pasa al siguiente middleware
    next();
});

// Eliminar el método de comparación de contraseña
userSchema.methods.comparePassword = async function(password) {
    // Comparar directamente las contraseñas
    return password === this.password; // Comparar en texto plano
};

module.exports = mongoose.model('User', userSchema);
