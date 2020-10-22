const express=require('express');
const app=express();
const PORT=process.env.PORT||9000;


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})



app.listen(PORT,()=>{
    console.log("app running on server with host "+PORT);
})
