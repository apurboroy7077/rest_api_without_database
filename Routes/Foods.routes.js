let express = require("express");
const {
  getFoodsPage,
  seeFoodsData,
  addFoodsData,
  updateFood,
  deleteFood,
} = require("../Controllers/Foods.controller");
let router = express.Router();
router.get("/", getFoodsPage);
router.post("/", seeFoodsData);
router.post("/post", addFoodsData);
router.post("/update", updateFood);
router.post("/delete", deleteFood);
module.exports = router;
