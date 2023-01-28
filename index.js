var express = require('express');
var path = require('path');
let ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'app_views'))

app.get('/', function(req, res) {
res.render('pages/index.ejs', {titoloJSON: "Home - EJS",
currentPage: "Home",
onloadFunc:""});
});

app.get('/classifica', function(req, res) {
res.render('pages/classifica.ejs', {titoloJSON: "Classifica - EJS",
currentPage: "Classifica",
onloadFunc:"loadTable()"});
});

app.listen(8080);
console.log('Server is listening on port 8080');
