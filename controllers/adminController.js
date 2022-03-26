const User = require("../models/User");
const bcrypt = require("bcryptjs"); 

const adminView = (req, res) => {
    User.find({}, function (err, allDetails) {
      if (err) {
        console.log(err);
      } else {
        res.render("Admin/admin", { 
          details: allDetails,
          user: req.user
        });
      }
    });
  };

const adminCreate = (req, res) => {
    User.find({}, function (err, allDetails) {
        if (err) {
          console.log(err);
        } else {
          res.render("Admin/admincreate", { 
            details: allDetails,
            user: req.user
          });
        }
      });
}

const adminEdit = (req, res) => {
  User.find({}, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.render("Admin/adminedit", { 
        details: allDetails,
        user: req.user
      });
    }
  });
}

const adminEditId = (req, res) => {
  const id = req.params.id;
  User.findById(id, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.render("Admin/admineditid", {
        details: allDetails,
        user: req.user
      });
    }
  });
}

const adminUpdate = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin");
    };
  });
};

const adminEditPassword = (req, res) => {
  const id = req.params.id;
  User.findById(id, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.render("Admin/admineditpassword", {
        details: allDetails,
        user: req.user
      });
    }
  });
}

const adminUpdatePassword = (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const id = req.params.id;
  if (!newPassword || !confirmPassword) {
    console.log("Fill empty fields");
  }
  if (newPassword !== confirmPassword) {
    console.log("Password must match");
  } else {
    User.findById(id).then(user => {
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newPassword, salt, (err, hash) => {
          if (err) throw (err);
          user.password = hash;
          user
            .save()
            .then(res.redirect("/admin"))
            .catch((err) => console.log(err));
        })
      );
    })
  }
}

module.exports = {
    adminView,
    adminCreate,
    adminEdit,
    adminEditId,
    adminUpdate,
    adminEditPassword,
    adminUpdatePassword,
};