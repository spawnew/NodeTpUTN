import mongoose from 'mongoose';
import ENVIRONMENT from './environment.config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(ENVIRONMENT.MONGO_URI);
        console.log(' Conectado a MongoDB Atlas');
    } catch (err) {
        console.error(' Error de conexión:', err.message);
    }
};
export default connectDB