const express = require('express');
const router = express.Router();

//Import authentication controller
const { protectRoute } = require("../auth/protect");

//Import action controllers
const {registerView, loginView, registerUser, loginUser, logoutUser } = require('../controllers/loginController');
const { dashboardView } = require("../controllers/dashboardController");
const { formView, submitForm } = require("../controllers/formController");
const { updateView, updateObrfView, updateObrfEdit } = require("../controllers/updateController");
const { offerView, offerSubmit, thankyouView, offerSend, offerSent, saveSignature, deleteSignature } = require("../controllers/offerController");

//Register Routes
router.get('/register', registerView);
router.post('/register', registerUser);

//Login Routes
router.get('/', loginView);
router.get('/login', loginView);
router.post('/login', loginUser);

//Logout Routes
router.post('/logout', logoutUser);

//Dashboard Routes
router.get("/dashboard", protectRoute, dashboardView);

//Form Routes
router.get("/form", protectRoute, formView);
router.post("/form", protectRoute, submitForm);

//Update Routes
router.get("/update", protectRoute, updateView);
router.get("/update/:id", protectRoute, updateObrfView);
router.post("/update/:id", protectRoute, updateObrfEdit);

//Offer Letter Routes
router.get("/offerletter/:id", offerView);
router.post("/offerletter/:id", offerSubmit);
router.get("/thankyou/:id", thankyouView);
router.get("/sendlink/:id", protectRoute, offerSent)
router.post("/sendlink/:id", protectRoute, offerSend);
router.post("/savesiganture/:id", saveSignature);
router.post("/deletesiganture/:id", deleteSignature);

module.exports = router;