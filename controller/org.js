const Org = require("../models/Org");
const path = require("path");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");
const sequelize = require("sequelize");

exports.getOrgs = asyncHandler(async (req, res, next) => {
  const org = await Org.findAll();
  res.status(200).json({
    success: true,
    data: org,
  });
});

exports.getOrg = asyncHandler(async (req, res, next) => {
  const org = await Org.findById(req.params.id);

  if (!org) {
    throw new MyError(req.params.id + " ID-тэй ном байхгүй байна.", 404);
  }

  res.status(200).json({
    success: true,
    data: book,
  });
});

exports.createOrg = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const org = await Org.create(req.body);
  res.status(200).json({
    success: true,
    data: org,
  });
});

exports.updateOrg = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const org = await Org.findByPk();
  //org.save();
  res.status(200).json({
    success: true,
    data: org,
  });
});

// exports.getOrg = asyncHandler(async (req, res, next) => {
//   const org = await Org.find({ _id: req.params.id });
//   res.status(200).json({
//     success: true,
//     data: org,
//   });
// });

exports.selectOrg = asyncHandler(async (req, res, next) => {
  const orgs = await db.query("SELECT * FROM orgs LIMIT 1");
  res.status(200).json({
    success: true,
    data: orgs,
  });
});

// exports.selectOrg = asyncHandler(async (req, res, next) => {
//   const orgs = await db.query("SELECT * FROM orgs LIMIT 1");
//   res.status(200).json({
//     success: true,
//     data: orgs,
//   });
// });

// exports.deleteOrg = asyncHandler(async (req, res, next) => {
//   const orgs = await db.query("DELETE FROM orgs WHERE id = 2");
//   res.status(200).json({
//     success: true,
//     data: orgs,
//   });
// });
