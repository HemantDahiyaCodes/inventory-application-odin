const express = require("express");
const typesRouter = express.Router();
const typeController = require("../controllers/typeController");

typesRouter.get("/", typeController.getPokemonTypes);

module.exports = typesRouter;