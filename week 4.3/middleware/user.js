const{User} =require("../db");
function userMiddleware(req,res)
{
    const username=req.headers.username;
    const password=req.headers.password;

    User.findone({
        username:username,
        password:password
    })
    .then(function(value)
{
    if(value){
        next();
    }
    else
    {
        res.status(403).json(
    {
        msg:"user doesn't exist"
    })
}
})
}
module.exports=userRouter;