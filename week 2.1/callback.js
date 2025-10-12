/*
function cube(n)
{
    return n*n*n;
}
function square(n)
{
    return n*n;
}
function callback(a,b,fn)
{
    anuj1=fn(a);
    anuj2=fn(b);
    console.log(anuj1)
    return anuj1+anuj2;
}
let bhaiya=callback(2,4,cube)
console.log(bhaiya);

*/
function anuj(callback)
{
    callback("hi there")
}

async function main()
{
    anuj(function(value){
        console.log(value);
    });
}
main();