const user = require('../models').user
module.exports = {

    getAllStudents: async function(req, res){
        user.findAll({
            where: {
              role: 1
            }
          }).then(function(students) {
            // students will be an array of all Project instances
            res.json({'students': students})
        })
    },
    addUser: async function(req, res){
      try {
        await user.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          user_name: req.body.user_name,
          role: req.body.role,
          course: req.body.course,
          gender: req.body.gender,
          email: req.body.email,
          mobile_no: req.body.mobile_no,
          password: req.body.password,
      }).then(function (user) {
          if (user) {
              user.status = true
              res.json({ 'status' : true})
          } else {
            console.log('Error occured while inserting data');
            res.json({'status': 'false' })
          }
      })
      } catch (error) {
        console.log('Error');
      }
  },
  loginUser: async function(req, res){
    try {
      user.findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        }
      }).then(function(user) {
        // students will be an array of all Project instances
        let role = user == null ? 0 : user.role
        let status = user != null
        res.json({'status': status, 'role': role })
    })
    } catch (error) {
      console.log('Error');
    }
},
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
    res.render("students/index", counts);
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
    res.render("students/students-list", studentsData);
  } catch (e) {
    console.log(e);
  }
}
  }