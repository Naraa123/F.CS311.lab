const express = require("express");
const { getDeps, createDep } = require("../controller/dep");
const router = express.Router();

router.route("/").get(getDeps).post(createDep);

module.exports = router;
