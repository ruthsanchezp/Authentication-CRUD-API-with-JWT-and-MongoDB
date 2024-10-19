// contraseña tratando de comparar
const inputPassword = '123456';

// contraseña almacenada en la base de datos 
const storedPassword = '123456'; 

//  comprobar la contraseña
const checkPassword = () => {
  const isMatch = inputPassword === storedPassword; // comparar directamente
  console.log("Las contraseñas coinciden:", isMatch); // true si la comparación es correcta
};

// 
checkPassword();
