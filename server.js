/*eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3001;

const app = express();

const router = express.Router();

router
  .route("/piscines")
  .get(function(req, res) {
    res.json({
      message: "Liste les piscines de Lille Métropole avec paramètres :",
      ville: req.query.ville,
      nbResultat: req.query.maxresultat,
      methode: req.method
    });
  })
  .post(function(req, res) {
    res.json({
      message: "Ajoute une nouvelle piscine à la liste",
      nom: req.body.nom,
      ville: req.body.ville,
      taille: req.body.taille,
      methode: req.method
    });
  });

router
  .route("/piscines/:piscine_id")
  .get(function(req, res) {
    res.json({
      message:
        "Vous souhaitez accéder aux informations de la piscine n°" +
        req.params.piscine_id
    });
  })
  .put(function(req, res) {
    res.json({
      message:
        "Vous souhaitez modifier les informations de la piscine n°" +
        req.params.piscine_id
    });
  })
  .delete(function(req, res) {
    res.json({
      message: "Vous souhaitez supprimer la piscine n°" + req.params.piscine_id
    });
  });

router.route("/").all(function(req, res) {
  res.json({
    message: "Bienvenue sur notre Flashcards API ",
    methode: req.method
  });
});

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router);

// Start server
app.listen(port, hostname, () => {
  console.log(
    "Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n"
  );
});
