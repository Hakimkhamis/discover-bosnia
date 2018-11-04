var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get("/cities", function(req, res) {
    var cities = [
        {
            name: "Sarajevo",
            image: "images/top_1.jpg",
            description: "Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim. Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim. Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim. Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim."
        },

        {
            name: "Brcko",
            image: "images/top_2.jpg",
            description: "Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim. Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim."
        },

        {
            name: "Travnik",
            image: "images/top_3.jpg",
            description: "Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim. Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim."
        },

        {
            name: "Mostar",
            image: "images/top_4.jpg",
            description: "Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim. Lorem ipsum dolor sit amet, ei purto omittam nominavi sed, pri sumo maluisset ea, mei et homero sadipscing. Ex invenire democritum neglegentur sit, aliquip discere sed te. Vim ne case iriure aliquam, ut erat semper usu. Eu errem consul detraxit eos, in latine iracundia sea, te pro iracundia gloriatur. Velit accommodare est cu, corpora pericula rationibus an ius. Eros tantas mel ex. Ex cibo solet his. Mea dolores principes scribentur cu, velit offendit disputando vel ex, mazim platonem urbanitas cum te. Eam an ignota neglegentur. Ex mea purto brute, vidisse aliquip graecis ut mei, his minimum detracto vulputate cu. Purto elitr scaevola mei eu. Omittam incorrupte id sit, utroque salutatus adolescens ea vim."
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

