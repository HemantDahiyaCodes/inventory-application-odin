const db = require("../db/dbquery");

async function getTrainers(req, res) {
  const trainerNames = await db.allTrainers();
  console.log(trainerNames);

  res.render("trainers", { trainerNames: trainerNames, title: "All trainers" });
}

async function addTrainerToDb(trainerName) {
  return await db.addTrainer(trainerName);
}

async function deleteTrainerFromDb(trainerName, id) {
  return await db.deleteTrainer(trainerName, id);
}

async function updateTrainerName(trainerName, id) {
  return await db.updateTrainer(trainerName, id);
}

module.exports = {
    getTrainers,
    addTrainerToDb,
    deleteTrainerFromDb,
    updateTrainerName
}