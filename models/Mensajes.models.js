import mongoose from "mongoose"
import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    chatId: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    content: { type: String, required: true }
})



const Message= mongoose.model('Message', messageSchema)
export default Message;