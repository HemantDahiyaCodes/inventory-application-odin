const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Pokemon Inventory App"});
})

module.exports = indexRouter;