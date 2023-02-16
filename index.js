const { render } = require('ejs');
const express = require('express');
const { dirname } = require('path');
const db=require('./config/mongoose')
const Contact=require('./models/contact')







const path = require('path');
const port = 9380;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
// //MIDDLE WARE 1
// app.use(function(req,res,next){
//     console.log('Middle ware 1 is called')
//     next();
// })
// //MIDDLEWARE 2
// app.use(function(req,res,next){
//     console.log("Middleware 2 is called")
//     next();
// })


var ContactList = [
    {
        name: "Manoj",
        phone: "9381784113"
    },
    {
        name: "Manoj",
        phone: "9381784113"
    },
    {
        name: "Manoj",
        phone: "9381784113"
    }
]
app.get('/', function (req, res) {


    Contact.find({},function(err,contacts){
        if(err){
            console.log("error in fetching contacts");
            return;
        }
        return res.render('home', {
            title: "CONTACTS",
            contacts: contacts
        })
    })
   
})
app.get('/practice', function (req, res) {
    return res.render('practice', {
        title: "Let us play with EJS"
    })
})



app.post('/contact-list', function (req, res) {
 console.log("YAAAAAAAAAAAAAAaa",req.body);

    Contact.create({
        
        name: req.body.name,
        phone: req.body.phone



//creating contact through add button

    }, function (err, newContact) {
     
        if (err) {
            console.log("error in creating contact");
            return;
        }
        console.log("*******", newContact);
        return res.redirect('back')
    });






    // return res.redirect('/practice')



    // console.log(req.body);

    // ContactList.push({
    //     name:req.body.name,
    //     phone:req.body.contact
    // });
    // return res.render('home',{
    //     contacts:ContactList,
    //     title:"CONTACTS"


});


// ContactList.push({
//     name:req.body.name,
//     number:req.body.number
// })
// return res.redirect('/');


// app.get('/delete-contact/:phone', function (req, res) {
//    // console.log(req.params);
//     // //let get id from query in the url
//     let id=req.query.id;
//     //finding the contact in the data base using id and delete
//     let ContactList = ContactList.findIndex()
//     let phone = req.params.phone;
//     let contactIndex = ContactList.findIndex(contact => contact.phone == phone)
//     if (contactIndex != -1) {
//         ContactList.splice(contactIndex, 1);
//     }
//     // return res.redirect('back');
//     res.render('home', {
//         title: 'home',
//         contacts: ContactList

//     })
// });



//FOR DELETING  CONTACT

app.get('/delete-contact/:id', function(req, res) {
    let id = req.params.id;
    Contact.findOneAndDelete({ phone: id }, function(err) {
        if (err) {
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    });
});





app.listen(port, function (err) {
    if (err) {
        console.log("we got an error ", err)
    }
    console.log('express is running with the port', port)
})
