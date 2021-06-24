const express = require("express");
const { getEmps, createEmp } = require("../controller/emp");
const router = express.Router();

router.route("/").get(getEmps).post(createEmp);

module.exports = router;
