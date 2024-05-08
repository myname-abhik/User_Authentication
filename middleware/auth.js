const {getUser} =require("../service/auth");
async function restrictTologgedinUserOnly(req,res,next){
    console.log(req)
    const userUid = req.cookies?.sessionId
    if(!userUid)
    {
    console.log(userUid);
    return res.redirect("/signin")
    }
    const user = getUser(userUid)
    {
    if(!user) return res.redirect("/signin")
    }

    req.user= user;
    next();

}
async function checkAuth(req,res,next){
    console.log(req)
    const userUid = req.cookies?.sessionId
   const user = getUser(userUid)
   req.user= user;
    next();

}
module.exports ={restrictTologgedinUserOnly,
    checkAuth}