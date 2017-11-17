const mongoose = require("mongoose");

const piscineSchema = mongoose.Schema({
  nom: String,
  adresse: String,
  tel: String,
  description: String
});

const Piscine = mongoose.model("Piscine", piscineSchema);

module.exports = Piscine;
