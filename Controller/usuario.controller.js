import  Usuario  from '../models/Usuarios.models.js';



export const createUsuario = async (req, res, next) => {
    try {
        const { nombre, email } = req.body; 

      
        const nuevoUsuario = await Usuario.create({ 
            nombre, 
            email 
        });

        
        res.status(201).json({
            success: true,
            data: nuevoUsuario, 
            message: "Usuario creado con éxito"
        });
    } catch (error) {
        next(error);
    }
};