const MongoClient = require('mongodb').MongoClient;
var db;
var express = require('express');
var jwt = require("jsonwebtoken");
var jwtSecret = "R&m=^uUv29*?cnNC";

var app = express();
var port = process.env.PORT || 3000;
var mongo = process.env.MONGODB_URI || 'mongodb://abdulhakim:0955816754h*@ds259253.mlab.com:59253/discover_bosnia';

app.use(express.static('public'))
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get("/cities", function (req, res) {
    db.collection('cities').find().toArray(function (error, cities) {
        if (error) return console.log(error);
        res.json(cities)
    })
})


app.get("/offers", function (req, res) {
    db.collection('offers').find().toArray(function (error, offers) {
        if (error) return console.log(error);
        res.json(offers)
    })


})

app.get("/specialoffers", function (req, res) {
    db.collection('specialoffers').find().toArray(function (error, offers) {
        if (error) return console.log(error);
        res.json(offers)
    })


})



app.post("/login", function (req, res) {
    db.collection("users").findOne({ "email": req.body.email, "password": req.body.password }, function (error, user) {
        if (error) {
            throw error;
        } else {
            if (user) {
                delete user.password;
                var token = jwt.sign(user, jwtSecret, { expiresIn: 86400 });
                res.json({
                    message: "User is authenticated.",
                    token: token
                });
            } else {
                res.status(401).send("User does not exist.");
            }
        }
    })
});



app.post("/register", function (req, res) {
    db.collection("users").findOne({ "email": req.body.email, "password": req.body.password }, function (error, user) {
        if (error) {
            throw error;
        } else {
            if (user) {
                delete user.password;
                var token = jwt.sign(user, jwtSecret, { expiresIn: 86400 });
                res.json({
                    message: "User is authenticated.",
                    token: token
                });
            } else {
                res.status(401).send("User does not exist.");
            }
        }
    })
});










MongoClient.connect(mongo, function (error, database) {
    if (error) return console.log(error);
    db = database;

    app.listen(port, function () {
        console.log('server is listening on port ' + port)
    })
})



