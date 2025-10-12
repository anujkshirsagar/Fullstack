const jwt=require("jsonwebtoken");
const contents={
    name:"anuj",
    accnumber:"12123124",
    iat:"455666",
};
const newtoken=jwt.sign(contents,"secret");
console.log(newtoken);