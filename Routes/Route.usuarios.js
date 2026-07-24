import express from 'express';
import {createUsuario} from '../Controller/usuario.controller.js'
const router = express.Router();


router.get("/", (req, res) => {
    res.json({ success: true, message: "Listado de usuarios" });
});


router.post("/",createUsuario);
    


export default router;