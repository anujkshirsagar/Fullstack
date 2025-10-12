const express =require("express");

const app = express();
function usermiddleware(req,res,next)
{
     
    const username=req.headers.username;
    const password = req.headers.password;
    if(username!="anuj" || password !="pass")
    {
        res.status(403).json(
            {
                msg:"incorrect inputs",
            }
     
        );
    }
        else{
            next();
        }
    };
function kidneymiddleware(req,res,next)
{
     const kidneyId=req.query.kidneyId;


    if(kidneyId!=1 && kidneyId!=2)
    {
        res.status(403).json({
            msg:"incorrect inputs"
        });
    }else{
        next();
    }
};

app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){
    res.send("kidney is fine");
});
app.listen(3000);