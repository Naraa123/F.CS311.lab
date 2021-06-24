const Sequelize = require("sequelize");
const db = require("../config/database");

const Org = db.define("org", {
  name: {
    type: Sequelize.STRING(75),
    allowNull: false,
  },
  ceo_name: {
    type: Sequelize.STRING(75),
  },
});

module.exports = Org;
