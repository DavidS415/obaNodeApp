const formView = (req, res) => {
    res.render("form", {
      user: req.user
    });
  };
  module.exports = {
    formView,
  };