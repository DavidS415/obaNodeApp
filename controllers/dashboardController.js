const Obrf = require("../models/Obrf");

//For Register Page
const dashboardView = (req, res) => {
    Obrf.find({}, function (err, allDetails) {
      if (err) {
        console.log(err);
      } else {
        res.render("dashboard", { 
          details: allDetails,
          user: req.user
        });
      }
    });
  };
  module.exports = {
    dashboardView,
  };