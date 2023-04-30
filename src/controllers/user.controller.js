import userSevice from "../services/user.service"

const signUp = async (req,res)=>{
    console.log(req.body);
    const User = await userSevice.SighUp(req.body);
    return res.status(200).json(User)
}
const getALlUser = async (req,res) =>{
    const user = await userSevice.getALlUser();
    return res.status(200).json(user)
}
module.exports = {
    signUp,getALlUser
}