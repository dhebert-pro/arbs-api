const express = require("express");
const adminRoutes = require("./admin");
const importRoutes = require("./import");
const authenticationRoutes = require("./authentication");
const personInCharge = require("./personInCharge");
const repaymentRoutes = require("./repayment");
const studentRoutes = require("./student");

const router = express.Router();

router.route("/").all((req, res) => {
  res.json({
    message: "Ceci est le point d'entrée de l'API",
    methode: req.method
  });
});
router.use("/admin", adminRoutes);
router.use("/import", importRoutes);
router.use("/authentication", authenticationRoutes);
router.use("/personInCharge", personInCharge);
router.use("/repayment", repaymentRoutes);
router.use("/student", studentRoutes);

module.exports = router;
