import Product from "../models/Product"

export const createProduct = async (req, res) => {
    const { name, category, price, imgURL } = req.body
    const newProduct = new Product({ name, category, price, imgURL })
    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

export const getProductById = (req, res) => {

}

export const updateProductById = (req, res) => {

}

export const deleteProductById =async (req, res) => {
    const { productId } = req.params;
    try {
        await Product.findByIdAndDelete(productId);
        console.log(productId)
        res.status(204).json()
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar el producto"
        })
    }
}