const { Console } = require("console");
const { emitKeypressEvents } = require("readline");
const mail = require("./mail");
const stripe = require("stripe")(
  "sk_test_51HRdnbJuuyDhoKjMEHMO52H4Ddig3EKm26ll74M43kpBanSpnbEynf0AFR3ljgVwX5unc4GpgFpyg41mhFluRGWo00R2oNnQzq"
);
global.crypto = require("crypto");
function convertCryptKey(strKey) {
  var newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  strKey = new Buffer(strKey);
  for (var i = 0; i < strKey.length; i++) newKey[i % 16] ^= strKey[i];
  return newKey;
}

//---------------------------------------------signup page call------------------------------------------------------
exports.add_user = function (req, res) {
  message = "";
  if (req.method == "POST") {
    let x = Math.floor(Math.random() * 100 + 11);
    var post = req.body;
    console.log(post);
    var name = post.name;
    var emailid = post.emailid;
    var password = post.password;
    var userfirst = name.substring(0, 4);
    // var subuserid = "CA" + userfirst + x;
    var subuserid = userfirst + x;
    var userid = subuserid.toUpperCase();
    var user_type = "Public";
    var is_active = "yes";
    var salt = "yes";
    var course = post.course;
    var date_of_birth = post.dob;
    var gender = post.gender;
    var admission_quota = post.admission_quota;
    var relation = post.relation;
    var community = post.community;
    var address = post.address;
    var city = post.city;
    var state = post.state;
    var pin = post.pin;

    req.session.login_user = {
      userid: userid,
      emailid: emailid,
      password: password,
    };
    var dt = new Date();
    created_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
      .getDate()
      .toString()
      .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
      .getHours()
      .toString()
      .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    last_modified_time = `${(dt.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${dt.getDate().toString().padStart(2, "0")}/${dt
      .getFullYear()
      .toString()
      .padStart(4, "0")} ${dt.getHours().toString().padStart(2, "0")}:${dt
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}`;

    //hashing
    var c = crypto.createCipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var crypted = c.update(password, "utf8", "hex") + c.final("hex");
    var epass = crypted.toUpperCase();
    console.log(crypted.toUpperCase());
    var dc = crypto.createDecipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var decrypted = dc.update(epass, "hex", "utf8") + dc.final("utf8");
    var dpass = decrypted;

    //Mail

    var sql = `Select * from admintv_ems.user_details where emailid='${emailid}'`;
    var query = db.query(sql, function (err, data, message1) {
      // console.log(data);
      if (data.length) {
        var sql = `SELECT * FROM admintv_ems.state_details`;
        db.query(sql, function (err, data10) {
          var sql = `SELECT * FROM admintv_ems.admiss_quota`;
          db.query(sql, function (err, data7) {
            var sql = `SELECT * FROM admintv_ems.community_details`;
            db.query(sql, function (err, data6) {
              message = "Emailid/Password already exists.Please Check!";
              res.render("signupnew.ejs", {
                message: message,
                userData10: data10,
                userData6: data6,
                userData7: data7,
              });
            });
          });
        });
      } else {
        sql =
          "INSERT INTO `admintv_ems`.`user_details`(`user_id`,`name`,`emailid`,`user_type`,`is_active`,`created_time`,`user_name`,`password`,`salt`,`course`,`admission_quota`, `relation`, `community`, `address`, `city`, `state`, `pin`,`last_modified_time`) VALUES ('" +
          userid +
          "','" +
          name +
          "','" +
          emailid +
          "','" +
          user_type +
          "','" +
          is_active +
          "','" +
          created_time +
          "','" +
          userid +
          "','" +
          epass +
          "','" +
          salt +
          "','" +
          course +
          "','" +
          admission_quota +
          "','" +
          relation +
          "','" +
          community +
          "','" +
          address +
          "','" +
          city +
          "','" +
          state +
          "','" +
          pin +
          "','" +
          last_modified_time +
          "')";
        query = db.query(sql, function (err, data) {
          var sql = `SELECT * FROM admintv_ems.state_details`;
          db.query(sql, function (err, data10) {
            var sql = `SELECT * FROM admintv_ems.admiss_quota`;
            db.query(sql, function (err, data7) {
              var sql = `SELECT * FROM admintv_ems.community_details`;
              db.query(sql, function (err, data6) {
                message = "Login details send to your Email.!";
                res.render("signupnew.ejs", {
                  message: message,
                  userData10: data10,
                  userData6: data6,
                  userData7: data7,
                });
                mail.mail(req, res);
              });
            });
          });
        });
      }
    });
  } else {
    var sql = `SELECT * FROM admintv_ems.state_details`;
    db.query(sql, function (err, data10) {
      var sql = `SELECT * FROM admintv_ems.admiss_quota`;
      db.query(sql, function (err, data7) {
        var sql = `SELECT * FROM admintv_ems.community_details`;
        db.query(sql, function (err, data6) {
          res.render("signupnew.ejs", {
            userData10: data10,
            userData6: data6,
            userData7: data7,
          });
        });
      });
    });
  }
};

//-----------------------------------------------login page call------------------------------------------------------
exports.login = function (req, res) {
  var message = "";
  var sess = req.session;

  if (req.method == "POST") {
    var post = req.body;
    var username = post.user_name;
    var usertype = username.substring(0, 2);
    var pass = post.password;
    // console.log(pass);
    //hashing
    var c = crypto.createCipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var crypted = c.update(pass, "utf8", "hex") + c.final("hex");
    var epass = crypted.toUpperCase();
    // console.log("epass:" + crypted.toUpperCase());
    var dc = crypto.createDecipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var decrypted = dc.update(epass, "hex", "utf8") + dc.final("utf8");
    var dpass = decrypted;
    console.log("d:" + decrypted);

    var sql =
      "SELECT * FROM `admintv_ems`.`user_details` WHERE `user_name`='" +
      username +
      "' or `emailid`='" +
      username +
      "' and `password` = '" +
      epass +
      "'";
    db.query(sql, function (err, results) {
      if (results.length) {
        if (results[0].user_type == "Admin") {
          //req.session.user = results[0];
          message = "Welcome!";
          res.render("ic_board_admin.ejs", {
            message: message,
            user: results[0],
          });
        } else if (results[0].user_type == "Assistant") {
          //req.session.user = results[0];

          message = "Welcome!";
          res.render("ic_board_assistant.ejs", {
            message: message,
            user: results[0],
          });
        } else if (results[0].user_type == "Student") {
          //req.session.user = results[0];

          message = "Welcome!";
          res.render("table.ejs", {
            message: message,
            user: results[0],
          });
        } else if (results[0].user_type == "Public") {
          //req.session.user = results[0];
          message = "Welcome!";
          res.render("ic_board_student.ejs", {
            message: message,
            course_title: results[0].course,
            user: results[0],
          });
        } else {
          message = "Incorrect! Username or Password";
          res.render("index.ejs", { message: message });
        }
      } else {
        message = "Incorrect! Username or Password";
        res.render("index.ejs", { message: message });
      }
    });
  } else {
    res.render("index.ejs", { message: message });
  }
};

exports.changepassword = function (req, res, next) {
  if (req.method == "POST") {
    res.render("password.ejs", { message: "", user: req.body.user_details });
  } else {
    var message = "";
    res.render("index.ejs", { message: message });
  }
};
exports.changepswd = (req, res) => {
  var user = JSON.parse(req.body.user_details);
  var old = req.body.old_password;
  var newpass = req.body.confirmPassword;

  var c = crypto.createCipheriv(
    "aes-128-ecb",
    convertCryptKey("myPassword"),
    ""
  );
  var crypted = c.update(newpass, "utf8", "hex") + c.final("hex");
  var e_new_pass = crypted.toUpperCase();
  var sql = `update admintv_ems.user_details set password = '${e_new_pass}' where user_name = '${user.user_name}'`;
  db.query(sql, () => {
    res.render("password.ejs", {
      user: user,
      message: "Password changed successfully",
    });
  });
};
exports.myprofile = function (req, res, next) {
  var message = "";
  res.render("myprofile.ejs", { message: message });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.loginpage = function (req, res, next) {
  var message = "";
  res.render("login.ejs", { message: message });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.view_report = function (req, res, next) {
  var post = req.body;
  var cand_id = post.cand_id;
  var message = cand_id;
  res.render("myreports.ejs", { message: message });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------
/* --------------------------------------------boards------------------------------------------- */
exports.all_boards = (req, res) => {
  var message = "";

  if (req.method == "POST") {
    var post = req.body;
    var user_details = JSON.parse(post.user_details);
    var course = post.course_title;
    // console.log(req.method);

    var page = "";
    user_details.user_type == "Assistant" || user_details.user_type == "Admin"
      ? course == "MBBS"
        ? (page += "mbbs_viewstudent.ejs")
        : course == "MDMS"
        ? (page += "mdms_viewstudent.ejs")
        : course == "BSC"
        ? (page += "bsc_viewstudent.ejs")
        : course == "AISSC"
        ? (page += "aissc_viewstudent.ejs")
        : course == "Diploma in Nursing"
        ? (page += "nursing_viewstudent.ejs")
        : course == "Paramedical"
        ? (page += "")
        : null
      : user_details.user_type == "Public"
      ? course == "MBBS"
        ? (page += "mbbs_studentview.ejs")
        : course == "MDMS"
        ? (page += "mdms_studentview.ejs")
        : course == "BSC"
        ? (page += "bsc_studentview.ejs")
        : course == "AISSC"
        ? (page += "aissc_studentview.ejs")
        : course == "Diploma in Nursing"
        ? (page += "nursing_studentview.ejs")
        : course == "Paramedical"
        ? (page += "")
        : null
      : null;

    var sql = `SELECT *, DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
                          where (course_title,submitted,active_status) = ('${course}','Yes','Yes') order by student_code`;
    db.query(sql, function (err, data31) {
      var sql = `SELECT * FROM admintv_ems.check_slip_status`;
      db.query(sql, function (err, data30) {
        var sql = `SELECT *,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details INNER JOIN
  admintv_ems.cand_relieving_details ON admintv_ems.cand_admission_details.cand_id= admintv_ems.cand_relieving_details.cand_id
   where (admintv_ems.cand_relieving_details.relieved,admintv_ems.cand_admission_details.active_status,admintv_ems.cand_admission_details.course_title)= ('Yes','Yes','${course}')`;
        db.query(sql, function (err, data27) {
          var sql = `SELECT * FROM admintv_ems.state_details`;
          db.query(sql, function (err, data10) {
            var sql = `SELECT * FROM admintv_ems.admiss_type`;
            db.query(sql, function (err, data8) {
              var sql = `SELECT * FROM admintv_ems.admiss_quota`;
              db.query(sql, function (err, data7) {
                var sql = `SELECT * FROM admintv_ems.community_details`;
                db.query(sql, function (err, data6) {
                  var sql = `select distinct nationality from admintv_ems.cand_profile_details where nationality !=' ' and nationality !='' order by nationality`;
                  db.query(sql, function (err, data5) {
                    var sql = `select distinct religion from admintv_ems.cand_profile_details  where religion != ' ' and religion !='' order by religion`;
                    db.query(sql, function (err, data4) {
                      var sql = `select distinct blood_group from admintv_ems.cand_profile_details where blood_group != ' ' and blood_group !='' order by blood_group`;
                      db.query(sql, function (err, data3) {
                        var sql = `select * from admintv_ems.board`;
                        db.query(sql, function (err, data28) {
                          if (
                            user_details.user_type == "Assistant" ||
                            user_details.user_type == "Admin"
                          ) {
                            var sql1 = `SELECT *, DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
                          where (course_title,submitted,active_status,relieved) = ('${course}','Yes','Yes','No') order by student_code`;
                            db.query(sql1, function (err, data) {
                              console.log(data);
                              res.render(page, {
                                message: message,
                                userData: data,
                                userData3: data3,
                                userData4: data4,
                                userData5: data5,
                                userData6: data6,
                                userData7: data7,
                                userData8: data8,
                                userData10: data10,
                                userData27: data27,
                                userData30: data30,
                                userData31: data31,
                                userData28: data28,
                                user: user_details,
                              });
                            });
                          } else if (user_details.user_type == "Public") {
                            var sql = `select cand_id from admintv_ems.user_details where user_name = '${user_details.user_name}' and password = '${user_details.password}'`;
                            db.query(sql, (err, cand_id) => {
                              if (err) res.send(error);

                              var sql_1 = `SELECT *,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
                          where (course_title,active_status,relieved ,admintv_ems.cand_admission_details.cand_id) = ('${course}','Yes','No','${cand_id[0].cand_id}')`;
                              db.query(sql_1, function (err, data) {
                                res.render(page, {
                                  message: message,
                                  userData: data,
                                  userData3: data3,
                                  userData4: data4,
                                  userData5: data5,
                                  userData6: data6,
                                  userData7: data7,
                                  userData8: data8,
                                  userData10: data10,
                                  userData27: data27,
                                  userData28: data28,
                                  userData30: data30,
                                  user: user_details,
                                  cand_id: cand_id,
                                });
                              });
                            });
                          } else {
                            res.render("index.ejs", { message: message });
                          }
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  } else {
    res.render("index.ejs", { message: message });
  }
};

// exports.mdms_board = function (req, res) {
//   var message = "";
//   // console.log("course", res);
//   var userId = req.session.userId;
//   var post = req.body;
//   var cand_id = post.cand_id;
//   var sql = `select * from admintv_ems.check_slip_status`;
//   db.query(sql, function (err, data30) {
//     var sql = `SELECT * FROM admintv_ems.cand_admission_details INNER JOIN
//   admintv_ems.cand_relieving_details ON admintv_ems.cand_admission_details.cand_id= admintv_ems.cand_relieving_details.cand_id
//    where (admintv_ems.cand_relieving_details.relieved,admintv_ems.cand_admission_details.active_status,admintv_ems.cand_admission_details.course_title)= ('Yes','Yes','MDMS')`;
//     db.query(sql, function (err, data27) {
//       var sql = `SELECT * FROM admintv_ems.state_details`;
//       db.query(sql, function (err, data10) {
//         var sql = `SELECT * FROM admintv_ems.admiss_type`;
//         db.query(sql, function (err, data8) {
//           var sql = `SELECT * FROM admintv_ems.admiss_quota`;
//           db.query(sql, function (err, data7) {
//             var sql = `SELECT * FROM admintv_ems.community_details`;
//             db.query(sql, function (err, data6) {
//               var sql = `SELECT * FROM admintv_ems.nation_details`;
//               db.query(sql, function (err, data5) {
//                 var sql = `SELECT * FROM admintv_ems.religion_details`;
//                 db.query(sql, function (err, data4) {
//                   var sql = `SELECT * FROM admintv_ems.no_delete`;
//                   db.query(sql, function (err, data3) {
//                     var sql = `SELECT * FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
//                       where (course_title,active_status,relieved) = ('MDMS','Yes','No') order by student_code`;
//                     db.query(sql, function (err, data) {
//                       res.render("mdms_viewstudent.ejs", {
//                         message: message,
//                         userData: data,
//                         userData3: data3,
//                         userData4: data4,
//                         userData5: data5,
//                         userData6: data6,
//                         userData7: data7,
//                         userData8: data8,
//                         userData10: data10,
//                         userData27: data27,
//                         userData30: data30,
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// };

// BSC
// exports.bsc_board = (req, res) => {
//   var message = "";
//   // var userId = req.session.userId;
//   var sql = `SELECT * FROM admintv_ems.check_slip_status`;
//   db.query(sql, function (err, data30) {
//     var sql = `SELECT * FROM admintv_ems.cand_admission_details INNER JOIN
//   admintv_ems.cand_relieving_details ON admintv_ems.cand_admission_details.cand_id= admintv_ems.cand_relieving_details.cand_id
//    where (admintv_ems.cand_relieving_details.relieved,admintv_ems.cand_admission_details.active_status,admintv_ems.cand_admission_details.course_title)= ('Yes','Yes','BSC')`;
//     db.query(sql, function (err, data27) {
//       var sql = `SELECT * FROM admintv_ems.state_details`;
//       db.query(sql, function (err, data10) {
//         var sql = `SELECT * FROM admintv_ems.admiss_type`;
//         db.query(sql, function (err, data8) {
//           var sql = `SELECT * FROM admintv_ems.admiss_quota`;
//           db.query(sql, function (err, data7) {
//             var sql = `SELECT * FROM admintv_ems.community_details`;
//             db.query(sql, function (err, data6) {
//               var sql = `SELECT * FROM admintv_ems.nation_details`;
//               db.query(sql, function (err, data5) {
//                 var sql = `SELECT * FROM admintv_ems.religion_details`;
//                 db.query(sql, function (err, data4) {
//                   var sql = `SELECT * FROM admintv_ems.no_delete`;
//                   db.query(sql, function (err, data3) {
//                     var sql = `SELECT * FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
//                       where (course_title,active_status,relieved) = ('BSC','Yes','No') order by student_code`;
//                     db.query(sql, function (err, data) {
//                       res.render("bsc_viewstudent.ejs", {
//                         message: message,
//                         userData: data,
//                         userData3: data3,
//                         userData4: data4,
//                         userData5: data5,
//                         userData6: data6,
//                         userData7: data7,
//                         userData8: data8,
//                         userData10: data10,
//                         userData27: data27,
//                         userData30: data30,
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// };

// AISSC
// exports.aissc_board = function (req, res) {
//   var message = "";
//   // console.log("course", res);
//   var userId = req.session.userId;
//   var post = req.body;
//   var cand_id = post.cand_id;
//   var sql = `select * from admintv_ems.check_slip_status`;
//   db.query(sql, function (err, data30) {
//     var sql = `SELECT * FROM admintv_ems.cand_admission_details INNER JOIN
//   admintv_ems.cand_relieving_details ON admintv_ems.cand_admission_details.cand_id= admintv_ems.cand_relieving_details.cand_id
//    where (admintv_ems.cand_relieving_details.relieved,admintv_ems.cand_admission_details.active_status,admintv_ems.cand_admission_details.course_title)= ('Yes','Yes','MDMS')`;
//     db.query(sql, function (err, data27) {
//       var sql = `SELECT * FROM admintv_ems.state_details`;
//       db.query(sql, function (err, data10) {
//         var sql = `SELECT * FROM admintv_ems.admiss_type`;
//         db.query(sql, function (err, data8) {
//           var sql = `SELECT * FROM admintv_ems.admiss_quota`;
//           db.query(sql, function (err, data7) {
//             var sql = `SELECT * FROM admintv_ems.community_details`;
//             db.query(sql, function (err, data6) {
//               var sql = `SELECT * FROM admintv_ems.nation_details`;
//               db.query(sql, function (err, data5) {
//                 var sql = `SELECT * FROM admintv_ems.religion_details`;
//                 db.query(sql, function (err, data4) {
//                   var sql = `SELECT * FROM admintv_ems.no_delete`;
//                   db.query(sql, function (err, data3) {
//                     var sql = `SELECT *, DATE_FORMAT(date_of_admission, '%d-%m-%Y') date_of_admission FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
//                       where (course_title,active_status,relieved) = ('AISSC','Yes','No') order by student_code`;
//                     db.query(sql, function (err, data) {
//                       res.render("aissc_viewstudent.ejs", {
//                         message: message,
//                         userData: data,
//                         userData3: data3,
//                         userData4: data4,
//                         userData5: data5,
//                         userData6: data6,
//                         userData7: data7,
//                         userData8: data8,
//                         userData10: data10,
//                         userData27: data27,
//                         userData30: data30,
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// };

// exports.nursing_board = (req, res) => {
//   var message = "";
//   // var userId = req.session.userId;
//   var sql = `SELECT * FROM admintv_ems.check_slip_status`;
//   db.query(sql, function (err, data30) {
//     var sql = `SELECT * FROM admintv_ems.cand_admission_details INNER JOIN
//   admintv_ems.cand_relieving_details ON admintv_ems.cand_admission_details.cand_id= admintv_ems.cand_relieving_details.cand_id
//    where (admintv_ems.cand_relieving_details.relieved,admintv_ems.cand_admission_details.active_status,admintv_ems.cand_admission_details.course_title)= ('Yes','Yes','DIPLOMA IN NURSING')`;
//     db.query(sql, function (err, data27) {
//       var sql = `SELECT * FROM admintv_ems.state_details`;
//       db.query(sql, function (err, data10) {
//         var sql = `SELECT * FROM admintv_ems.admiss_type`;
//         db.query(sql, function (err, data8) {
//           var sql = `SELECT * FROM admintv_ems.admiss_quota`;
//           db.query(sql, function (err, data7) {
//             var sql = `SELECT * FROM admintv_ems.community_details`;
//             db.query(sql, function (err, data6) {
//               var sql = `SELECT * FROM admintv_ems.nation_details`;
//               db.query(sql, function (err, data5) {
//                 var sql = `SELECT * FROM admintv_ems.religion_details`;
//                 db.query(sql, function (err, data4) {
//                   var sql = `SELECT * FROM admintv_ems.no_delete`;
//                   db.query(sql, function (err, data3) {
//                     var sql = `SELECT * FROM admintv_ems.cand_relieving_details inner join admintv_ems.cand_admission_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
//                       where (course_title,active_status,relieved) = ('DIPLOMA IN NURSING','Yes','No') order by student_code`;
//                     db.query(sql, function (err, data) {
//                       res.render("nursing_viewstudent.ejs", {
//                         message: message,
//                         userData: data,
//                         userData3: data3,
//                         userData4: data4,
//                         userData5: data5,
//                         userData6: data6,
//                         userData7: data7,
//                         userData8: data8,
//                         userData10: data10,
//                         userData27: data27,
//                         userData30: data30,
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// };
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.icboard = function (req, res, next) {
  var message = "";
  res.render("ic_board.ejs", { message: message });
};

exports.ack = (req, res) => {
  var user_details = JSON.parse(req.body.user_details);
  if (req.method == "POST") {
    var sql = `select cand_id,course from admintv_ems.user_details where user_name = '${user_details.user_name}' and password = '${user_details.password}'`;
    db.query(sql, (err, cand_id) => {
      var sql_1 = `SELECT admintv_ems.cand_admission_details.cand_id,cand_name,course,name_of_bank,amount_paid,transaction_id,mobile_phone,submit_date FROM admintv_ems.cand_admission_details
      inner join admintv_ems.cand_relieving_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
      inner join admintv_ems.cand_bank_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_bank_details.cand_id
      inner join admintv_ems.cand_contact_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_contact_details.cand_id
      where (course_title,active_status,relieved ,admintv_ems.cand_admission_details.cand_id) = ('${cand_id[0].course}','Yes','No','${cand_id[0].cand_id}')`;

      db.query(sql_1, function (err, data) {
        res.render("receipt.ejs", { userData: data });
      });
    });
  } else {
    res.render("index.ejs");
  }
};

//--------------------------------Main signup page--------------------------------
exports.signuphome = function (req, res) {
  var message = "";
  var sql = "select distinct category  from `training`.`courses`";
  db.query(sql, function (err, data, message1) {
    res.render("signup.ejs", {
      message1: message,
      userData: data,
      message: message,
    });
  });
};
//--------------------------------Main signup page--------------------------------
exports.forgotpwd = function (req, res) {
  var message = "";
  res.render("forgotpwd.ejs", { message: message });
};

// forgetpwd
exports.forgetpasssword = (req, res) => {
  var user_name = req.body.user_name;
  var emailid = req.body.emailid;

  if (user_name) {
    var sql = `select * from admintv_ems.user_details where user_name = '${user_name.toUpperCase()}'`;
    db.query(sql, (err, data) => {
      if (data[0]) {
        mail.pwdrecover(req, res, data);
        res.render("forgotpwd.ejs", {
          message: "Username and Password send to your mail..!",
        });
      } else {
        res.render("forgotpwd.ejs", {
          message: "Incorrect EmailId or Username..!",
        });
      }
    });
  } else if (emailid) {
    var sql = `select * from admintv_ems.user_details where emailid = '${emailid}'`;
    db.query(sql, (err, data) => {
      if (data[0]) {
        mail.pwdrecover(req, res, data);
        res.render("forgotpwd.ejs", {
          message: "Username and Password send to your mail..!",
        });
      } else {
        res.render("forgotpwd.ejs", {
          message: "Incorrect EmailId or Username..!",
        });
      }
    });
  } else {
    res.render("forgotpwd.ejs", { message: "Please fill any one field!" });
  }
};

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
};
