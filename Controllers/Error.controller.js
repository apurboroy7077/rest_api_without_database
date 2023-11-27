let path = require("path");
let errorController = (req, res) => {
  res.sendFile(path.join(__dirname + "/../Views/ErrorPage.html"));
};
module.exports = { errorController };
