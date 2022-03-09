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
      console.log(req.body);
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
              console.log('Inserted successfully.');
              location.reload();
          } else {
            console.log('Error occured while inserting data');
            res.json({'status': 'false' })
          }
      })
      } catch (error) {
        console.log('Error');
      }
  }
  }