var express = require('express');
var app = express();
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());
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

app.get('/admin', function(req, res) {
    res.render('admin/index');
});


app.listen(8080);
console.log('Hello There, Server is listening on port 8080');