const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.json({
      message: "Liste les piscines de Lille Métropole avec paramètres :",
      ville: req.query.ville,
      nbResultat: req.query.maxresultat,
      methode: req.method
    });
  })
  .post((req, res) => {
    res.json({
      message: "Ajoute une nouvelle piscine à la liste",
      nom: req.body.nom,
      ville: req.body.ville,
      taille: req.body.taille,
      methode: req.method
    });
  });

router
  .route("/:piscine_id")
  .get((req, res) => {
    res.json({
      message:
        "Vous souhaitez accéder aux informations de la piscine n°" +
        req.params.piscine_id
    });
  })
  .put((req, res) => {
    res.json({
      message:
        "Vous souhaitez modifier les informations de la piscine n°" +
        req.params.piscine_id
    });
  })
  .delete((req, res) => {
    res.json({
      message: "Vous souhaitez supprimer la piscine n°" + req.params.piscine_id
    });
  });

module.exports = router;
