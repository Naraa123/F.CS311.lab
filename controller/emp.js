const Emp = require("../models/Employee");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getEmps = asyncHandler(async (req, res, next) => {
  const emp = await Emp.findAll();
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.createEmp = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const emp = await Emp.create(req.body);
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.selectEmp = asyncHandler(async (req, res, next) => {
  const emp = await db.query("SELECT * FROM orgs LIMIT 1");
  res.status(200).json({
    success: true,
    data: emp,
  });
});
