/*eslint-disable no-console */
const mongoose = require("mongoose");
const config = require("./config");

const options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000,
  useMongoClient: true
};
console.log(process.env.NODE_ENV);
const urlDB = config.mongoURI[process.env.NODE_ENV];

// Nous connectons l'API à notre base de données
mongoose.connect(urlDB, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur lors de la connexion"));
db.once("open", () => {
  if (process.env.NODE_ENV !== "test") {
    console.log("Connexion à la base OK");
  }
});

module.exports = db;
