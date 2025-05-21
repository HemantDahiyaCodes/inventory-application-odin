const express = require("express");
const newFormRouter = express.Router();
const formController = require("../controllers/FormController");


newFormRouter.get("/", formController.dataForm);

newFormRouter.post("/", formController.getDataFromForm);

module.exports = newFormRouter