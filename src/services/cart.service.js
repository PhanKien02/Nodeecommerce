const Cart = require("../models/cart")

const createCart = (userId) =>{
    const myCart = Cart.create({userId : userId})
    return myCart
}
module.exports = {createCart}