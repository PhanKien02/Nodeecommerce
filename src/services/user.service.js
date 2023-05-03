import bcryptjs from "bcryptjs";
import Auth from "../models/auth";
import Cart from "../models/cart";
const Users = require("../models/User");
const {createCart} = require("./cart.service")
const hashPassword = async (password) => {
    try {
        const salt = bcryptjs.genSaltSync(10);

        const newPassword = await bcryptjs.hashSync(password, salt);
        return newPassword;
    } catch (error) {
        console.error(error);
    }
};
const checkUser = (myemail) => {
    return new Promise(async (resolve, rejects) => {
        try {
            let user = await Users.findOne({ where: { email: myemail } });
            if (user) resolve(true);
            else resolve(false);
        } catch (error) {
            rejects(error);
        }
    });
};
const SighUp = async (Inputdata) => {
    const check = await checkUser(Inputdata.email);
    try {
        if (check) {
            return {
                errMessage: "Your email is already in used, Plz try another email",
            };
        } else {
            const password = await hashPassword(Inputdata.password);
            const newUser = await Users.create({
                email: Inputdata.email,
                userName: Inputdata.userName,
                password: password,
                active: true,
                auth_id: Inputdata.auth_id,
            });
            if(newUser.auth_id === 1){
                var newCart= await createCart(newUser.id)
            }
            return{
                data: {
                    newUser : newUser,
                    newCart : newCart
                },
                Message: "OK"
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const getALlUser = async () =>{
    try {
        const users = await Users.findAll({include:[
            {
                model: Auth,
                as: "Auth"
            }
        ]
    })
        return {
            data: users,
            Message: "OK"
        }
    } catch (error) {
        console.log(error);
        return {
            error: error,
            Message : "error"
        }
    }
}
const BlockUser = async (idUser)=>{
    try {
        const User = await Users.findByPk(idUser);
        if(User){
            const myUser= await User.update({active: false});
            return {
                data: myUser,
                Message: "OK"
            }
        }
        else {
            return {
                Message: "user not fond!!"
            }
        }
    } catch (error) {
        console.log(error);
        return{
            Message: "error"
        }
    }
}
module.exports = {
    SighUp,getALlUser,BlockUser
}