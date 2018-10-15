var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('lingua'))

app.listen(port, function(){
    console.log('server is listening on port ' + port)
})