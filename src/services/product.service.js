const { where } = require("sequelize")
const Product = require("../models/product")

const getALlProduct = async ()=>{
    return await Product.findAll()
}
const findProductById = async (idProduct) =>{
    return await Product.findByPk(idProduct)
}
const createProduct = async(Inputdata) =>{
    const product = await Product.create({NameProduct: Inputdata.nameProduct,title : Inputdata.title,description: Inputdata.description,price: Inputdata.price,discount: Inputdata.discount,amount:Inputdata.amount,colorId:Inputdata.colorId,categoryId: Inputdata.categoryId,images:Inputdata.images});
    return product;
}
const deleteProduct = async(idProduct) =>{
    await Product.destroy({
        where: {
            id: idProduct,
        },
    })
}
module.exports = {
    getALlProduct,findProductById,
    createProduct,deleteProduct
}