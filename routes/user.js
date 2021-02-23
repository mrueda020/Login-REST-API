const express = require("express");
const api = express.Router();
const userController = require("../controllers/user");

api.get("/sign-in", userController.signIn);
api.post("/sign-up", userController.signUp);
module.exports = api;
