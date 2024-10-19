const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', async function(next) {
    next();
});

userSchema.methods.comparePassword = async function(password) {
    return password === this.password;
};

module.exports = mongoose.model('User', userSchema);
