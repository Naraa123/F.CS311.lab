const Pos = require("../models/Position");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getPositions = asyncHandler(async (req, res, next) => {
  const pos = await Pos.findAll();
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.createPos = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const pos = await Pos.create(req.body);
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.selectPos = asyncHandler(async (req, res, next) => {
  const pos = await db.query("SELECT * FROM orgs LIMIT 1");
  res.status(200).json({
    success: true,
    data: pos,
  });
});
