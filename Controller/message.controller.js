import { Message } from '../models/message.model.js';

export const getMessagesByChat = async (req, res, next) => {
    try {
        const { chatId } = req.params;
        const messages = await Message.find({ chatId }).populate('userId', 'username');
        
        res.json({
            success: true,
            data: messages,
            message: "Historial de mensajes se ha obtenido correctamente"
        });
    } catch (error) {
        next(error);
    }
};

export const createMessage = async (req, res, next) => {
    try {
        const { chatId, userId, content } = req.body;
        const newMessage = new Message({ chatId, userId, content });
        await newMessage.save();

        res.status(201).json({
            success: true,
            data: newMessage,
            message: "Msj enviado con éxito"
        });
    } catch (error) {
        next(error);
    }
};