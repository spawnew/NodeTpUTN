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
export const gettodos = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find();

        res.json({
            success: true,
            data: usuarios,
            message: "Listado de usuarios "
        });
    } catch (error) {
        next(error);
    }
};


export const deleteUsuario = async (req, res, next) => {
    try {
        const { id } = req.params;
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);

        if (!usuarioEliminado) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Usuario no encontrado"
            });
        }

        res.json({
            success: true,
            data: usuarioEliminado,
            message: "Usuario eliminado con éxito"
        });
    } catch (error) {
        next(error);
    }
};