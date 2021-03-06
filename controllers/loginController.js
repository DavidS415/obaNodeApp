//js
const User = require("../models/User");
const bcrypt = require("bcryptjs");   
const passport = require("passport");
const { userRoleCheck, userIdCheck } = require("../services/loginRoleCheck");

//Get Register Page View
const registerView = (req, res) => {
    res.render("User/register", {
    } );
}

//Post Request that handles Register
const registerUser = (req, res) => {
    const { name, email, location, password, confirm } = req.body;
    if (!name || !email || !password || !confirm) {
      console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirm) {
      console.log("Password must match");
    } else {
      //Validation
      User.findOne({ email: email }).then((user) => {
        if (user) {
          console.log("email exists");
          res.render("User/register", {
            name,
            email,
            password,
            confirm,
          });
        } else {
          //Validation
          const newUser = new User({
            name,
            email,
            location,
            password,
          });
          //Password Hashing
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(res.redirect("/login"))
                .catch((err) => console.log(err));
            })
          );
        }
      });
    }
  };

// Get Login Page View 
const loginView = (req, res) => {

    res.render("User/login", {
    } );
}

//Post Request that handles Login
const loginUser = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        async function returnLogin (x) {
          const userRole = await userRoleCheck(x).then(function(result){
            console.log(result);
            return result;
          })
          const userId = await userIdCheck(x).then(function(result){
            console.log(result);
            return result;
          })
          console.log(userRole);
          if (!email || !password) {
            console.log("Please fill in all the fields");
            res.render("User/login", {
              email,
              password,
            });
          } else {
            if (userRole === 'Admin' || userRole === 'User') {
              passport.authenticate("local", {
                successRedirect: "/dashboard",
                failureRedirect: "/login",
                failureFlash: true,
              })(req, res);
            } else {
              passport.authenticate("local", {
                successRedirect: "/offerletter/" + userId,
                failureRedirect: "/login",
                failureFlash: true,
              })(req, res);
            }
          }
        }
        returnLogin(email);
      } else {
        console.log('Email does not exist');
        res.redirect('/login');
      }
    })
  }
  
const logoutUser = (req, res) => {
  req.logout();
  res.redirect('/login');
};

module.exports =  {
    registerView,
    loginView,
    registerUser,
    loginUser,
    logoutUser
};