// HELLO WORLD! Exercise 1 of 8

// Create an Express.js app that outputs "Hello World!" when somebody goes to
// /home.

// The port number will be provided to you by expressworks as the first argument
//of the application, i.e., process.argv[2].

// Run $ killall node  before verifying exercises (in your terminal on Mac OS X) 
//to end any previous processes.

// For Windows, use "taskkill /IM node.exe" in Command Prompt.

// Don't forget to install the Express module if you haven't already.

//     $ npm install express --save


var express = require('express');
var app = express();

app.get('/home', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.argv[2]);

