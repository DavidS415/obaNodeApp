const Obrf = require("../models/Obrf");

//Get request to view update

const updateView = (req, res) => {
    res.render("update", {
      user: req.user
    });
  };

module.exports = {
    updateView,
  };