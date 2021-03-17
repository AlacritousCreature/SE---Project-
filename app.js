const express = require("express"),
    mongoose = require("mongoose"),
    //passport = require("passport"),
    //LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");

const app = express();
require('dotenv').config();



app.use(bodyParser.urlencoded({ extended: true }));


mongoose.set('useUnifiedTopology', true);
const url = process.env.MONGODB_URI || 3000

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log("Connected to database.");
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// PASSPORT CONFIGURATION
/*app.use(require("express-session")({
    secret: "oh! bhaieee, kya majak ho rha hai ye????",
    resave: false,
    saveUninitialized: false
}));



app.use(passport.initialize());
app.use(passport.session());*/


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/buildingdetails", (req, res) => {
    res.render("buildingDetails");
});

app.get("/occupancy", (req, res) => {
    res.render("occupancy");
});

app.get("/emergency", (req, res) => {
    res.render("emergencyDetails");
});

app.get("/contacts", (req, res) => {
    res.render("contacts");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

//user model



let port = process.env.PORT || 3000
app.listen(port, process.env.IP, () => {
    console.log("showing on port 3000.");
});