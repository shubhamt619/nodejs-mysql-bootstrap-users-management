const user = require("../models").user;


module.exports = {
  getDasboard: async function (req, res) {
    let studentsCount, adminsCount = 0;
    try {
      const p1 = user.count({
        where: {
          'role': 1
        }
      }).then(c => {
        studentsCount = c;
        return c;
      });
      const p2 = user.count({
        where: {
          'role': 2
        }
      }).then(c => {
        adminsCount = c;
        return c;
      });;
      await Promise.all([p1, p2]);
      let counts = {
        studentsCount: studentsCount,
        adminsCount: adminsCount,
      };
      res.render("admin/index", counts);
    } catch (e) {
      console.log(e);
    }


  },
  getStudents: async function (req, res) {
    let studentsData = [];
    try {
      const p1 = user.findAll({
        where: {
          role: 1
        }
      }).then(function(students) {
        // students will be an array of all Project instances
        studentsData = {
          studentsList : students
        };
    })
      await Promise.resolve(p1);
      res.render("admin/students-list", studentsData);
    } catch (e) {
      console.log(e);
    }
  }
}