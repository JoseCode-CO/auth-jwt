import { Router } from "express";
import {createProduct, getProduct, getProductById, updateProductById, deleteProductById} from '../controllers/products.controller'
import {verifyToken}  from "../middlewares/auth.Jwt";
import { isModerator } from "../middlewares/auth.Jwt";

const router = Router();

router.get('/', getProduct)

router.post('/', verifyToken, createProduct)

router.get('/:productId', getProductById)

router.put('/:productId', updateProductById)

router.delete('/:productId', verifyToken, isModerator, deleteProductById)

export default router;