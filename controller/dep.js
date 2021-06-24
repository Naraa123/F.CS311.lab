const Dep = require("../models/Department");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getDeps = asyncHandler(async (req, res, next) => {
  const dep = await Dep.findAll();
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.createDep = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const dep = await Dep.create(req.body);
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.selectDep = asyncHandler(async (req, res, next) => {
  const dep = await db.query("SELECT * FROM orgs LIMIT 1");
  res.status(200).json({
    success: true,
    data: dep,
  });
});
