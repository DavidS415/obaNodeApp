const User = require("../models/User");

async function userRoleCheck (x) {
    const userRole = await User.findOne({ email: x })
    .then(function(result){
        const role = result.role;
        return role
    });
    console.log(userRole);
    return userRole;
}

async function userIdCheck (y) {
    const userID = await User.findOne({ email: y })
    .then(function(result){
        const id = result.obrf_id;
        return id
    });
    console.log(userID);
    return userID;
}

module.exports = {
    userRoleCheck,
    userIdCheck,
  };