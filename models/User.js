const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 location: {     
   type: String,    
   default: "Detroit",
   },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "User",
  },

  obrf_id: {
    type: String,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;