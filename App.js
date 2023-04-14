/*
Final Project
*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const express = require('express');
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath));  //tell express to use that folder



//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

// -- URL NAVIGATION -- //
//depending on what url extension the user navigates to, send them the respective html file. 

/** You can add your own URLS here **/

app.get('/t1', function (req, res) {
    res.sendFile(publicPath + '/t1.html');
});
app.get('/t2', function (req, res) {
    res.sendFile(publicPath + '/t2.html');
});
app.get('/t3', function (req, res) {
    res.sendFile(publicPath + '/t3.html');
});
app.get('/t4', function (req, res) {
    res.sendFile(publicPath + '/t4.html');
});
app.get('/t6', function (req, res) {
    res.sendFile(publicPath + '/t6.html');
});
app.get('/t7', function (req, res) {
    res.sendFile(publicPath + '/t7.html');
});


//run this server by entering "node App.js" using your command line. 
   app.listen(port, () => {
     console.log(`Server is running on http://${host}:${port}`);
   });