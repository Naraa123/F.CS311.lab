const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.findAll();
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.selectUser = asyncHandler(async (req, res, next) => {
  const user = await db.query("SELECT * FROM orgs LIMIT 1");
  res.status(200).json({
    success: true,
    data: user,
  });
});
