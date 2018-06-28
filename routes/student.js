const express = require("express");
const router = express.Router();
const { executeQuery } = require("../util/routes/databaseUtil");

router
  .route("/")
  /**
   * @api {get} /student/ Get all students
   * @apiName GetStudentList
   * @apiGroup Student
   *
   * @apiSuccess {Object[]} . Student list
   */
  .get((req, res) => {
    const query = `SELECT   s.id,
                            s.name, 
                            s.first_name,
                            s.code, 
                            s.person_in_charge_id 
                    FROM [STUDENT] s`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  /**
   * @api {post} /student/ Add a student
   * @apiName PostStudent
   * @apiGroup Student
   *
   * @apiParam {String} name Student name
   * @apiParam {String} first_name Student first name
   * @apiParam {String} code Student code
   * @apiParam {Number} person_in_charge_id Person in charge of student id
   *
   * @apiSuccess {Number} id Student id
   */
  .post((req, res) => {
    const query = `INSERT INTO [STUDENT] (
      name, 
      first_name, 
      code, 
      person_in_charge_id 
    ) VALUES ( 
      '${req.body.name}', 
      '${req.body.first_name}',
      '${req.body.code}', 
      '${req.body.person_in_charge_id}' 
    )`;
    executeQuery(query, 1).then(result => {
      res.json(result);
    });
  });

router
  .route("/:id")
  /**
   * @api {get} /student/:id Get a student
   * @apiName GetStudent
   * @apiGroup Student
   *
   * @apiParam {Number} id Student id
   *
   * @apiSuccess {Number} id Student id
   * @apiSuccess {String} name Student name
   * @apiSuccess {String} first_name Student first name
   * @apiSuccess {String} code Student code
   * @apiSuccess {Number} person_in_charge_id Person in charge of student id
   */
  .get((req, res) => {
    const query = `SELECT   s.id,
                            s.name, 
                            s.first_name, 
                            s.code, 
                            s.person_in_charge_id 
                            from [STUDENT] s 
                    WHERE id=${req.params.id}`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  /**
   * @api {put} /student/:id Update a student
   * @apiName UpdateStudent
   * @apiGroup Student
   *
   * @apiParam {Number} id Student id
   * @apiParam {String} name Student name
   * @apiParam {String} first_name Student first name
   * @apiParam {String} code Student code
   * @apiParam {Number} person_in_charge_id Person in charge of student id
   */
  .put((req, res) => {
    const query = `UPDATE [STUDENT] SET 
        name='${req.body.name}', 
        first_name='${req.body.first_name}', 
        code='${req.body.code}', 
        person_in_charge_id='${req.body.person_in_charge_id}'
        WHERE id=${req.params.id}`;
    executeQuery(query, 1).then(() => {
      res.end();
    });
  });

module.exports = router;
