const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(session({
    secret: "secret text.",
    resave: false ,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/documentDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", "true");

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("admin/register", function (req, res) {
    User.register({userName: req.body.userName}, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/admin");
            })
        }
    })
});

app.post("admin/login", function(req, res) {
    console.log("got request");
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });
    req.login(user, function(err) {
        if (err) {
            console.log(err);
            res.send(false)
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/admin");
            })
        }
    });
});

app.get("/admin", function(req, res) {
    if (req.isAuthenticated()) {
        res.send(true);
    } else {
        res.send(false);
    }
})

app.listen(5000, function() {
    console.log("Server started at port 5000");
})