const express = require('express');
const router = express.Router();

//Import authentication controller
const { protectRoute, allowIf, checkRoleAdmin, checkRoleUser, checkRoleCandidate } = require("../auth/protect");

//Import action controllers
const { registerView, loginView, registerUser, loginUser, logoutUser } = require('../controllers/loginController');
const { dashboardView, errorView } = require("../controllers/dashboardController");
const { formView, submitForm } = require("../controllers/formController");
const { updateView, updateObrfView, updateObrfEdit } = require("../controllers/updateController");
const { offerView, offerSubmit, thankyouView, offerSend, offerSent, saveSignature, deleteSignature } = require("../controllers/offerController");
const { adminView, adminCreate, adminEdit, adminEditId, adminUpdate, adminEditPassword, adminUpdatePassword } = require("../controllers/adminController");

//Register Routes
//router.get('/register', registerView);
router.post('/register', protectRoute, checkRoleAdmin, registerUser);

//Login Routes
router.get('/', allowIf, loginView);
router.get('/login', allowIf, loginView);
router.post('/login', loginUser);

//Logout Routes
router.post('/logout', logoutUser);

//Dashboard Routes
router.get("/dashboard", protectRoute, checkRoleUser, dashboardView);
router.get("/noaccess", protectRoute, errorView)

//Admin Routes
router.get("/admin", protectRoute, checkRoleAdmin, adminView);
router.get("/admincreate", protectRoute, checkRoleAdmin, adminCreate);
router.get("/adminedit", protectRoute, checkRoleAdmin, adminEdit);
router.get("/adminedit/:id", protectRoute, checkRoleAdmin, adminEditId);
router.post("/adminedit/:id", protectRoute, checkRoleAdmin, adminUpdate);
router.get("/admineditpassword/:id", protectRoute, checkRoleAdmin, adminEditPassword);
router.post("/admineditpassword/:id", protectRoute, checkRoleAdmin, adminUpdatePassword);

//Form Routes
router.get("/form", protectRoute, checkRoleUser, formView);
router.post("/form", protectRoute, checkRoleUser, submitForm);

//Update Routes
router.get("/update", protectRoute, checkRoleUser, updateView);
router.get("/update/:id", protectRoute, checkRoleUser, updateObrfView);
router.post("/update/:id", protectRoute, checkRoleUser, updateObrfEdit);

//Offer Letter Routes (for User)

router.get("/sendlink/:id", protectRoute, checkRoleUser, offerSent)
router.post("/sendlink/:id", protectRoute, checkRoleUser, offerSend);

//Offer Letter Routes (for Candidate)
router.get("/offerletter/:id", protectRoute, checkRoleCandidate, offerView);
router.post("/offerletter/:id", protectRoute, checkRoleCandidate, offerSubmit);
router.get("/thankyou/:id", protectRoute, checkRoleCandidate, thankyouView);
router.post("/savesiganture/:id", protectRoute, checkRoleCandidate, saveSignature);
router.post("/deletesiganture/:id", protectRoute, checkRoleCandidate, deleteSignature);

module.exports = router;