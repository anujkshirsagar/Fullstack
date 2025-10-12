const express=require("express");
const app =express();
const user= [{
    name:"john",
    kidneys:[
        {
            healthy:false
        }]
    }];
app.get("/",function(req,res)
{
    const johnkidneys=user[0].kidneys;
    const numberofkidneys=johnkidneys.length;
    let numberofhealthykidneys=0;
    for(i=0;i<johnkidneys.length;i++)
  {      if(johnkidneys[i].healthy)
        {
            numberofhealthykidneys=numberofhealthykidneys+1;
        }

}
const numerofunhealthykidneys=numberofkidneys-numberofhealthykidneys;
res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthkidneys
})
})
app.listen(3000);
    