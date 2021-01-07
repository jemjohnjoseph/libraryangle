const express = require('express');
// const Productdata = require('./src/model/Productdata');
const bookdata = require('./src/model/bookdata');
const authordata = require('./src/model/authoedata')
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();

var ObjectId = require('mongoose').Types.ObjectId;

app.use(cors());
app.use(bodyparser.json());

app.get('/books',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    bookdata.find()
            .then(function(books){
                res.send(books);
            });
});

app.post('/insert',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var book = {
       
        title : req.body.book.title,
        author : req.body.book.author,
        genre : req.body.book.genre,
        image : req.body.book.image
    }
    var book = new bookdata(book);
    book.save();
});

app.put('/update/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("HI"+req.body.product._id);
    // const id = ObjectId(req.body.product._id);
    const id = req.params.id;

    console.log(id);
    var book = {
       
        title : req.body.book.title,
        author : req.body.book.author,
        genre : req.body.book.genre,
        image : req.body.book.image
    }
    console.log(book);

    bookdata.findOneAndUpdate({ _id: id }, book ,{ new: true},(err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    });

});

app.delete('/delete/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("hi");
    const id = req.params.id;
    console.log(id);
    bookdata.findOneAndDelete({_id:id},(err,doc)=>{
        if(!err){
            console.log("deleted"+doc);
        }
        else{
            console.log(err);
        }
});
});
app.get('/authors',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    authordata.find()
            .then(function(authors){
                res.send(authors);
            });
});
app.post('/insert',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var author = {
       
        title : req.body.author.title,
        books : req.body.author.books,
        genre : req.body.author.genre,
        image : req.body.author.image
    }
    var author = new authordata(author);
    author.save();
});
app.listen(3003,function(){
    console.log("Listening to port 3003");
});