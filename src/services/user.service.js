import bcryptjs from "bcryptjs";
const Users = require("../models/User");
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
        return{
            data: newUser,
            Message: "OK"
        }
    }
};

const getALlUser = async () =>{
    try {
        const users = await Users.findAll()
        return {
            data: users,
            Message: "OK"
        }
    } catch (error) {
        return {
            error: error,
            Message : "error"
        }
    }
}
module.exports = {
    SighUp,getALlUser
}