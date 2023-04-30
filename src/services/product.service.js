const { where } = require("sequelize")
const Product = require("../models/product")

const getALlProduct = async ()=>{
    try {
        const products= await Product.findAll()
        return {
            data: products,
            Message: "OK"
        }
    } catch (error) {
        return {
            error: error,
            Message : "error"
        }
    }
}
const findProductById = async (idProduct) =>{
    try {
        const product = await Product.findByPk(idProduct)
        return {
            data: product,
            Message: "OK"
        }
    } catch (error) {
        return {
            error: error,
            Message : "error"
        }
    }
}
const createProduct = async(Inputdata) =>{
    try {
        const product = await Product.create({NameProduct: Inputdata.nameProduct,title : Inputdata.title,description: Inputdata.description,price: Inputdata.price,discount: Inputdata.discount,amount:Inputdata.amount,colorId:Inputdata.colorId,categoryId: Inputdata.categoryId,images:Inputdata.images});
        return {
            data : product,
            Message: "OK"
        };
    } catch (error) {
        return {
            Error : error,
            Message : "Error"
        }
    }
}
const deleteProduct = async(idProduct) =>{
    try {
        await Product.destroy({
            where: {
                id: idProduct,
            },
        })
        return {
            Message : "delete product success"
        }
    } catch (error) {
        return {
            error: error,
            Message : "error"
        }
    }
}
module.exports = {
    getALlProduct,findProductById,
    createProduct,deleteProduct
}