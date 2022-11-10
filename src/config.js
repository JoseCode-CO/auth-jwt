import {config} from 'dotenv';
config()

export const MONGODB_URI = process.env.MONGODB_URI;
export const CONFIGJWT = process.env.SECRET;