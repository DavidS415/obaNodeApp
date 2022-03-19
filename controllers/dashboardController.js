const Obrf = require("../models/Obrf");

//For Register Page
const dashboardView = (req, res) => {
    Obrf.find({}, function (err, allDetails) {
      if (err) {
        console.log(err);
      } else {
        res.render("User/dashboard", { 
          details: allDetails,
          user: req.user
        });
      }
    });
  };

const errorView = (req, res) => {
    Obrf.find({}, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.render("User/accessdenied", { 
          user: req.user
        });
      }
    });
  };
  module.exports = {
    dashboardView,
    errorView,
  };