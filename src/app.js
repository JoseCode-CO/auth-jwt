import express from "express"
import {connectDB} from './database';

connectDB();
const app = express()

app.use(express.json())

export default app