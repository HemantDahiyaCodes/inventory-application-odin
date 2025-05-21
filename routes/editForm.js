const express = require("express");
const editFormRoute = express.Router();
const formController = require("../controllers/FormController");

editFormRoute.get("/", formController.displayUpdateForm);
editFormRoute.post("/", formController.updateFormData);

module.exports = editFormRoute;