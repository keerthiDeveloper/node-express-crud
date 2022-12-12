const mongoose = require("mongoose");

var User = mongoose.model("Users", {
  name: { type: String },
  mobileNo: { type: Number },
  email: { type: String },
  location: { type: String },
  pinCode: { type: String },
});

module.exports = { User };
