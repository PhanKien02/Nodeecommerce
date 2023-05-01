import Express from "express";
import productController from "../controllers/product.controller";
import userController from "../controllers/user.controller"
const router = Express.Router();

let WebRouter = (app) => {
    // router product
    router.get("/product/:idProduct=?",productController.findProductByPk)
    router.delete("/product/:idProduct=?",productController.deleteProduct)
    router.route("/product").get(productController.getAllProduct).post(productController.createProduct);
    //router user
    router.post("/sign-up",userController.signUp)
    app.use("/api",router);
    router.route("/user").get(userController.getALlUser)
    router.put("/user/:idUser=?",userController.BlockUser)
};

module.exports = WebRouter;
