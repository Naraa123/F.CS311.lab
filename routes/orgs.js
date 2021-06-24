const express = require("express");
const {
  getOrgs,
  createOrg,
  updateOrg,
  //deleteOrg,
  getOrg,
  selectOrg,
} = require("../controller/org");
const router = express.Router();

router.route("/").get(getOrgs).post(createOrg);

//router.route("/org").get(selectOrg).delete(deleteOrg).put(updateOrg);
router.route("/:id").get(getOrg).put(updateOrg);
//router.route("/:id").get(getOrg);

module.exports = router;

//json body dotroo id bolon yu uurchlusnuu ilgeene
//json id ilgeene
//yu uurchluj bgaga ilgeene gadnaas
//orgs.find hiine id gaar ni
//
