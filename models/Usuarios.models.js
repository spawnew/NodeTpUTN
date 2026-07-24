import mongoose from "mongoose"
import { Schema, model } from 'mongoose';
const usuario_schema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true, 
        
    }, email: {
        type: String,
        required: true,
        unique: true,
    },

    
})
const Usuario = mongoose.model('Usuario', usuario_schema);
export default Usuario;