var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get("/cities", function(req, res) {
    var cities = [
        {
            name: "Sarajevo",
            price: "1000",
            image: "images/top_1.jpg"
        },

        {
            name: "Brcko",
            price: "1500",
            image: "images/top_2.jpg"
        },

        {
            name: "Travnik",
            price: "500",
            image: "images/top_3.jpg"
        },

        {
            name: "Mostar",
            price: "500",
            image: "images/top_4.jpg"
        }
    ]
    res.json(cities);
})


app.get("/offers", function(req, res){

    var offers= [


        {
            location: "Sarajevo",
            price: "500",
            stars: "5",
            image: "images/top_1.jpg",
            people: "3",
            nights: "5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus."

        },

        {
            location: "Travnik",
            price: "5080",
            stars: "4",
            image: "images/top_2.jpg",
            people: "3",
            nights: "5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus."

        },

        {
            location: "Mostar",
            price: "500",
            stars: "3",
            image: "images/top_3.jpg",
            people: "3",
            nights: "5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus."

        },

        {
            location: "Brcko",
            price: "500",
            stars: "5",
            image: "images/top_4.jpg",
            people: "3",
            nights: "5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus."

        }

    ]
res.send(offers);

})



app.listen(port, function(){
    console.log('server is listening on port ' + port)
})

