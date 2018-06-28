const express = require("express");
const router = express.Router();
const { executeQuery } = require("../util/routes/databaseUtil");

router
  .route("/")
  /**
   * @api {get} /admin/ Get all administrators
   * @apiName GetAdminList
   * @apiGroup Admin
   *
   * @apiSuccess {Object[]} . Admin list
   */
  .get((req, res) => {
    const query = `SELECT   a.id,
                            a.login, 
                            a.password 
                    FROM [ADMIN] a`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  /**
   * @api {post} /admin/ Add an administrator
   * @apiName PostAdmin
   * @apiGroup Admin
   *
   * @apiParam {String} login Admin login
   * @apiParam {String} password Admin password
   *
   * @apiSuccess {Number} id Admin id
   */
  .post((req, res) => {
    const query = `INSERT INTO [ADMIN] (login, password) 
        VALUES (
            '${req.body.login}',
            '${req.body.password}'
        )`;
    executeQuery(query, 1).then(result => {
      res.json(result[0]);
    });
  });

router
  .route("/:id")
  /**
   * @api {get} /admin/:id Get an administrator
   * @apiName GetAdmin
   * @apiGroup Admin
   *
   * @apiParam {Number} id Admin id
   *
   * @apiSuccess {Number} id Admin id
   * @apiSuccess {String} login Admin login
   * @apiSuccess {String} password Admin password
   */
  .get((req, res) => {
    const query = `SELECT   a.id,
                            a.login, 
                            a.password 
                    FROM [ADMIN] a 
                    WHERE id=${req.params.id}`;
    executeQuery(query).then(result => {
      res.json(result[0]);
    });
  })
  /**
   * @api {put} /admin/:id Update an administrator
   * @apiName UpdateAdmin
   * @apiGroup Admin
   *
   * @apiParam {Number} id Admin id
   * @apiParam {String} login Admin login
   * @apiParam {String} password Admin password
   */
  .put((req, res) => {
    const query = `UPDATE [ADMIN] SET 
        login='${req.body.login}', 
        password='${req.body.password}'
        WHERE id=${req.params.id}`;
    executeQuery(query, 1).then(() => {
      res.end();
    });
  });

module.exports = router;
