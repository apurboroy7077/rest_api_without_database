let path = require("path");
let { foodsData } = require("../Models/FoodsData.model");
let getFoodsPage = (req, res) => {
  res.sendFile(path.join(__dirname + "/../Views/Foods.html"));
};
let seeFoodsData = (req, res) => {
  res.send(foodsData);
};
let addFoodsData = (req, res) => {
  let name = req.body.foodName;
  let price = req.body.foodPrice;
  let newFoodData = {
    name,
    price,
    id: Math.random().toString(),
  };
  foodsData.push(newFoodData);
  res.send(foodsData);
};
let updateFood = (req, res) => {
  let id = req.body.id;
  let updatedFoodName = req.body.foodName;
  let updatedFoodPrice = req.body.foodPrice;
  let targetedFood = foodsData.filter((data) => id == data.id);
  if (updatedFoodName.length > 0) {
    targetedFood[0].name = updatedFoodName;
  }
  if (updatedFoodPrice.length > 0) {
    targetedFood[0].price = updatedFoodPrice;
  }
  res.send(foodsData);
};
let deleteFood = (req, res) => {
  let id = req.body.id;
  foodsData = foodsData.filter((data) => id != data.id);
  res.send(foodsData);
};
module.exports = {
  getFoodsPage,
  seeFoodsData,
  addFoodsData,
  updateFood,
  deleteFood,
};
