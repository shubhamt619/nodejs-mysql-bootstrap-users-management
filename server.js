var express = require("express");
var app = express();
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
const usersController = require("./controllers/users.controller");
const adminController = require("./controllers/admin.controller");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.set("json spaces", 2);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(connectLiveReload());
// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static("public"));

// use res.render to load up an ejs view file

// index page is register
app.get("/", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/admin/dashboard", adminController.getDasboard);
app.get("/admin/students", adminController.getStudents);
app.get("/admin/add-student", function (req, res) { 
  res.render("admin/students");
 });

app.get("/admin/admins", function (req, res) {
  res.render("admin/admins");
});


app.get("/student/dashboard", usersController.getDasboard);
app.get("/student/students", usersController.getStudents);

app.get("/logout", function (req, res) {
  res.redirect('/login');
});
// API Routes
app.get("/allStudents", usersController.getAllStudents);

app.post("/api/addUser", usersController.addUser);
app.post("/api/addStudent", usersController.addUser);
app.post("/api/addAdmin", usersController.addUser);
app.post("/api/loginUser", usersController.loginUser);

app.listen(8080);
console.log("Hello There, Server is listening on port 8080");
