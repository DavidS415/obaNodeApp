const Obrf = require("../models/Obrf");

//Get request to view update

const updateView = (req, res) => {
  Obrf.find({}, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.render("update", { 
        details: allDetails,
        user: req.user
      });
    }
  });
  };

module.exports = {
    updateView,
  };