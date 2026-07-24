import  Chat  from '../models/Chats.moodels.js';

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