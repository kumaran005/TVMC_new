const user = require("./user");

exports.delete_students = function (req, res) {
  var message = "";
  var cand_id = req.body.cand_id;
  // var course = req.body.course;
  // console.log(req.body);
  var sql = `UPDATE admintv_ems.cand_admission_details SET active_status = 'NO' WHERE (cand_id = '${cand_id}')`;
  db.query(sql, function () {
    var sql = `update admintv_ems.user_details set cand_id = '' where cand_id='${cand_id}'`;
    db.query(sql, function () {
      user.all_boards(req, res);
    });
  });
};
