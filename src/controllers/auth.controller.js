import User from '../models/User'
import jwt from 'jsonwebtoken';
import { CONFIGJWT } from '../config';

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, CONFIGJWT, {
        expiresIn: 86400//24 hours
    })

    res.json(token)

}

export const signIn = async (req, res) => {
    res.json("tets")
}