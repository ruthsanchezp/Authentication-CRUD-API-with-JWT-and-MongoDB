# Proyecto Backend UDD

## Descripción

Este proyecto es una aplicación backend que gestiona la autenticación y autorización de usuarios, junto con la capacidad de manejar productos a través de operaciones CRUD (Crear, Leer, Actualizar, Eliminar). La aplicación utiliza MongoDB como base de datos y Mongoose como ORM para facilitar la interacción con la base de datos.

## Estructura del Proyecto


## Funcionalidades

### Endpoints de Usuario

- **Registrar un usuario**: `POST /api/user/register`
- **Iniciar sesión**: `POST /api/user/login`
- **Verificar token**: `GET /api/user/verifytoken`
- **Actualizar usuario**: `PUT /api/user/update`

### Endpoints de Producto

- **Crear un producto**: `POST /api/product/create`
- **Leer todos los productos**: `GET /api/product/readall`
- **Leer un producto específico**: `GET /api/product/readone/:id`
- **Actualizar un producto**: `PUT /api/product/update/:id`
- **Eliminar un producto**: `DELETE /api/product/delete/:id`

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework para construir aplicaciones web.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar datos.
- **Mongoose**: Biblioteca de modelado para MongoDB y Node.js.
- **JWT (JSON Web Tokens)**: Para manejar la autenticación y autorización de usuarios.
- **Swagger**: Para la documentación de la API.

## Requisitos

1. **Node.js** instalado.
2. **MongoDB Atlas** configurado con las credenciales adecuadas en el archivo `.env`.
3. Link a render: https://authentication-crud-api-with-jwt-and-hx4e.onrender.com/
