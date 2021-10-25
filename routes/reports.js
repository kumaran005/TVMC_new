const user = require("./user");

exports.all_report = function (req, res) {
  var post = req.body;
  var cand_id = post.check;
  var rel_cand_id = post.rel_check;
  var reports = post.reports;
  var course = post.course;

  var bon_ref_no = post.bon_ref_no;
  var bon_acad_year = post.bon_acad_year;
  var bon_purse = post.bon_purse;
  var bon_stud_year = post.bon_stud_year;
  var bon_purpose = post.bon_purpose;
  var bon_pur_others = post.bon_pur_others;
  var ack_date = post.ack_date;
  var cond_csp = post.cond_csp;
  var cond_cep = post.cond_cep;
  var cond_mbbs = post.cond_mbbs;
  var cond_tsp = post.cond_tsp;
  var cond_tep = post.cond_tep;
  var cond_char = post.cond_char;
  var tc_reldate = post.tc_reldate;
  var tc_reas = post.tc_reas;
  var tc_mark = post.tc_mark;
  var tc_high = post.tc_high;
  //change
  var rel_date = post.rel_date;
  var indiDate = post.indiDate;
  var ref = post.ref;
  var check_slip = post.check_slip;
  var check_date = post.check_date;
  var check_remark = post.check_remark;
  var check_status = post.check_status;

  var today = new Date();

  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  todayy = dd + "-" + mm + "-" + yyyy;

  var objDate = new Date(rel_date)
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");
  var indiDate =
    indiDate == ""
      ? ""
      : new Date(indiDate)
          .toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/ /g, "-");
  var indiDate1 =
    indiDate == ""
      ? ""
      : new Date(indiDate)
          .toLocaleString("en-GB", {
            day: "2-digit",
            month: "numeric",
            year: "numeric",
          })
          .replace(/ /g, "-");
  var cond_tsp = new Date(cond_tsp)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })

    .replace(/ /g, "-");

  var cond_tep = new Date(cond_tep).toLocaleString("en-GB", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
  var dt = new Date();
  var last_modified_time = `${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${dt.getDate().toString().padStart(2, "0")}/${dt
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${dt.getHours().toString().padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}`;

  switch (reports) {
    case "Admission Register":
      if (typeof cand_id === "object") {
        var sql_admission = `SELECT *, DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id.join(
          "','"
        )}')`;
        var sql_contact = `SELECT * from admintv_ems.cand_contact_details where cand_id in('${cand_id.join(
          "','"
        )}')`;
        var sql_profile = `SELECT *,DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details where cand_id in('${cand_id.join(
          "','"
        )}')`;
        var sql_address = `SELECT * from admintv_ems.cand_address_details where cand_id in ('${cand_id.join(
          "','"
        )}')`;
        var sql_institute = `SELECT * from admintv_ems.cand_institute_details where cand_id in('${cand_id.join(
          "','"
        )}')`;
        var sql_photo = `SELECT * from admintv_ems.biometric_details where cand_id in('${cand_id.join(
          "','"
        )}') and (category,active_flag) =('Photo','Y') `;
        var sql_institute_mdms = `select * from admintv_ems.cand_admission_details
                                  inner join admintv_ems.cand_academic_mdms on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_academic_mdms.cand_id where admintv_ems.cand_academic_mdms.cand_id  in('${cand_id.join(
                                    "','"
                                  )}')`;
      } else {
        var sql_admission = `SELECT * ,  DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id}')`;
        var sql_contact = `SELECT * from admintv_ems.cand_contact_details where cand_id in('${cand_id}')`;
        var sql_profile = `SELECT *,DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth from admintv_ems.cand_profile_details where cand_id in('${cand_id}')`;
        var sql_address = `SELECT * from admintv_ems.cand_address_details where cand_id in('${cand_id}')`;
        var sql_institute = `SELECT * from admintv_ems.cand_institute_details where cand_id in('${cand_id}')`;
        var sql_photo = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
        var sql_institute_mdms = `select * from admintv_ems.cand_admission_details
                                  inner join admintv_ems.cand_academic_mdms on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_academic_mdms.cand_id where admintv_ems.cand_academic_mdms.cand_id in ('${cand_id}')`;
      }
      db.query(sql_admission, (err, data_admission) => {
        db.query(sql_contact, (err, data_contact) => {
          db.query(sql_profile, (err, data_profile) => {
            db.query(sql_address, (err, data_address) => {
              db.query(sql_institute, (err, data_institute) => {
                db.query(sql_photo, (err, data_photo) => {
                  db.query(sql_institute_mdms, (err, data_institute_mdms) => {
                    if (err) {
                      console.error(err);
                    }

                    if (course == "MBBS" || course == "BSC") {
                      return res.render(
                        "report_admission_register.ejs",
                        {
                          userData: data_admission,
                          userData1: data_profile,
                          userData2: data_address,
                          userData4: data_institute,
                          userData8: data_contact,
                          userData12: data_photo,
                          course: course,
                        } //pending
                      );
                    }
                    if (course == "MDMS" || course == "AISSC") {
                      return res.render("report_admission_register_mdms.ejs", {
                        userData: data_admission,
                        userData1: data_profile,
                        userData2: data_address,
                        userData4: data_institute_mdms,
                        userData8: data_contact,
                        userData12: data_photo,
                        course: course,
                      });
                    }
                  });
                });
              });
            });
          });
        });
      });
      break;
    case "Admission Details":
      var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details INNER JOIN
                                admintv_ems.cand_profile_details ON admintv_ems.cand_admission_details.cand_id= admintv_ems.cand_profile_details.cand_id
                                INNER JOIN
                                  admintv_ems.cand_institute_details_mdms ON admintv_ems.cand_profile_details.cand_id=  admintv_ems.cand_institute_details_mdms.cand_id
                                where admintv_ems.cand_profile_details.cand_id= '${cand_id}'`;
      db.query(sql, function (err, data32) {
        var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Community Certificate','Y')`;
        db.query(sql, (err, data25) => {
          var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data12) => {
            var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
            db.query(sql, (err, data2) => {
              var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
              db.query(sql, (err, data1) => {
                var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                db.query(sql, (err, data) => {
                  res.render("report_Admission Details.ejs", {
                    userData: data1,
                    userData1: data,
                    userData32: data32,
                    userData2: data2,
                    userData8: data12,
                    userData25: data25,
                    course: course,
                  });
                });
              });
            });
          });
        });
      });
      break;

    case "Discipline Declaration":
      var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}' `;
      db.query(sql, (err, data4) => {
        var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data2) => {
          var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
          db.query(sql, (err, data1) => {
            var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data) => {
              res.render("report_Discipline_Declaration.ejs", {
                userData: data1,
                userData1: data,
                userData4: data4,
                userData2: data2,
                course: course,
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
                  course: course,
                });
              });
            });
          });
        });
      });
      break;
    case "Check Slip":
      var array = new Array();

      for (i in check_slip) {
        array.push({
          check_slip: check_slip[i],
          check_date: check_date[i],
          check_remark: check_remark[i],
          check_status: check_status[i],
        });
      }
      // console.table(array);

      array.forEach((e) => {
        var sql = `select count(*) as result from admintv_ems.check_slip where (cand_id,certificate_type) = ('${cand_id}','${e.check_slip}')`;
        db.query(sql, (err, Cdata) => {
          if (Cdata[0].result > 0) {
            db.query(
              `update admintv_ems.check_slip set  certificate_status = '${e.check_status}', due_date = date_format(str_to_date('${e.check_date}','%d %M %Y'),'%Y-%m-%d'), remark = '${e.check_remark}', last_modified_time = '${last_modified_time}' where(cand_id,certificate_type) = ('${cand_id}','${e.check_slip}')`,
              (err) => {
                if (err) {
                  console.log(err);
                }
              }
            );
          }
          if (Cdata[0].result == 0) {
            db.query(
              `insert into admintv_ems.check_slip (cand_id, certificate_type, certificate_status, due_date, remark, last_modified_time) values ('${cand_id}','${e.check_slip}','${e.check_status}',date_format(str_to_date('${e.check_date}','%d %M %Y'),'%Y-%m-%d'),'${e.check_remark}','${last_modified_time}');`
            );
          }
        });
      });
      var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
      db.query(sql, (err, data1) => {
        var sql = `SELECT *  , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;

        db.query(sql, (err, data) => {
          if (course == "MBBS" || course == "BSC") {
            res.render("report_checkslip.ejs", {
              userData: data1,
              userData1: data,
              check_slip: check_slip,
              check_date: check_date,
              check_status: check_status,
              check_remark: check_remark,
              course: course,
            });
          } else if (course == "MDMS") {
            res.render("report_checkslip_mdms.ejs", {
              userData: data1,
              userData1: data,
              check_slip: check_slip,
              check_date: check_date,
              check_status: check_status,
              check_remark: check_remark,
              course: course,
            });
          } else if (course == "AISSC") {
            res.render("report_checkslip_aissc.ejs", {
              userData: data1,
              userData1: data,
              check_slip: check_slip,
              check_date: check_date,
              check_status: check_status,
              check_remark: check_remark,
              course: course,
            });
          } else {
            null;
          }
        });
      });
      break;
    case "Student Details":
      var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Community Certificate','Y')`;
      db.query(sql, (err, data25) => {
        var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data12) => {
          var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data2) => {
            var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data1) => {
              var sql = `SELECT *,  DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
              db.query(sql, (err, data) => {
                res.render("report_personal.ejs", {
                  userData: data1,
                  userData1: data,
                  userData2: data2,
                  userData8: data12,
                  userData25: data25,
                  course: course,
                });
              });
            });
          });
        });
      });
      break;
    case "Education Details":
      var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Transfer Certificate','Y')`;
      db.query(sql, (err, data26) => {
        var sql = `select * , DATE_FORMAT(date, '%d/%m/%Y') date from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Migration Certificate','Y')`;
        db.query(sql, (err, data24) => {
          var sql = `select * ,DATE_FORMAT(date, '%d/%m/%Y') date from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Eligibility Certificate','Y')`;
          db.query(sql, (err, data23) => {
            var sql = `SELECT * from admintv_ems.cand_institute_details where cand_id ='${cand_id}' `;
            db.query(sql, (err, data9) => {
              var sql = `SELECT * from admintv_ems.cand_marks_details where cand_id ='${cand_id}' `;
              db.query(sql, (err, data8) => {
                var sql = `SELECT * from admintv_ems.cand_neet_mark_details where cand_id ='${cand_id}' `;
                db.query(sql, (err, data7) => {
                  var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                  db.query(sql, (err, data1) => {
                    var sql = `SELECT * ,  DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                    db.query(sql, (err, data) => {
                      res.render("report_education.ejs", {
                        userData: data1,
                        userData1: data,
                        // userData3:data3,
                        userData4: data9,
                        userData5: data8,
                        userData6: data7,
                        userData23: data23,
                        userData24: data24,
                        userData26: data26,
                        course: course,
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
      break;
    case "Education Details mdms":
      var sql = `SELECT * FROM admintv_ems.cand_academic_mdms INNER JOIN
                                admintv_ems.cand_academic_mdms_1 ON admintv_ems.cand_academic_mdms.cand_id= admintv_ems.cand_academic_mdms_1.cand_id
                                INNER JOIN
                                  admintv_ems.cand_academic_mdms_2 ON admintv_ems.cand_academic_mdms.cand_id=  admintv_ems.cand_academic_mdms_2.cand_id
                                where admintv_ems.cand_academic_mdms.cand_id= '${cand_id}'`;
      db.query(sql, function (err, data33) {
        var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Medical Council Registration (PG DIPLOMA)','Y')`;
        db.query(sql, (err, data38) => {
          var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Medical Council Registration (MBBS)','Y')`;
          db.query(sql, (err, data37) => {
            var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Degree Certificate (PG DIPLOMA)','Y')`;
            db.query(sql, (err, data36) => {
              var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Degree Certificate (MBBS)','Y')`;
              db.query(sql, (err, data35) => {
                var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Medical Council Registration (MD/MS)','Y')`;
                db.query(sql, (err, data34) => {
                  var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Degree Certificate (MD/MS)','Y')`;
                  db.query(sql, (err, data30) => {
                    var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Transfer Certificate','Y')`;
                    db.query(sql, (err, data26) => {
                      var sql = `select * , DATE_FORMAT(date, '%d/%m/%Y') date from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Migration Certificate','Y')`;
                      db.query(sql, (err, data24) => {
                        var sql = `select * ,DATE_FORMAT(date, '%d/%m/%Y') date from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Eligibility Certificate','Y')`;
                        db.query(sql, (err, data23) => {
                          var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Conduct Certificate','Y')`;
                          db.query(sql, (err, data20) => {
                            var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                            db.query(sql, (err, data1) => {
                              var sql = `SELECT * ,  DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                              db.query(sql, (err, data) => {
                                res.render("report_education_mdms.ejs", {
                                  userData: data1,
                                  userData1: data,
                                  userData33: data33,
                                  userData30: data30,
                                  userData34: data34,

                                  userData35: data35,
                                  userData36: data36,
                                  userData37: data37,
                                  userData38: data38,
                                  userData23: data23,
                                  userData24: data24,
                                  userData26: data26,
                                  userData20: data20,
                                  course: course,
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
          });
        });
      });
      break;

    case "Bond Form":
      var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}' `;
      db.query(sql, (err, data4) => {
        var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data2) => {
          var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
          db.query(sql, (err, data1) => {
            var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data) => {
              res.render("report_bond.ejs", {
                userData: data1,
                userData1: data,
                userData4: data4,
                userData2: data2,
                course: course,
              });
            });
          });
        });
      });
      break;
    case "Bond Form BSC":
      var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}' `;
      db.query(sql, (err, data4) => {
        var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data2) => {
          var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
          db.query(sql, (err, data1) => {
            var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data) => {
              res.render("report_bond_bsc.ejs", {
                userData: data1,
                userData1: data,
                userData4: data4,
                userData2: data2,
                course: course,
              });
            });
          });
        });
      });
      break;

    case "Relieving Letter":
      if (typeof rel_cand_id === "object") {
        var sql_admission = `SELECT *,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details where cand_id in ('${rel_cand_id.join(
          "','"
        )}')`;
        var sql_relieving = `SELECT *, DATE_FORMAT(date_of_relieving, '%d-%M-%Y') date_of_relieving from admintv_ems.cand_relieving_details where cand_id in ('${rel_cand_id.join(
          "','"
        )}')`;
        var sql_bank = `select * from admintv_ems.cand_bank_details where cand_id in('${rel_cand_id.join(
          "','"
        )}')`;
        var sql_profile = `select * from admintv_ems.cand_profile_details where cand_id in ('${rel_cand_id.join(
          "','"
        )}')`;
      } else {
        var sql_admission = `SELECT *,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details where cand_id in ('${rel_cand_id}')`;
        var sql_relieving = `SELECT *,  DATE_FORMAT(date_of_relieving, '%d-%M-%Y') date_of_relieving from admintv_ems.cand_relieving_details where cand_id in ('${rel_cand_id}')`;
        var sql_bank = `select * from admintv_ems.cand_bank_details where cand_id in('${rel_cand_id}') `;
        var sql_profile = `select * from admintv_ems.cand_profile_details where cand_id in ('${rel_cand_id}')`;
      }
      db.query(sql_admission, (err, data_admission) => {
        db.query(sql_relieving, (err, data_relieving) => {
          db.query(sql_bank, (err, data_bank) => {
            db.query(sql_profile, (err, data_profile) => {
              res.render("report_relieving.ejs", {
                userData: data_admission,
                userData1: data_profile,
                userData10: data_relieving,
                today: today,
                ref: ref,
                userData13: data_bank,
                indiDate: indiDate,
                indiDate1: indiDate1,
                rel_date: rel_date,
                objDate: objDate,
                course: course,
              });
            });
          });
        });
      });
      break;
    case "Bonofide Certificate":
      var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
      db.query(sql, (err, data17) => {
        var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
        db.query(sql, (err, data1) => {
          var sql = `SELECT *  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
          db.query(sql, (err, data) => {
            res.render("report_bonafide_certificate.ejs", {
              userData: data1,
              userData1: data,
              userData12: data17,
              bon_ref_no: bon_ref_no,
              bon_acad_year: bon_acad_year,
              bon_purse: bon_purse,
              bon_stud_year: bon_stud_year,
              bon_purpose: bon_purpose,
              bon_pur_others: bon_pur_others,
              today: todayy,
              course: course,
            });
          });
        });
      });
      break;
    case "Certificate Return Acknowledgment":
      var sql = "SELECT * FROM `ack_certificate`;";
      db.query(sql, function (err, data27) {
        var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Sign','Y') `;
        db.query(sql, (err, data18) => {
          var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}'`;
          var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data4) => {
            var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
            db.query(sql, (err, data2) => {
              var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
              db.query(sql, (err, data1) => {
                var sql = `SELECT *  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                db.query(sql, (err, data) => {
                  res.render("report_acknowledgement.ejs", {
                    userData: data1,
                    userData1: data,
                    userData2: data2,
                    userData3: data18,
                    userData4: data4,
                    userData27: data27,
                    userData13: "",

                    ack_date: ack_date,
                    course: course,
                  });
                });
              });
            });
          });
        });
      });
      break;
    case "Certificate Return Acknowledgment mdms":
      var sql = "SELECT * FROM `ack_certificate_mdms`;";
      db.query(sql, function (err, data28) {
        var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Sign','Y') `;
        db.query(sql, (err, data18) => {
          var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}'`;
          var sql = `SELECT * from admintv_ems.cand_surety_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data4) => {
            var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
            db.query(sql, (err, data2) => {
              var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
              db.query(sql, (err, data1) => {
                var sql = `SELECT *  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                db.query(sql, (err, data) => {
                  res.render("report_ack_mdms.ejs", {
                    userData: data1,
                    userData1: data,
                    userData2: data2,
                    userData3: data18,
                    userData4: data4,
                    userData27: data28,
                    userData13: "",

                    ack_date: ack_date,
                    course: course,
                  });
                });
              });
            });
          });
        });
      });
      break;

    case "University Form":
      var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
      db.query(sql, (err, data17) => {
        var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data12) => {
          var sql = `SELECT * from admintv_ems.cand_institute_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data9) => {
            var sql = `SELECT * from admintv_ems.cand_marks_details where cand_id ='${cand_id}' `;
            db.query(sql, (err, data8) => {
              var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
              db.query(sql, (err, data2) => {
                var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                db.query(sql, (err, data1) => {
                  var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                  db.query(sql, (err, data) => {
                    res.render("report_univ_form.ejs", {
                      userData: data1,
                      userData1: data,
                      userData2: data2,
                      userData4: data9,
                      userData5: data8,
                      userData8: data12,
                      userData12: data17,
                      course: course,
                    });
                  });
                });
              });
            });
          });
        });
      });
      break;
    case "University Form mdms":
      var sql = `SELECT * FROM admintv_ems.cand_academic_mdms INNER JOIN
                            admintv_ems.cand_academic_mdms_1 ON admintv_ems.cand_academic_mdms.cand_id= admintv_ems.cand_academic_mdms_1.cand_id
                            INNER JOIN
                              admintv_ems.cand_academic_mdms_2 ON admintv_ems.cand_academic_mdms.cand_id=  admintv_ems.cand_academic_mdms_2.cand_id
                            where admintv_ems.cand_academic_mdms.cand_id= '${cand_id}'`;
      db.query(sql, function (err, data33) {
        var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Community Certificate','Y')`;
        db.query(sql, (err, data25) => {
          var sql = `select * , DATE_FORMAT(date, '%d/%m/%Y') date from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Eligibility Certificate','Y')`;
          db.query(sql, (err, data24) => {
            var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
            db.query(sql, (err, data17) => {
              var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
              db.query(sql, (err, data12) => {
                var sql = `SELECT * from admintv_ems.cand_institute_details where cand_id ='${cand_id}' `;
                db.query(sql, (err, data9) => {
                  var sql = `SELECT * from admintv_ems.cand_marks_details where cand_id ='${cand_id}' `;
                  db.query(sql, (err, data8) => {
                    var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
                    db.query(sql, (err, data2) => {
                      var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                      db.query(sql, (err, data1) => {
                        var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                        db.query(sql, (err, data) => {
                          res.render("report_univ_form_mdms.ejs", {
                            userData: data1,
                            userData1: data,
                            userData2: data2,
                            userData4: data9,
                            userData5: data8,
                            userData8: data12,

                            userData24: data24,
                            userData25: data25,
                            userData12: data17,
                            userData33: data33,
                            course: course,
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
      break;
    case "University Form aissc":
      var sql = `SELECT * FROM admintv_ems.cand_academic_mdms INNER JOIN
                            admintv_ems.cand_academic_mdms_1 ON admintv_ems.cand_academic_mdms.cand_id= admintv_ems.cand_academic_mdms_1.cand_id
                            INNER JOIN
                              admintv_ems.cand_academic_mdms_2 ON admintv_ems.cand_academic_mdms.cand_id=  admintv_ems.cand_academic_mdms_2.cand_id
                            where admintv_ems.cand_academic_mdms.cand_id= '${cand_id}'`;
      db.query(sql, function (err, data33) {
        var sql = `select * from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Community Certificate','Y')`;
        db.query(sql, (err, data25) => {
          var sql = `select * , DATE_FORMAT(date, '%d/%m/%Y') date from admintv_ems.certificate_details where(cand_id,all_certificate,active_flag) =('${cand_id}','Eligibility Certificate','Y')`;
          db.query(sql, (err, data24) => {
            var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
            db.query(sql, (err, data17) => {
              var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
              db.query(sql, (err, data12) => {
                var sql = `SELECT * from admintv_ems.cand_institute_details where cand_id ='${cand_id}' `;
                db.query(sql, (err, data9) => {
                  var sql = `SELECT * from admintv_ems.cand_marks_details where cand_id ='${cand_id}' `;
                  db.query(sql, (err, data8) => {
                    var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
                    db.query(sql, (err, data2) => {
                      var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                      db.query(sql, (err, data1) => {
                        var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                        db.query(sql, (err, data) => {
                          res.render("report_univ_form_aissc.ejs", {
                            userData: data1,
                            userData1: data,
                            userData2: data2,
                            userData4: data9,
                            userData5: data8,
                            userData8: data12,

                            userData24: data24,
                            userData25: data25,
                            userData12: data17,
                            userData33: data33,
                            course: course,
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
      break;

    case "University Form BSC":
      var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
      db.query(sql, (err, data17) => {
        var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data12) => {
          var sql = `SELECT * from admintv_ems.cand_institute_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data9) => {
            var sql = `SELECT * from admintv_ems.cand_marks_details where cand_id ='${cand_id}' `;
            db.query(sql, (err, data8) => {
              var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
              db.query(sql, (err, data2) => {
                var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                db.query(sql, (err, data1) => {
                  var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                  db.query(sql, (err, data) => {
                    res.render("report_univ_form_bsc.ejs", {
                      userData: data1,
                      userData1: data,
                      userData2: data2,
                      userData4: data9,
                      userData5: data8,
                      userData8: data12,
                      userData12: data17,
                      course: course,
                    });
                  });
                });
              });
            });
          });
        });
      });
      break;
    case "Transfer Certificate":
      var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
      db.query(sql, (err, data17) => {
        var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
        db.query(sql, (err, data1) => {
          var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
          db.query(sql, (err, data) => {
            res.render("report_transfer.ejs", {
              userData: data1,
              userData1: data,
              // userData2: data2,
              userData12: data17,
              // userData13: "",
              tc_reldate: tc_reldate,
              tc_reas: tc_reas,
              tc_mark: tc_mark,
              tc_high: tc_high,
              course: course,
            });
          });
        });
      });
      break;
    case "Conduct Certificate":
      var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
      db.query(sql, (err, data1) => {
        var sql = `select * from admintv_ems.cand_admission_details where cand_id = '${cand_id}'`;
        db.query(sql, (err, data) => {
          res.render("report_conduct.ejs", {
            userData: data1,
            userData1: data,
            cond_csp: cond_csp,
            cond_cep: cond_cep,
            cond_mbbs: cond_mbbs,
            cond_tsp: cond_tsp,
            cond_tep: cond_tep,
            cond_char: cond_char,
            objDate: "",
            course: course,
          });
        });
      });
      break;
    case "Scholarship Register":
      var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
      db.query(sql, (err, data12) => {
        var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data2) => {
          var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
          db.query(sql, (err, data1) => {
            var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data) => {
              res.render("report_scholership.ejs", {
                userData: data1,
                userData1: data,
                userData2: data2,
                userData8: data12,
                course: course,
              });
            });
          });
        });
      });
      break;
    case "Bonofide Register":
      var sql = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
      db.query(sql, (err, data17) => {
        var sql = `SELECT * from admintv_ems.cand_contact_details where cand_id ='${cand_id}' `;
        db.query(sql, (err, data12) => {
          var sql = `SELECT * from admintv_ems.cand_address_details where cand_id ='${cand_id}' `;
          db.query(sql, (err, data2) => {
            var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details WHERE cand_id='${cand_id}'`;
            db.query(sql, (err, data1) => {
              var sql = `SELECT * , DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details WHERE cand_id='${cand_id}'`;
              db.query(sql, (err, data) => {
                res.render("report_bonafide_register.ejs", {
                  userData: data1,
                  userData1: data,
                  userData2: data2,
                  userData8: data12,
                  userData12: data17,
                  course: course,
                });
              });
            });
          });
        });
      });
      break;

    case "Enroll":
      if (typeof cand_id === "object") {
        var sql_admission = `SELECT * FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id.join(
          "','"
        )}')`;
      } else {
        var sql_admission = `SELECT *  FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id}')`;
      }
      db.query(sql_admission, (err, data_admission) => {
        return res.render(
          "report_enroll.ejs",
          {
            userData: data_admission,
            course: course,
          } //pending
        );
      });
      break;
    case "ID Card":
      if (typeof cand_id === "object") {
        var sql_admission = `SELECT *FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id.join(
          "','"
        )}')`;
        var sql_contact = `SELECT * from admintv_ems.cand_contact_details where cand_id in('${cand_id.join(
          "','"
        )}')`;
        var sql_profile = `SELECT *,DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM admintv_ems.cand_profile_details where cand_id in('${cand_id.join(
          "','"
        )}')`;
        var sql_address = `SELECT * from admintv_ems.cand_address_details where cand_id in ('${cand_id.join(
          "','"
        )}')`;

        var sql_photo = `SELECT * from admintv_ems.biometric_details where cand_id in('${cand_id.join(
          "','"
        )}') and (category,active_flag) =('Photo','Y') `;
        var sql_sign = `SELECT * from admintv_ems.biometric_details where cand_id in('${cand_id.join(
          "','"
        )}') and (category,active_flag) =('Sign','Y') `;
      } else {
        var sql_admission = `SELECT * ,  DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission FROM admintv_ems.cand_admission_details where cand_id in ('${cand_id}')`;
        var sql_contact = `SELECT * from admintv_ems.cand_contact_details where cand_id in('${cand_id}')`;
        var sql_profile = `SELECT *,DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth from admintv_ems.cand_profile_details where cand_id in('${cand_id}')`;
        var sql_address = `SELECT * from admintv_ems.cand_address_details where cand_id in('${cand_id}')`;
        var sql_photo = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
        var sql_sign = `SELECT * from admintv_ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Sign','Y') `;
      }
      db.query(sql_admission, (err, data_admission) => {
        db.query(sql_contact, (err, data_contact) => {
          db.query(sql_profile, (err, data_profile) => {
            db.query(sql_address, (err, data_address) => {
              db.query(sql_photo, (err, data_photo) => {
                db.query(sql_sign, (err, data_sign) => {
                  return res.render("report_idcard.ejs", {
                    userData: data_admission,
                    userData1: data_profile,
                    userData2: data_address,
                    userData8: data_contact,
                    userData12: data_photo,
                    userData13: data_sign,
                    course: course,
                  });
                });
              });
            });
          });
        });
      });

    case "Report":
      break;

    default:
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
        default:
          null;
          break;
      }
      break;
  }
};
