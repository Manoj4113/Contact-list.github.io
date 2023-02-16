//require library
const mongoose =require('mongoose');
//connect to data base

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/conatcts-list-db');
//aquire connection (to check if it is succeddful)
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,"error connecting to db"));
//up and running then print
db.once('open',function(){
   console.log("successfuly connected to data base")
});