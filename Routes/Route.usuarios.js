import express from 'express';
import {createUsuario,gettodos,deleteUsuario} from '../Controller/usuario.controller.js'
const router = express.Router();





router.post("/",createUsuario);
router.get("/", gettodos);  
router.delete("/:id", deleteUsuario);


export default router;