const user = require("./user");

exports.collect_fees = function (req, res) {
  var message = "";

  var post = req.body;
  var cand_id = post.cand_id;
  var course = post.course;
  // console.log("posting:", post);
  var tution_fee = Number(post.tution_fee);
  var special_fee = Number(post.special_fee);
  var medical_fee = Number(post.medical_fee);
  var caution_fee = Number(post.caution_fee);
  var lib_fee = Number(post.lib_fee);
  var univ_fee = Number(post.univ_fee);
  var lic_fee = Number(post.lic_fee);
  var red_fee = Number(post.red_fee);
  var mis_fee = Number(post.mis_fee);
  var flag_fee = Number(post.flag_fee);
  var total_fee =
    course == "MBBS" || course == "BSC" || course == "DIPLOMA IN NURSING"
      ? tution_fee +
        special_fee +
        medical_fee +
        caution_fee +
        lib_fee +
        univ_fee +
        lic_fee +
        red_fee +
        mis_fee +
        flag_fee
      : course == "MDMS" || course == "AISSC"
      ? tution_fee + special_fee + caution_fee + lib_fee + flag_fee
      : null;

  var dt = new Date();
  //    registered_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
  last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  var sql = `UPDATE admintv_ems.cand_fees SET  tution_fee ='${tution_fee}', special_fee='${special_fee}', medical_fee='${medical_fee}', caution_fee='${caution_fee}', lib_fee='${lib_fee}', univ_fee='${univ_fee}', lic_fee='${lic_fee}', red_fee='${red_fee}', mis_fee='${mis_fee}', flag_fee='${flag_fee}', total_fee='${total_fee}', last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
  db.query(sql, function () {
    switch (course) {
      case "MBBS":
        user.mbbs_board(req, res);
        break;
      case "MDMS":
        user.mdms_board(req, res);
        break;
      case "BSC":
        user.bsc_board(req, res);
        break;
      case "AISSC":
        user.aissc_board(req, res);
        break;
      case "DIPLOMA IN NURSING":
        user.nursing_board(req, res);
        break;
      default:
        null;
        break;
    }
    // res.send("Fees Updated");
  });
};

exports.print_fees = function (req, res) {
  var post = req.body;
  var cand_id = post.cand_id;
  var course = post.course;
  var table;
  // console.log("post:", post);
  var tution_fee = Number(post.tution_fee);
  var special_fee = Number(post.special_fee);
  var medical_fee = Number(post.medical_fee);
  var caution_fee = Number(post.caution_fee);
  var lib_fee = Number(post.lib_fee);
  var univ_fee = Number(post.univ_fee);
  var lic_fee = Number(post.lic_fee);
  var red_fee = Number(post.red_fee);
  var mis_fee = Number(post.mis_fee);
  var flag_fee = Number(post.flag_fee);
  var total_fee =
    course == "MBBS" || course == "BSC" || course == "DILOMA IN NURSING"
      ? tution_fee +
        special_fee +
        medical_fee +
        caution_fee +
        lib_fee +
        univ_fee +
        lic_fee +
        red_fee +
        mis_fee +
        flag_fee
      : course == "MDMS" || course == "AISSC"
      ? tution_fee + special_fee + caution_fee + lib_fee + flag_fee
      : null;
  // console.log(total_fee);
  var dt = new Date();
  //    registered_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
  last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  // console.log(cand_id);
  var sql = `UPDATE admintv_ems.cand_fees SET  tution_fee ='${tution_fee}', special_fee='${special_fee}', medical_fee='${medical_fee}', caution_fee='${caution_fee}', lib_fee='${lib_fee}', univ_fee='${univ_fee}', lic_fee='${lic_fee}', red_fee='${red_fee}', mis_fee='${mis_fee}', flag_fee='${flag_fee}', total_fee='${total_fee}', last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
  db.query(sql, function () {
    var sql = `SELECT * FROM admintv_ems.cand_fees where cand_id  ='${cand_id}'`;
    db.query(sql, function (err, data11) {
      var sql = `SELECT * FROM admintv_ems.cand_profile_details where cand_id ='${cand_id}'`;
      db.query(sql, function (err, data) {
        var sql = `SELECT * FROM admintv_ems.cand_admission_details where cand_id = '${cand_id}'`;
        db.query(sql, function (err, data1) {
          // console.log(data11);
          // select * from admintv_ems.cand_profile_details where cand_id in (select cand_id from cand_admission_details where couse ='MDMS');
          switch (course) {
            case "MBBS":
              res.render("report_fees.ejs", {
                userData: data,
                userData1: data1,
                userData11: data11,
                course: course,
              });

              break;
            case "BSC":
              res.render("report_fees.ejs", {
                userData: data,
                userData1: data1,
                userData11: data11,
                course: course,
              });
              break;
            case "MDMS":
              res.render("report_fees_mdms.ejs", {
                userData: data,
                userData1: data1,
                userData11: data11,
                course: course,
              });
              break;
            case "AISSC":
              res.render("report_fees_mdms.ejs", {
                userData: data,
                userData1: data1,
                userData11: data11,
                course: course,
              });
              break;
            case "DIPLOMA IN NURSING":
              res.render("report_fees.ejs", {
                userData: data,
                userData1: data1,
                userData11: data11,
                course: course,
              });
              break;
            default:
              null;
              break;
          }
        });
      });
    });
  });
};
