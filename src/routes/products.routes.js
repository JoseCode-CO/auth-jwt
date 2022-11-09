import { Router } from "express";
import {createProduct, getProduct, getProductById, updateProductById, deleteProductById} from '../controllers/products.controller'
const router = Router();

router.get('/', getProduct)

router.post('/', createProduct)

router.get('/:productId', getProductById)

router.put('/:productId', updateProductById)

router.delete('/:productId', deleteProductById)

export default router;