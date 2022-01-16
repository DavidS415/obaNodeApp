const express = require('express');

const {registerView, loginView, registerUser, loginUser } = require('../controllers/loginController');
const { protectRoute } = require("../auth/protect");
const { dashboardView } = require("../controllers/dashboardController");
const { formView } = require("../controllers/formController");

const router = express.Router();

//Register Routes
router.get('/register', registerView);
router.post('/register', registerUser);

//Login Routes
router.get('/login', loginView);
router.post('/login', loginUser);

//Dashboard Routes
router.get("/dashboard", protectRoute, dashboardView);

//Form Routes
router.get("/form", protectRoute, formView);

module.exports = router;