/*
function promisifiedtimeout(duration)
  
{

        const p=new Promise(function(resolve){
            setTimeout(resolve,duration);
        })
        return p;
    }
promisifiedtimeout(3000).then(function(){
    console.log("first is done");
})*/



//promise return promise and doest not take callback as an input
function promisifiedtimeout(duration)
{
    const p =new Promise(function(resolve){
        setTimeout(function(){
         resolve();
        },duration);
        
    });
    return p;
}
const ans =promisifiedtimeout(1000);
ans.then(function(){
    console.log("anuj");
});
