const db = require("../db/dbquery");

async function getPokemonTypes(req, res) {
  const pokemonTypes = await db.allTypes();
  console.log(pokemonTypes);

  res.render("types", {
    pokemonTypes: pokemonTypes,
    title: "All Pokemon Types in database",
  });
}

async function addPokemonType(pokemonType) {
  return await db.addType(pokemonType);
}

async function deletePokemonType(pokemonType, id) {
  return await db.deleteType(pokemonType, id);
}

async function updatePokemonType(pokemonType, id) {
  return await db.updateType(pokemonType, id);
}

module.exports = {
  getPokemonTypes,
  addPokemonType,
  deletePokemonType,
  updatePokemonType,
};
