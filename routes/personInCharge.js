const express = require("express");
const router = express.Router();
const { executeQuery } = require("../util/routes/databaseUtil");

router
  .route("/")
  /**
   * @api {get} /personInCharge/ Get all persons in charge
   * @apiName GetPersonInChargeList
   * @apiGroup PersonInCharge
   *
   * @apiSuccess {Object[]} . Person in charge list
   */
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
  /**
   * @api {post} /personInCharge/ Add a person in charge
   * @apiName PostPersonInCharge
   * @apiGroup PersonInCharge
   *
   * @apiParam {String} login Person in charge login
   * @apiParam {String} password Person in charge password
   * @apiParam {String} code Person in charge code
   * @apiParam {String} name Person in charge name
   * @apiParam {String} first_name Person in charge first name
   * @apiParam {String} new_mail Person in charge new mail
   * @apiParam {String} iban Person in charge iban
   * @apiParam {String} bic Person in charge bic
   *
   * @apiSuccess {Number} id Person in charge id
   */
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
  /**
   * @api {get} /personInCharge/:id Get a person in charge
   * @apiName GetPersonInCharge
   * @apiGroup PersonInCharge
   *
   * @apiParam {Number} id Person in charge id
   *
   * @apiSuccess {Number} id Person in charge id
   * @apiSuccess {String} login Person in charge login
   * @apiSuccess {String} password Person in charge password
   * @apiSuccess {String} code Person in charge code
   * @apiSuccess {String} name Person in charge name
   * @apiSuccess {String} first_name Person in charge first name
   * @apiSuccess {String} new_mail Person in charge new mail
   * @apiSuccess {String} iban Person in charge iban
   * @apiSuccess {String} bic Person in charge bic
   */
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
  /**
   * @api {put} /personInCharge/:id Update a person in charge
   * @apiName UpdatePersonInCharge
   * @apiGroup PersonInCharge
   *
   * @apiParam {Number} id Person in charge id
   * @apiParam {String} login Person in charge login
   * @apiParam {String} password Person in charge password
   * @apiParam {String} code Person in charge code
   * @apiParam {String} name Person in charge name
   * @apiParam {String} first_name Person in charge first name
   * @apiParam {String} new_mail Person in charge new mail
   * @apiParam {String} iban Person in charge iban
   * @apiParam {String} bic Person in charge bic
   */
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
