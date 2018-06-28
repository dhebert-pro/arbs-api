const express = require("express");
const router = express.Router();
const { executeQuery } = require("../util/routes/databaseUtil");

router
  .route("/")
  /**
   * @api {get} /repayment/ Get all repayments
   * @apiName GetRepaymentList
   * @apiGroup Repayment
   *
   * @apiSuccess {Object[]} . Repayment list
   */
  .get((req, res) => {
    const query = `SELECT r.student_id,
                          r.membership_amount, 
                          r.repayable, 
                          r.non_repayment_reason, 
                          r.deadline, 
                          r.deal, 
                          r.divalto_balance, 
                          r.request_date, 
                          r.comment 
                    FROM [REPAYMENT] r`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  /**
   * @api {post} /repayment/ Add a repayment
   * @apiName PostRepayment
   * @apiGroup Repayment
   *
   * @apiParam {Float} membership_amount Repayment membership amount
   * @apiParam {Boolean} repayable Is repayment repayable
   * @apiParam {String} non_repayment_reason Reason of non repayment
   * @apiParam {Date} deadline Repayment deadline
   * @apiParam {String} deal Repayment deal
   * @apiParam {Float} divalto_balance Repayment DIVALTO balance
   * @apiParam {Date} request_date Repayment request date
   * @apiParam {String} comment Repayment comment
   *
   * @apiSuccess {Number} student_id Student id for that repayment
   */
  .post((req, res) => {
    const query = `INSERT INTO [REPAYMENT] (
        student_id
        membership_amount,
        repayable, 
        non_repayment_reason, 
        deadline, 
        deal, 
        divalto_balance, 
        request_date, 
        comment 
    ) VALUES (
        ${req.body.student_id},
        '${req.body.membership_amount}',
        ${req.body.repayable},
        '${req.body.non_repayment_reason}', 
        '${req.body.deadline}', 
        '${req.body.deal}', 
        '${req.body.divalto_balance}', 
        '${req.body.request_date}', 
        '${req.body.comment}'
    )`;
    executeQuery(query, 1).then(result => {
      res.json(result);
    });
  });

router
  .route("/:id")
  /**
   * @api {get} /repayment/:id Get a repayment
   * @apiName GetRepayment
   * @apiGroup Repayment
   *
   * @apiParam {Number} id Student id for that repayment
   *
   * @apiSuccess {Number} student_id Student id for that repayment
   * @apiSuccess {Float} membership_amount Repayment membership amount
   * @apiSuccess {Boolean} repayable Is repayment repayable
   * @apiSuccess {String} non_repayment_reason Reason of non repayment
   * @apiSuccess {Date} deadline Repayment deadline
   * @apiSuccess {String} deal Repayment deal
   * @apiSuccess {Float} divalto_balance Repayment DIVALTO balance
   * @apiSuccess {Date} request_date Repayment request date
   * @apiSuccess {String} comment Repayment comment
   */
  .get((req, res) => {
    const query = `SELECT   r.student_id,
                            r.membership_amount, 
                            r.repayable, 
                            r.non_repayment_reason, 
                            r.deadline, 
                            r.deal, 
                            r.divalto_balance, 
                            r.request_date, 
                            r.comment 
                            from [REPAYMENT] r 
                    WHERE student_id=${req.params.id}`;
    executeQuery(query).then(result => {
      res.json(result);
    });
  })
  /**
   * @api {put} /repayment/:id Update a repayment
   * @apiName UpdateRepayment
   * @apiGroup Repayment
   *
   * @apiParam {Number} student_id Student id for that repayment
   * @apiParam {Float} membership_amount Repayment membership amount
   * @apiParam {Boolean} repayable Is repayment repayable
   * @apiParam {String} non_repayment_reason Reason of non repayment
   * @apiParam {Date} deadline Repayment deadline
   * @apiParam {String} deal Repayment deal
   * @apiParam {Float} divalto_balance Repayment DIVALTO balance
   * @apiParam {Date} request_date Repayment request date
   * @apiParam {String} comment Repayment comment
   */
  .put((req, res) => {
    const query = `UPDATE [REPAYMENT] SET 
        membership_amount='${req.body.membership_amount}',
        repayable=${req.body.repayable},
        non_repayment_reason='${req.body.non_repayment_reason}', 
        deadline='${req.body.deadline}', 
        deal='${req.body.deal}', 
        divalto_balance='${req.body.divalto_balance}', 
        request_date='${req.body.request_date}', 
        comment='${req.body.comment}'
        WHERE student_id=${req.params.student_id}`;
    executeQuery(query, 1).then(() => {
      res.end();
    });
  });

module.exports = router;
