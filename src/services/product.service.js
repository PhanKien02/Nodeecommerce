const { where } = require("sequelize");
const Product = require("../models/product");
const Category = require("../models/category");
const Color = require("../models/color");
const getALlProduct = async () => {
    try {
        products = await Product.addColor()
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: "Category",
                },
                {
                    model: Color,
                    as: "Colors",
                }
            ],
        });
        return {
            data: products,
            Message: "OK",
        };
    } catch (error) {
        console.log(error);
        return {
            Message: "error",
        };
    }
};
const findProductById = async (idProduct) => {
    try {
        const product = await Product.findByPk(idProduct,{include:[
            {
                model: Category,
                as: "Category",
            },
            {
                model: Color,
                as: "Colors",
            }
        ]});
        return {
            data: product,
            Message: "OK",
        };
    } catch (error) {
        return {
            error: error,
            Message: "error",
        };
    }
};
const createProduct = async (Inputdata) => {
    try {
        const product = await Product.create({
            NameProduct: Inputdata.nameProduct,
            title: Inputdata.title,
            description: Inputdata.description,
            price: Inputdata.price,
            discount: Inputdata.discount,
            amount: Inputdata.amount,
            categoryId: Inputdata.categoryId,
            images: Inputdata.images,
        });
        color = await Color.create({id: "id"})
        return {
            data: product,
            Message: "OK",
        };
    } catch (error) {
        return {
            Error: error,
            Message: "Error",
        };
    }
};
const deleteProduct = async (idProduct) => {
    try {
        await Product.destroy({
            where: {
                id: idProduct,
            },
        });
        return {
            Message: "delete product success",
        };
    } catch (error) {
        return {
            error: error,
            Message: "error",
        };
    }
};
module.exports = {
    getALlProduct,
    findProductById,
    createProduct,
    deleteProduct,
};
