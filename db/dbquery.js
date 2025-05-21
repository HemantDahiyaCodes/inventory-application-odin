const pool = require("./pool");

async function allPokemons() {
  const { rows } = await pool.query("SELECT DISTINCT id, name FROM pokemon");
  return rows;
}

async function addPokemon(pokemonName) {
  return await pool.query("INSERT INTO pokemon (name) VALUES ($1)", [
    pokemonName,
  ]);
}

async function deletePokemon(pokemonName, id) {
  return await pool.query(
    "DELETE FROM pokemon WHERE name = ($1) AND id = ($2)",
    [pokemonName, id]
  );
}

async function updatePokemon(pokemonName, id) {

  return await pool.query("UPDATE pokemon SET name = ($1) WHERE id = ($2)", [
    pokemonName,
    id,
  ]);
}

async function allTrainers() {
  const { rows } = await pool.query("SELECT DISTINCT id, trainer_name FROM trainers");
  return rows;
}

async function addTrainer(trainerName) {
  return await pool.query("INSERT INTO trainers (trainer_name) VALUES ($1)", [
    trainerName,
  ]);
}

async function deleteTrainer(trainerName, id) {
  return await pool.query(
    "DELETE FROM trainers WHERE trainer_name = ($1) AND id = ($2)",
    [trainerName, id]
  );
}

async function updateTrainer(trainerName, id) {
  return await pool.query("UPDATE trainers SET trainer_name = ($1) WHERE id = ($2)", [
    trainerName,
    id,
  ]);
}

async function allTypes() {
  const { rows } = await pool.query("SELECT DISTINCT id, pokemon_type FROM types");
  return rows;
}

async function addType(type) {
  return await pool.query("INSERT INTO types (pokemon_type) VALUES ($1)", [
    type,
  ]);
}

async function deleteType(type, id) {
  return await pool.query(
    "DELETE FROM types WHERE pokemon_type = ($1) AND id = ($2)",
    [type, id]
  );
}

async function updateType(newType, id) {
  return await pool.query(
    "UPDATE types SET pokemon_type = ($1) WHERE id = ($2)",
    [newType, id]
  );
}

async function getIds() {
  const ids = await pool.query("SELECT id FROM pokemon");
  return ids;
}

module.exports = {
  allPokemons,
  addPokemon,
  deletePokemon,
  updatePokemon,
  allTrainers,
  addTrainer,
  deleteTrainer,
  updateTrainer,
  allTypes,
  addType,
  deleteType,
  updateType,
  getIds,
};