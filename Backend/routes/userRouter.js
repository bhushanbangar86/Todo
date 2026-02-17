const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/userController");

userRoute.get("/", userController.getTodo);
userRoute.delete("/delete/:id", userController.deleteTodo);
userRoute.put("/update/:id", userController.updateTodo);
userRoute.post("/add", userController.addTodo);

module.exports = userRoute;
