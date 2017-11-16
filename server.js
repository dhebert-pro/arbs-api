/*eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./routes");

const hostname = "localhost";
const port = 3001;

const options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000,
  useMongoClient: true
};

const urlDB = "mongodb://127.0.0.1:27017/piscines";

// Nous connectons l'API à notre base de données
mongoose.connect(urlDB, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur lors de la connexion"));
db.once("open", () => {
  console.log("Connexion à la base OK");
});

const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router);

// Start server
app.listen(port, hostname, () => {
  console.log("Server started on http://" + hostname + ":" + port + "\n");
});
