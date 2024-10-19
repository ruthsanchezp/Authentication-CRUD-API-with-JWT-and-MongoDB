const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Importar las rutas de usuarios y productos
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();  // Cargar las variables de entorno

const app = express();  // Inicializar Express

// Middleware
app.use(cors());
app.use(express.json());  // Habilitar JSON en las solicitudes

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Usar las rutas para usuarios y productos
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.log('Error conectando a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Ruta de prueba
app.get('/test', (req, res) => {
    res.send('Ruta de prueba funcionando');
});
