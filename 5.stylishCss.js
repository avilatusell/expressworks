var path = require ('path');
var express = require('express');
var stylus = require('stylus');
var app = express();

var defaultPublicFolder = path.join(__dirname, 'public');
var publicFolder = process.argv[3] || defaultPublicFolder;
var PORT = process.argv[2] || 3000;

var stylusFolder = path.join(__dirname, 'stylus');

// Use Jade for HTML rendering
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Use Stylus for CSS
app.use( stylus.middleware(stylusFolder) )

// Folder for Static Files (css, js, img....)
app.use( express.static(stylusFolder) );
app.use( express.static(publicFolder) );

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(PORT);