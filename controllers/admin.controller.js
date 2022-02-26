const user = require("../models").user;
import Sequelize from "sequelize";
const sequelize = new Sequelize("node_ums", "root", "");
const { QueryTypes } = require("@sequelize/core");

module.exports = {
  getDasboard: async function (req, res) {
    const users = await sequelize
      .query(
        "SELECT (SELECT COUNT(*) FROM users WHERE role =  1) AS studentsCount, (SELECT COUNT(*) FROM users WHERE role =  2) AS adminsCount",
        {
          type: QueryTypes.SELECT,
        }
      )
      .then(function (result) {
        console.log(result);
        // students will be an array of all Project instances
        let counts = {
          studentsCount: result.studentsCount,
          adminsCount: result.adminsCount,
        };
        res.render("admin/index", counts);
      });
  },
};
