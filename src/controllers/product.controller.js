const ProductService = require("../services/product.service")

const getAllProduct = async (req,res) =>{
   const products= await ProductService.getALlProduct()
   return res.status(200).json(products)
}
const findProductByPk = async (req,res) =>{
   const products= await ProductService.findProductById(req.params.idProduct)
   return res.status(200).json(products)
}
const createProduct = async (req,res) =>{
   console.log(req);
   const product = await ProductService.createProduct(req.body)
   return res.status(200).json(product)
}
const deleteProduct = async (req,res) =>{
   console.log(req);
   const msg=  ProductService.deleteProduct(req.params.idProduct).then(()=>{
      return res.status(200).json("delete product success")
   });
}
module.exports = {
   getAllProduct,findProductByPk,createProduct,deleteProduct
}