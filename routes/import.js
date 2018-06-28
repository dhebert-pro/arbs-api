const express = require("express");
const router = express.Router();
const { executeQuery } = require("../util/routes/databaseUtil");

/**
 * @api {post} /import/ Add an import
 * @apiName PostImport
 * @apiGroup Import
 *
 * @apiSuccess {Number} id Import id
 */
router.route("/").post((req, res) => {
  const query = "INSERT INTO [IMPORT] DEFAULT VALUES";
  executeQuery(query, 1).then(result => {
    res.json(result);
  });
});

/**
 * @api {put} /import/:id Update an import
 * @apiName UpdateImport
 * @apiGroup Import
 *
 * @apiParam {Number} id Import id
 * @apiParam {Number} reject_count Import reject count
 */
router.route("/:id").put((req, res) => {
  const query = `UPDATE [IMPORT] SET 
        reject_count='${req.body.reject_count}'
        WHERE id=${req.params.id}`;
  executeQuery(query, 1).then(() => {
    res.end();
  });
});

module.exports = router;
