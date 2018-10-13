var express = require('express');

var app = express();
var port = 3000 || process.env.PORT;

app.get('/', function (req,res) {
    res.status(200).send('Hello from new app.')
})

app.listen(port, function(){
    console.log('server is listening on port ' + port)
})