const express=require('express');
const port=10000;
const app=express();
app.get('/',function(req,res){
    res.send("cool! it is running");

});


app.listen(port,function(err){
    if(err){
        console.log("we got an error ",err)
    }
    console.log('express is running with the port',port)
})



