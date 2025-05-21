const express = require("express");
const app = express();
const path = require("node:path");
const indexRoute = require("./routes/indexRoute");
const pokemonRoute = require("./routes/pokemonRoute");
const trainersRoute = require("./routes/trainersRoute");
const typesRoute = require("./routes/typesRoute");
const newFormRoute = require("./routes/newForm");
const editForm = require("./routes/editForm");
const deleteForm = require("./routes/deleteFormRoute");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('styles'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Routes
app.use("/", indexRoute);
app.use("/pokemon", pokemonRoute);
app.use("/trainers", trainersRoute);
app.use("/types", typesRoute);
app.use("/newForm", newFormRoute);
app.use("/editForm", editForm);
app.use("/deleteDataForm", deleteForm);


app.listen(PORT, () => {
    console.log("Server started at port number: ", PORT);
})