import express from "express"
import {connectDB} from './database';
import {createRoles} from './libs/initialSetup'

const app = express()
connectDB()
createRoles()

app.use(express.json())

export default app