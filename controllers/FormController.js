const pokemonController = require("../controllers/pokemonController");
const trainerController = require("../controllers/trainerController");
const typeController = require("../controllers/typeController");
const db = require("../db/dbquery");

function dataForm(req, res) {
  res.render("newForm", { title: "Add new Pokemon" });
}

function getDataFromForm(req, res) {
  const { pokemonName, trainerName, pokemonType, pokemon_id } = req.body;

  pokemonController.addPokemonToDb(pokemonName, pokemon_id);
  trainerController.addTrainerToDb(trainerName, pokemon_id);
  typeController.addPokemonType(pokemonType, pokemon_id);
  res.redirect("/");
}

async function displayUpdateForm(req, res) {
  const result = await db.getIds();
  const ids = result.rows;
  res.render("editForm", { title: "Update data in db!", getIds: ids });
}

function updateFormData(req, res) {
  const { pokemonName, trainerName, pokemonType, id } = req.body;

  pokemonController.updatePokemonName(pokemonName, parseInt(id));
  trainerController.updateTrainerName(trainerName, parseInt(id));
  typeController.updatePokemonType(pokemonType, parseInt(id));
  res.redirect("/");
}

async function deleteDataForm(req, res) {
  const idsResult = await db.getIds();
  const ids = idsResult.rows;
  res.render("deleteDataForm", {
    title: "Delete data from form!",
    getIds: ids,
  });
}

function deleteFormData(req, res) {
  const { pokemonName, trainerName, pokemonType, id } = req.body;

  pokemonController.deletePokemonFromDb(pokemonName, parseInt(id));
  trainerController.deleteTrainerFromDb(trainerName, parseInt(id));
  typeController.deletePokemonType(pokemonType, parseInt(id));
  res.redirect("/");
}


module.exports = {
    dataForm,
    getDataFromForm,
    displayUpdateForm,
    updateFormData,
    deleteDataForm,
    deleteFormData,
}