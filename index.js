import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import ENVIRONMENT from './config/environment.config.js';
import connectDB from './config/db.config.js';

const app = express();

connectDB();

app.use(express.json());

const PORT = ENVIRONMENT.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});