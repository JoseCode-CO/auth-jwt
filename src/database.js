import { connect } from 'mongoose';
import { MONGODB_URI } from './config'

export const connectDB = async () => {
    try {
        await connect(MONGODB_URI);
        console.log("Ok")
    } catch (error) {
        console.error(error);
    }
};