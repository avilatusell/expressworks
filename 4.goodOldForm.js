var express = require('express');
var app = express();
var PORT = process.argv[2] || 3000;
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function (req, res) {
	res.send(req.body.str.split('').reverse().join(''));
});

//hacemos res.send para terminar la conexión con el terminal  en lugar de console.log.



app.listen( PORT, function() {
	console.log("Listening to port " + PORT )
} );