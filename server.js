var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'))

// use res.render to load up an ejs view file

// index page is register
app.get('/', function(req, res) {
  res.render('register');
});

app.get('/login', function(req, res) {
    res.render('login');
});


app.listen(8080);
console.log('Server is listening on port 8080');