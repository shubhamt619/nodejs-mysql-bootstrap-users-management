const user = require('../models').user
module.exports = {

    getDasboard: async function(req, res){
        user.findAll({
            where: {
              id: 3
            }
          }).then(function(students) {
            // students will be an array of all Project instances
            let counts = {
                'studentsCount': 10,
                'adminsCount': 100,
            }
            res.render('admin/index', counts);
        })
    }
}