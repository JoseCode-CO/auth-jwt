import jwt from 'jsonwebtoken'
import { CONFIGJWT } from '../config'
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: "No token provided" })
        const decoded = jwt.verify(token, CONFIGJWT)
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 })
        if (!user) return res.status(404).json({ message: 'No user found' })

        console.log(decoded)
        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}