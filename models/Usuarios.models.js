import mongoose from "mongoose"

const usuario_schema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true, //osea q siempre q se cree te pida un nombre 
}
    
})
const Usuario = mongoose.model('Usuario', usuario_schema)
export default Usuario;