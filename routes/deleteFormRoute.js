const express = require("express");
const deleteFormRoute = express.Router();
const formController = require("../controllers/FormController");

deleteFormRoute.get("/", formController.deleteDataForm);
deleteFormRoute.post("/", formController.deleteFormData);

module.exports = deleteFormRoute;