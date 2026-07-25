import  Chat  from '../models/Chats.moodels.js';
import Message from '../models/Mensajes.models.js';
import '../models/Usuarios.models.js';
export const createChat = async (req, res, next) => {
    try {
        const { nombre, participantes } = req.body;

        const nuevoChat = await Chat.create({
            nombre,
            participantes
        });

        res.status(201).json({
            success: true,
            data: nuevoChat,
            message: "Chat creado con éxito"
        });
    } catch (error) {
        next(error);
    }
};

export const getChats = async (req, res, next) => {
    try {
        const chats = await Chat.find().populate('participantes', 'nombre email');

        res.json({
            success: true,
            data: chats,
            message: "Listado de chats obtenido correctamente"
        });
    } catch (error) {
        next(error);
    }
};

 



export const deleteChat = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chatEliminado = await Chat.findByIdAndDelete(id);

        if (!chatEliminado) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Chat no encontrado"
            });
        }

       
        await Message.deleteMany({ chatId: id });

        res.json({
            success: true,
            data: chatEliminado,
            message: "Chat eliminado con éxito"
        });
    } catch (error) {
        next(error);
    }
};