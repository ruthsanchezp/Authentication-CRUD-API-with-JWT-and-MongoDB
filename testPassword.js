// Supón que esta es la contraseña que estás tratando de comparar
const inputPassword = '123456';

// La contraseña almacenada en la base de datos (en texto plano)
const storedPassword = '123456'; // Cambia esto a tu contraseña real almacenada

// Función para comprobar la contraseña
const checkPassword = () => {
  const isMatch = inputPassword === storedPassword; // Comparar directamente
  console.log("Las contraseñas coinciden:", isMatch); // Esto debería ser true si la comparación es correcta
};

// Ejecutar la función
checkPassword();
