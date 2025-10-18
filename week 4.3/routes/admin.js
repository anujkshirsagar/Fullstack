const express=require("express");
const adminMiddleware=require("../middleware/admin");
const { Admin, Course } = require("../db"); 
const router=express.Router();

router.post('/signup',(req,res)=>{
    const username =req.body.username;
    const password=req.body.password;

   //check if the user with this username already exists
   Admin.create({
    username:username,
    password:password
   }) 
   res.json({
    message:'admin created successfully'
   })
});
router.post('/courses',adminMiddleware,async (req,res)=>{
    const title =req.body.title;
    const description =req.body.description;
    const imageLink =req.body.imagelink;
    const price=req.body.price;
    
    const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.json({
        message:'course created succesfully',courseId:newCourse.__id
    })
});
router.get('/courses',adminMiddleware,async(req,res)=>{
   const response=await Course.find({});
   res.json({
    courses:response
   })
});
module.exports=router;
