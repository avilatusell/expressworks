//  JADE
//  Exercise 3 of 8

// Create an Express.js app with a home page rendered by the Jade template engine.
// The home page should respond to /home.
// The view should show the current date using 'new Date.toDateString()'.
// We use 'toDateString()' to simply return the date in a human-readable format
// without the time.

var path = require ('path');
var express = require('express');
var app = express();
var PORT = process.argv[2] || 3000;
var defaultPublicFolder = path.join(__dirname, 'public');
var publicFolder = process.argv[3] || defaultPublicFolder;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use( express.static(publicFolder) );

app.get('/home', function (req, res) {
	res.render('index', {date: new Date().toDateString()})
});

app.listen( PORT, function() {
	console.log("Listening to port " + PORT )
} );