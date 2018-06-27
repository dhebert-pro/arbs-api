const express = require("express");
const router = express.Router();
const config = require("../config");
const sql = require("mssql");

router
  .route("/")
  .get((req, res) => {
    sql.connect(config, function(err) {
      if (err) console.log(err);

      var request = new sql.Request();

      request.query("select * from Test", function(err, recordset) {
        if (err) console.log(err);
        res.json(recordset.recordset);
      });
    });
    sql.close();
  })
  .post((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json([{ nom: "test", adresse: "test" }]);
  });

router
  .route("/:piscine_id")
  .get((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ nom: "test", adresse: "test" });
  })
  .put((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ nom: "test", adresse: "test" });
  })
  .delete((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ nom: "test", adresse: "test" });
  });

module.exports = router;
