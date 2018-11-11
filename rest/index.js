const MongoClient = require('mongodb').MongoClient;
var db;
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var mongo = process.env.MONGODB_URI || 'mongodb://abdulhakim:0955816754h*@ds259253.mlab.com:59253/discover_bosnia';

app.use(express.static('public'))

app.get("/cities", function (req, res) {
    db.collection('cities').find().toArray(function (error, cities) {
        if (error) return console.log(error);
        res.json(cities)
    })
})


app.get("/offers", function (req, res) {
    db.collection('offers').find().toArray(function (error, offers){
        if(error) return console.log(error);
        res.json(offers)
    })


})

MongoClient.connect(mongo, function (error, database) {
    if (error) return console.log(error);
    db = database;

    app.listen(port, function () {
        console.log('server is listening on port ' + port)
    })
})



