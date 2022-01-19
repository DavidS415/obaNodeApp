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
const updateObrfView = (req, res) => {
  const id = req.params.id;
  Obrf.findById(id, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.render("updateobrf", {
        details: allDetails,
        user: req.user
      });
    }
  });
}
module.exports = {
    updateView,
    updateObrfView,
  };