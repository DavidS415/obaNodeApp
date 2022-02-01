const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const session = require('express-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose
    .connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

//BodyParsing
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));

var moment = require('moment');
var requiredDateFormat = "YYYY-MM-DD"; // this is just an example of storing a date format once so you can change it in one place and have it propagate
var shortDateFormat = "MMMM Do YYYY"; 
app.locals.moment = moment; // this makes moment available as a variable in every EJS page
app.locals.requiredDateFormat = requiredDateFormat;
app.locals.shortDateFormat = shortDateFormat;

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use('/', require('./routes/login'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server has started at port " + PORT))