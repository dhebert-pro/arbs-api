const express = require("express");
const router = express.Router();
const { executeQuery } = require("../util/routes/databaseUtil");

router
  .route("/")
  .get((req, res) => {
    const query = `SELECT p.id,
                          p.login, 
                          p.password, 
                          p.code, 
                          p.name, 
                          p.first_name, 
                          p.new_mail, 
                          p.iban, 
                          p.bic 
                          from [PERSON_IN_CHARGE] p`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  .post((req, res) => {
    const query = `INSERT INTO [PERSON_IN_CHARGE] (
      login,
      password, 
      code, 
      name, 
      first_name, 
      new_mail, 
      iban, 
      bic 
    ) VALUES (
      '${req.body.login}',
      '${req.body.password}'
      '${req.body.code}', 
      '${req.body.name}', 
      '${req.body.first_name}', 
      '${req.body.new_mail}', 
      '${req.body.iban}', 
      '${req.body.bic}' 
    )`;
    executeQuery(query, 1).then(result => {
      res.json(result);
    });
  });

router
  .route("/:id")
  .get((req, res) => {
    const query = `SELECT p.id,
                          p.login, 
                          p.password, 
                          p.code, 
                          p.name, 
                          p.first_name, 
                          p.new_mail, 
                          p.iban, 
                          p.bic 
                    FROM [PERSON_IN_CHARGE] p 
                    WHERE id=${req.params.id}`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  .put((req, res) => {
    const query = `UPDATE [PERSON_IN_CHARGE] SET 
        login='${req.body.login}',
        password='${req.body.password}'
        code='${req.body.code}', 
        name='${req.body.name}', 
        first_name='${req.body.first_name}', 
        new_mail='${req.body.new_mail}', 
        iban='${req.body.iban}', 
        bic='${req.body.bic}'
        WHERE id=${req.params.id}`;
    executeQuery(query, 1).then(() => {
      res.end();
    });
  });

module.exports = router;
