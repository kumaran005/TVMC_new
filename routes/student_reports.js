exports.student_reports = (req, res) => {
  var { report_type } = req.body;
  var { cand_id } = JSON.parse(req.body.user_details);
  //   console.log(cand_id);
  switch (report_type) {
    case "ID Card":
      var sql_admission = `SELECT * ,  DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id}')`;
      db.query(sql_admission, (err, data_admission) => {
        var sql_contact = `SELECT * from admintv_ems.cand_contact_details where cand_id in('${cand_id}')`;
        db.query(sql_contact, (err, data_contact) => {
          var sql_profile = `SELECT *,DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth from admintv_ems.cand_profile_details where cand_id in('${cand_id}')`;
          db.query(sql_profile, (err, data_profile) => {
            var sql_address = `SELECT * from admintv_ems.cand_address_details where cand_id in('${cand_id}')`;
            db.query(sql_address, (err, data_address) => {
              var sql_photo = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
              db.query(sql_photo, (err, data_photo) => {
                var sql_sign = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Sign','Y') `;
                db.query(sql_sign, (err, data_sign) => {
                  return res.render("report_idcard.ejs", {
                    userData: data_admission,
                    userData1: data_profile,
                    userData2: data_address,
                    userData8: data_contact,
                    userData12: data_photo,
                    userData13: data_sign,
                    course: "",
                  });
                });
              });
            });
          });
        });
      });
      break;
    case "Admission Letter":
      var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Thumb','Y') `;
      db.query(sql, (err, data19) => {
        var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Sign','Y') `;
        db.query(sql, (err, data18) => {
          var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
          db.query(sql, (err, data17) => {
            var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data1) => {
              var sql = `SELECT *, DATE_FORMAT(course_commencement, '%d %M %Y') course_commencement , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
              db.query(sql, (err, data) => {
                res.render("report_admission_letter.ejs", {
                  userData: data1,
                  userData1: data,
                  userData12: data17,
                  userData13: data18,
                  userData14: data19,
                  course: "",
                });
              });
            });
          });
        });
      });
      break;
    default:
      res.send("Page Under Construction!");
      break;
  }
};
