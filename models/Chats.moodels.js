import mongoose from "mongoose"
import { Schema, model } from 'mongoose';

const chats_chema = new Schema({
    nombre: { type: String, required: true },
    participantes: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
}, );

const Chat = mongoose.model('Chat', chats_chema)
export default Chat;