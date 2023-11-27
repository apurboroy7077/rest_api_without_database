let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let cors = require("cors");
let foodRouter = require("./Routes/Foods.routes");
let errorRouter = require("./Routes/Error.routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/foods", foodRouter);
app.get("/", (req, res) => {
  res.send("Working");
});
app.use("*", errorRouter);
module.exports = app;
