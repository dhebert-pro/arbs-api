const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const piscineSchema = mongoose.Schema({
  nom: String,
  adresse: String,
  tel: String,
  description: String
});

const Piscine = mongoose.model("Piscine", piscineSchema);

router
  .route("/")
  .get((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Piscine.find(function(err, piscines) {
      if (err) {
        res.send(err);
      }
      res.json(piscines);
    });
  })
  .post((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var piscine = new Piscine();
    piscine.nom = req.body.nom;
    piscine.adresse = req.body.adresse;
    piscine.tel = req.body.tel;
    piscine.description = req.body.description;
    piscine.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.send({
        message: "Bravo, la piscine est maintenant stockée en base de données"
      });
    });
  });

router
  .route("/:piscine_id")
  .get((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Piscine.findById(req.params.piscine_id, (err, piscine) => {
      if (err) res.send(err);
      res.json(piscine);
    });
  })
  .put((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Piscine.findById(req.params.piscine_id, (err, piscine) => {
      if (err) {
        res.send(err);
      }
      // Mise à jour des données de la piscine
      piscine.nom = req.body.nom;
      piscine.adresse = req.body.adresse;
      piscine.tel = req.body.tel;
      piscine.description = req.body.description;
      piscine.save(function(err) {
        if (err) {
          res.send(err);
        }
        // Si tout est ok
        res.json({ message: "Bravo, mise à jour des données OK" });
      });
    });
  })
  .delete((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Piscine.remove({ _id: req.params.piscine_id }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Bravo, piscine supprimée" });
    });
  });

module.exports = router;
