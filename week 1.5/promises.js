const fs=require('fs')

function anujreadfile()
{
    return new Promise(function(resolve)
    {
        fs.readFile("a.txt","utf-8",function(err,data)
    {
        resolve(data);

    });
    })
}
function anuj(data)
{
    console.log(data);

}
anujreadfile().then(anuj);