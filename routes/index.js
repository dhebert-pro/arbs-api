const express = require("express");

const piscineRoutes = require("./piscines");

const router = express.Router();

router.route("/").all((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    message: "Bienvenue sur notre Flashcards API",
    methode: req.method
  });
});
router.use("/piscines", piscineRoutes);

module.exports = router;
