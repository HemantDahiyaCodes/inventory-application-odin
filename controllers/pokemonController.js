const db = require("../db/dbquery");

async function getPokemonNames(req, res) {
  const pokemonNames = await db.allPokemons();

  res.render("pokemons", {
    pokemonNames: pokemonNames,
    title: "All Pokemons",
  });
}

async function addPokemonToDb(pokemonName) {
  return await db.addPokemon(pokemonName);
}

async function deletePokemonFromDb(pokemonName, id) {
  return await db.deletePokemon(pokemonName, id);
}

async function updatePokemonName(pokemonName, id) {
  return await db.updatePokemon(pokemonName, id);
}

module.exports = {
    getPokemonNames,
    addPokemonToDb,
    deletePokemonFromDb,
    updatePokemonName,
}