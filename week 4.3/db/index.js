const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anujkshirsagar31_db_user:N6BgyxHGECQQnreN@cluster0.czoqyfa.mongodb.net/test")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Connection Error:", err));


//define schemas
const AdminSchema=new mongoose.Schema({
    username:String,
    password:String
});
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]

});
const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});
const Admin =mongoose.model('Admin',AdminSchema);
const User =mongoose.model('User',UserSchema);
const Course=mongoose.model('Course',CourseSchema);

module.exports ={
    Admin,
    User,
    Course
}