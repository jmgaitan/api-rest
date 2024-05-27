import { Product } from '../models/Product.js'

export const createProduct = async (req, res) => {
    const {body, file} = req
    
    const product = await Product.create({
        ...body,
    })
};

