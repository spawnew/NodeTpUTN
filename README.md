El tp esta subido en https://nodetputn.onrender.com/ y la parte del front esta https://tp-react-utn-one.vercel.app/
Pasos de Instalación y Ejecución:
//npm install express
//npm install -D nodemon
//npm install dotenv para manejar las variables de entorno
//npm install json-server
//npm install dotenv para manejar las variables de entorno
//npm install mongoose
//install mongodb
//npm install cors
📡 Descripción de Endpoints
👤 Usuarios (/usuarios)
GET /usuarios: Retorna el listado completo de usuarios registrados.

POST /usuarios: Crea un nuevo usuario.

DELETE /usuarios/:id: Elimina un usuario por su ID.

💬 Chats (/chat)
GET /chat: Retorna el listado de todos los chats con sus participantes poblados.

POST /chat: Crea una nueva sala de chat.

DELETE /chat/:id: Elimina un chat y todos los mensajes asociados a él.

✉️ Mensajes (/mensajes)
GET /mensajes/:chatId: Obtiene el historial de mensajes de un chat específico.

POST /mensajes: Envía un nuevo mensaje asociado a un chat y a un usuario emisor.
1. Crear Usuario
Endpoint: POST /usuarios

Body (JSON):

JSON
{
  "nombre": "Lucas",
  "email": "lucas@example.com"
}
Response (201 Created):

JSON
{
  "success": true,
  "data": {
    "_id": "6a63cc726fa5bbfbc8b776ba",
    "nombre": "Lucas",
    "email": "lucas@example.com",
    "__v": 0
  },
  "message": "Usuario creado con éxito"
}
2. Crear Chat
Endpoint: POST /chat

Body (JSON):

JSON
{
  "nombre": "Grupo de Estudio",
  "participantes": ["6a63cc726fa5bbfbc8b776ba"]
}
Response (201 Created):

JSON
{
  "success": true,
  "data": {
    "nombre": "Grupo de Estudio",
    "participantes": ["6a63cc726fa5bbfbc8b776ba"],
    "_id": "64f1b2c3e4b0a123456789ab",
    "__v": 0
  },
  "message": "Chat creado con éxito"
}
3. Enviar Mensaje
Endpoint: POST /mensajes

Body (JSON):

JSON
{
  "chatId": "64f1b2c3e4b0a123456789ab",
  "userId": "6a63cc726fa5bbfbc8b776ba",
  "content": "¡Hola a todos!"
}
Response (201 Created):

JSON
{
  "success": true,
  "data": {
    "chatId": "64f1b2c3e4b0a123456789ab",
    "userId": "6a63cc726fa5bbfbc8b776ba",
    "content": "¡Hola a todos!",
    "_id": "64f1b3d4e4b0a123456789cd"
  },
  "message": "Msj enviado con éxito"
}
