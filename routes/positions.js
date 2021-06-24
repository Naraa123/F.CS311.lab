const express = require("express");
const { getPositions, createPos } = require("../controller/pos");
const router = express.Router();

router.route("/").get(getPositions).post(createPos);

module.exports = router;
