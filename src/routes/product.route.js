import Express from "express";
import productController from "../controllers/product.controller";
const router = Express.Router();

let productRouter = (app) => {
    router.get("/product/:idProduct=?",productController.findProductByPk)
    router.delete("/product/:idProduct=?",productController.deleteProduct)
    router.route("/product").get(productController.getAllProduct).post(productController.createProduct);
    app.use("/api",router);
};

module.exports = productRouter;
