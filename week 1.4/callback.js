
/*function square(n) 
{
    return n*n;
    
}
function sumofsquare(a,b)

{let value1=square(a);
let value2=square(b);
let anuj3= value1+value2;
console.log("value is  "+anuj3);
}
let anuj=sumofsquare(2,3);
console.log(anuj);
*/

function square(a)
{
    return a*a;
}
function cube(a)
{
    return a*a*a;

}
function solve(a,b,fn)
{
    let value1=fn(a);
    let value2=fn(b);
    return value1+value2;
}
anuj2=solve(3,4,cube);
console.log(anuj2);