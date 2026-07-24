import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
    name: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, );

const Chat = mongoose.model('Chat', chat_schema)
export default Chat;