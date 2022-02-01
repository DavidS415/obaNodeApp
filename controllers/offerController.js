const Obrf = require("../models/Obrf");

const offerView = (req, res) => {
    const id = req.params.id;
    Obrf.findById(id, function (err, allDetails) {
      if (err) {
        console.log(err);
      } else {
        res.render("offerletter", {
          details: allDetails,
        });
      }
    });
  }

module.exports = {
    offerView,
  };