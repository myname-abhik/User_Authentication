const {v4:uuidv4} = require('uuid')
const {setUser} = require("../service/auth")
const User = require('../models/user');

async function handleUserSignup(req,res){
    const {name,email,password} = (req.body);
    await User.create({
    name:name,
    email:email,
    password:password
});
    return res.render("signin");
    // res.json({self:"ok"})

}
async function handleUserSignin(req,res){
    const {email,password} = (req.body);
    const user  = await User.findOne({email:email,password:password})
    if(!user){
        return res.render("signin",{error:"user not found"});
    }
    const sessionId = uuidv4();

    setUser(sessionId, user);
    res.cookie('sessionId',sessionId);
    res.redirect("/")

}
module.exports = {handleUserSignup,
 handleUserSignin};