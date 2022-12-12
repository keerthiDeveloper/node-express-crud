const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const PORT_NUMBER = process.PORT || 5000;

const { initDataBaseConnection } = require("./db");

// Init Database
initDataBaseConnection();

// Route imports
const userRoute = require("./routes/userRoute");

//  Init App
const app = express();

// Middleware's
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

// App Routes
app.use("/user", userRoute);

// Server
app.listen(PORT_NUMBER, () => console.log("server started at port:5000"));
