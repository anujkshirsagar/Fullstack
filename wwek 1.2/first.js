/*const ages = [21,22,23,24,25,26];
numberofpeople=ages.length;
for(i=0;i<=numberofpeople;i++)
{
    if(ages[i]%2==0)
    {
        console.log(ages[i]);
    }
}*/


//arrays and objects
/*const Allusers=[{
    FirstName:"anuj",
    Gender:"male",

},
{
    FirstName:"sahil",
    Gender:"male",

},
{
    FirstName:"Omkar",
    Gender:"female",

}
]
for(let i=0;i<Allusers.length;i++)
{
    if(Allusers[i]["Gender"] == "male")
    {
        console.log(Allusers[i]["FirstName"])

    }
}*/

//callback function
/*function anuj(num1,num2,fnToCall)
{
    let result=num1+num2;
    fnToCall(result);

}
function active(data)
{
    console.log("result is anuj"+data);
}
function passive(data)
{
    console.log("result is "+data);
}
const ans=anuj(2,4,active);
*/

//another method for call back
/*
function calculatearithmetic(a,b,type)
{
if(type == "sum")
{
    const value= sum(a,b)
    return  value;
}
if(type === "sub")
 {   const value =sub(a,b)
    return value;
}
}
function sum(a,b )
{
    
   return a+b;
}
function sub(a,b)
{
    return a-b;
}

const value = calculatearithmetic(6,2,"sub");
console.log(value);
*/


/*
//settimeout

 function anuj()
 {
    console.log("anuj kshirsagar")
 }

//setTimeout(anuj,1*1000);

//setinterval=it will print after every interval

setInterval(anuj,1*1000);
*/
/*
//another example
function calculatearithmetic(a,b,anuj)
{
    const ans =anuj(a,b)
    return ans;
}

function sum(a,b)
{
    return a+b;

}
setTimeout(sum,*1000);
const value= calculatearithmetic(5,6,sum);
console.log(value);
*/ 
