const User = require("../models/User");

const protectRoute = (req, res, next) =>{
    if (req.isAuthenticated()) {
      return next();
    }
    console.log('Please log in to continue');
    res.redirect('/login');
  }
const allowIf = (req, res, next) =>{
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');      
  }
  
const checkRoleAdmin = (req, res, next) =>{
    const userRole = req.user.role
    if (userRole === 'Admin') {
      res.status(200);
      return next();
    }
    console.log('Access denied');
    res.redirect('/noaccess')
  }

const checkRoleUser = (req, res, next) =>{
    const userRole = req.user.role
    if (userRole === 'Admin'|| userRole === 'User') {
      res.status(200);
      return next();
    }
    console.log('Access denied');
    res.redirect('/noaccess')
  }

const checkRoleCandidate = (req, res, next) =>{
    const userRole = req.user.role
    const obrfID = req.user.obrf_id
    const requestID = req.params.id
    if (userRole === 'Candidate' && obrfID === requestID) {
      res.status(200);
      return next();
    }
    console.log('Access denied');
    res.redirect('/noaccess')
  }

module.exports = {
    protectRoute,
    allowIf,
    checkRoleAdmin,
    checkRoleUser,
    checkRoleCandidate,
    };