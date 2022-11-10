import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
const router = Router();

router.post('/signup', signIn)
router.post('/signin', signUp)

export default router;