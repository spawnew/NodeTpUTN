import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import ENVIRONMENT from './config/environment.config.js';
import connectDB from './config/db.config.js';
import RouteUsuarios from './Routes/Route.usuarios.js';

const app = express();

connectDB();

app.use(express.json());


app.use("/usuarios", RouteUsuarios);

const PORT = ENVIRONMENT.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});