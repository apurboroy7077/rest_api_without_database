let express = require("express");
const { errorController } = require("../Controllers/Error.controller");
let router = express.Router();
router.get("/", errorController);
module.exports = router;
