const Product = require("../models/product")

const getALlProduct = async ()=>{
    return await Product.findAll()
}
const createProduct = async(product) =>{
    return product = Product.create({nameProduct: product.nameProduct,title : product.title,description: product.description,price: product.price,discount: product.discount,amount:product.amount,colorId:product.colorId,categoryId: product.categoryId,images:product.images})
}
module.exports = {
    getALlProduct,
    createProduct
}