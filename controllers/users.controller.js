const user = require('../models').user
module.exports = {

    getAllStudents: async function(req, res){
        user.findAll({
            where: {
              id: 3
            }
          }).then(function(students) {
            // students will be an array of all Project instances
            res.json({'students': students})
        })
    },

}