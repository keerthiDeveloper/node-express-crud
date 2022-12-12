const mongoose = require("mongoose");

exports.initDataBaseConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://localhost:27017/crud", (err) => {
    if (!err) console.log("Mongodb Connected success");
    else
      console.log(
        "Error in DB connection: " + JSON.stringify(err, undefined, 2)
      );
  });
};
