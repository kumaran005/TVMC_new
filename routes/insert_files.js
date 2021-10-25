exports.initial_files = (cand_id, name, last_modified_time) => {
  var pcategory = "Photo";
  var scategory = "Sign";
  var tcategory = "Thumb";
  var active_flag = "Y";

  var photo_file = `INSERT INTO admintv_ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${pcategory}','${active_flag}','${last_modified_time}')`;
  db.query(photo_file, (err, data) => {
    var sign_file = `INSERT INTO admintv_ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${scategory}','${active_flag}','${last_modified_time}')`;
    db.query(sign_file, (err, data) => {
      var thumb_file = `INSERT INTO admintv_ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${tcategory}','${active_flag}','${last_modified_time}')`;
      db.query(thumb_file, (err, data) => {
        var aadhar_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','aadhar','${last_modified_time}')`;
        db.query(aadhar_file, (err, data) => {
          var passbook_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','passbook','${last_modified_time}')`;
          db.query(passbook_file, (err, data) => {
            var challan_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','challan','${last_modified_time}')`;
            db.query(challan_file, (err, data) => {
              var sq_challan_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','sq_challan','${last_modified_time}')`;
              db.query(sq_challan_file, (err, data) => {
                var community_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','community','${last_modified_time}')`;
                db.query(community_file, (err, data) => {
                  var transfer_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','transfer','${last_modified_time}')`;
                  db.query(transfer_file, (err, data) => {
                    var conduct_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','conduct','${last_modified_time}')`;
                    db.query(conduct_file, (err, data) => {
                      var eligibility_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','eligibility','${last_modified_time}')`;
                      db.query(eligibility_file, (err, data) => {
                        var migration_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','migration','${last_modified_time}')`;
                        db.query(migration_file, (err, data) => {
                          var neet_hall_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','neet_hall_ticket','${last_modified_time}')`;
                          db.query(neet_hall_file, (err, data) => {
                            var neet_score_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','neet_score_card','${last_modified_time}')`;
                            db.query(neet_score_file, (err, data) => {
                              var ten_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','ten_mark','${last_modified_time}')`;
                              db.query(ten_mark_file, (err, data) => {
                                var ten_pass_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','ten_pass','${last_modified_time}')`;
                                db.query(ten_pass_file, (err, data) => {
                                  var twelve_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','twelve_mark','${last_modified_time}')`;
                                  db.query(twelve_mark_file, (err, data) => {
                                    var twelve_pass_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','twelve_pass','${last_modified_time}')`;
                                    db.query(twelve_pass_file, (err, data) => {
                                      var pan_card_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','pan_card','${last_modified_time}')`;
                                      db.query(pan_card_file, (err, data) => {
                                        var passport_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','passport','${last_modified_time}')`;
                                        db.query(passport_file, (err, data) => {
                                          var visa_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','visa','${last_modified_time}')`;
                                          db.query(visa_file, (err, data) => {
                                            var nativity_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','nativity','${last_modified_time}')`;
                                            db.query(
                                              nativity_file,
                                              (err, data) => {
                                                var cf_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','Certificate_Form','${last_modified_time}')`;
                                                db.query(
                                                  cf_file,
                                                  (err, data) => {
                                                    var acf_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','Admission_Commitee_Form','${last_modified_time}')`;
                                                    db.query(
                                                      acf_file,
                                                      (err, data) => {}
                                                    );
                                                  }
                                                );
                                              }
                                            );
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
              });
            });
          });
        });
      });
    });
  });
};
exports.initial_files_ = (cand_id, name, last_modified_time) => {
  var pcategory = "Photo";
  var scategory = "Sign";
  var tcategory = "Thumb";
  var active_flag = "Y";

  var photo_file = `INSERT INTO admintv_ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${pcategory}','${active_flag}','${last_modified_time}')`;
  db.query(photo_file, (err, data) => {
    var sign_file = `INSERT INTO admintv_ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${scategory}','${active_flag}','${last_modified_time}')`;
    db.query(sign_file, (err, data) => {
      var thumb_file = `INSERT INTO admintv_ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${tcategory}','${active_flag}','${last_modified_time}')`;
      db.query(thumb_file, (err, data) => {
        var aadhar_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','aadhar','${last_modified_time}')`;
        db.query(aadhar_file, (err, data) => {
          var passbook_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','passbook','${last_modified_time}')`;
          db.query(passbook_file, (err, data) => {
            var challan_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','challan','${last_modified_time}')`;
            db.query(challan_file, (err, data) => {
              var sq_challan_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','sq_challan','${last_modified_time}')`;
              db.query(sq_challan_file, (err, data) => {
                var community_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','community','${last_modified_time}')`;
                db.query(community_file, (err, data) => {
                  var eligibility_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','eligibility','${last_modified_time}')`;
                  db.query(eligibility_file, (err, data) => {
                    var migration_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','migration','${last_modified_time}')`;
                    db.query(migration_file, (err, data) => {
                      var allotment_order_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','allotment_order','${last_modified_time}')`;
                      db.query(allotment_order_file, (err, data) => {
                        var neet_admit_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','neet_admit_card','${last_modified_time}')`;
                        db.query(neet_admit_file, (err, data) => {
                          var neet_score_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','neet_score_card','${last_modified_time}')`;
                          db.query(neet_score_file, (err, data) => {
                            var ten_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','ten_mark','${last_modified_time}')`;
                            db.query(ten_mark_file, (err, data) => {
                              var ten_pass_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','ten_pass','${last_modified_time}')`;
                              db.query(ten_pass_file, (err, data) => {
                                var twelve_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','twelve_mark','${last_modified_time}')`;
                                db.query(twelve_mark_file, (err, data) => {
                                  var twelve_pass_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','twelve_pass','${last_modified_time}')`;
                                  db.query(twelve_pass_file, (err, data) => {
                                    var mbbs_first_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_first_mark','${last_modified_time}')`;
                                    db.query(
                                      mbbs_first_mark_file,
                                      (err, data) => {
                                        var mbbs_second_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_second_mark','${last_modified_time}')`;
                                        db.query(
                                          mbbs_second_mark_file,
                                          (err, data) => {
                                            var mbbs_third_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_third_mark','${last_modified_time}')`;
                                            db.query(
                                              mbbs_third_mark_file,
                                              (err, data) => {
                                                var mbbs_fourth_mark_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_fourth_mark','${last_modified_time}')`;
                                                db.query(
                                                  mbbs_fourth_mark_file,
                                                  (err, data) => {
                                                    var mbbs_crri_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_crri','${last_modified_time}')`;
                                                    db.query(
                                                      mbbs_crri_file,
                                                      (err, data) => {
                                                        var mbbs_degree_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_degree','${last_modified_time}')`;
                                                        db.query(
                                                          mbbs_degree_file,
                                                          (err, data) => {
                                                            var mbbs_pro_one_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_pro_one','${last_modified_time}')`;
                                                            db.query(
                                                              mbbs_pro_one_file,
                                                              (err, data) => {
                                                                var mbbs_pro_two_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_pro_two','${last_modified_time}')`;
                                                                db.query(
                                                                  mbbs_pro_two_file,
                                                                  (
                                                                    err,
                                                                    data
                                                                  ) => {
                                                                    var mbbs_register_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_register','${last_modified_time}')`;
                                                                    db.query(
                                                                      mbbs_register_file,
                                                                      (
                                                                        err,
                                                                        data
                                                                      ) => {
                                                                        var mbbs_attempt_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_attempt','${last_modified_time}')`;
                                                                        db.query(
                                                                          mbbs_attempt_file,
                                                                          (
                                                                            err,
                                                                            data
                                                                          ) => {
                                                                            var mbbs_course_cum_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_course_cum','${last_modified_time}')`;
                                                                            db.query(
                                                                              mbbs_course_cum_file,
                                                                              (
                                                                                err,
                                                                                data
                                                                              ) => {
                                                                                var mbbs_transfer_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','mbbs_transfer','${last_modified_time}')`;
                                                                                db.query(
                                                                                  mbbs_transfer_file,
                                                                                  (
                                                                                    err,
                                                                                    data
                                                                                  ) => {
                                                                                    var diploma_degree_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','diploma_degree','${last_modified_time}')`;
                                                                                    db.query(
                                                                                      diploma_degree_file,
                                                                                      (
                                                                                        err,
                                                                                        data
                                                                                      ) => {
                                                                                        var diploma_pro_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','diploma_pro','${last_modified_time}')`;
                                                                                        db.query(
                                                                                          diploma_pro_file,
                                                                                          (
                                                                                            err,
                                                                                            data
                                                                                          ) => {
                                                                                            var diploma_register_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','diploma_register','${last_modified_time}')`;
                                                                                            db.query(
                                                                                              diploma_register_file,
                                                                                              (
                                                                                                err,
                                                                                                data
                                                                                              ) => {
                                                                                                var diploma_course_cum_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','diploma_course_cum','${last_modified_time}')`;
                                                                                                db.query(
                                                                                                  diploma_course_cum_file,
                                                                                                  (
                                                                                                    err,
                                                                                                    data
                                                                                                  ) => {
                                                                                                    var screening_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','screening_test','${last_modified_time}')`;
                                                                                                    db.query(
                                                                                                      screening_file,
                                                                                                      (
                                                                                                        err,
                                                                                                        data
                                                                                                      ) => {
                                                                                                        var cf_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','Certificate_Form','${last_modified_time}')`;
                                                                                                        db.query(
                                                                                                          cf_file,
                                                                                                          (
                                                                                                            err,
                                                                                                            data
                                                                                                          ) => {
                                                                                                            var acf_file = `INSERT INTO admintv_ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','Admission_Commitee_Form','${last_modified_time}')`;
                                                                                                            db.query(
                                                                                                              acf_file,
                                                                                                              (
                                                                                                                err,
                                                                                                                data
                                                                                                              ) => {
                                                                                                                var surety = `insert into admintv_ems.surety_mdms (surety_id,last_modified_time)values('${cand_id}','${last_modified_time}')`;
                                                                                                                db.query(
                                                                                                                  surety,
                                                                                                                  (
                                                                                                                    err,
                                                                                                                    data
                                                                                                                  ) => {}
                                                                                                                );
                                                                                                              }
                                                                                                            );
                                                                                                          }
                                                                                                        );
                                                                                                      }
                                                                                                    );
                                                                                                  }
                                                                                                );
                                                                                              }
                                                                                            );
                                                                                          }
                                                                                        );
                                                                                      }
                                                                                    );
                                                                                  }
                                                                                );
                                                                              }
                                                                            );
                                                                          }
                                                                        );
                                                                      }
                                                                    );
                                                                  }
                                                                );
                                                              }
                                                            );
                                                          }
                                                        );
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
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
      });
    });
  });
};

exports.student_home_files = (req, res) => {
  // console.log(req.body);
  var { cand_id } = req.body;
  var home_files = req.files;

  var dt = new Date();
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

  for (i in home_files) {
    home_files[i].fieldname.includes("n_cand_photo")
      ? db.query(
          `update admintv_ems.biometric_details set Filename = '${home_files[
            i
          ].buffer.toString(
            "base64"
          )}',last_modified_time = '${last_modified_time}' where cand_id = '${cand_id}' and category = 'Photo'`,
          (err, data) => {
            if (err) console.error(err);
            console.log(data);
          }
        )
      : null;
    home_files[i].fieldname.includes("n_cand_sign")
      ? db.query(
          `update admintv_ems.biometric_details set Filename = '${home_files[
            i
          ].buffer.toString(
            "base64"
          )}',last_modified_time = '${last_modified_time}' where cand_id = '${cand_id}' and category = 'Sign'`
        )
      : null;
    home_files[i].fieldname.includes("n_cand_thumb")
      ? db.query(
          `update admintv_ems.biometric_details set Filename = '${home_files[
            i
          ].buffer.toString(
            "base64"
          )}',last_modified_time = '${last_modified_time}' where cand_id = '${cand_id}' and category = 'Thumb'`
        )
      : null;

    home_files[i].fieldname.includes("aadhar")
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${home_files[
            i
          ].buffer.toString("base64")}', certificate_files_name='${
            home_files[i].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','aadhar')`
        )
      : null;

    // home_files[i].fieldname.includes("aadhar")
    //   ? db.query(
    //       `update admintv_ems.fees_file set fee_pdf = '${home_files[i].buffer.toString(
    //         "base64"
    //       )}', file_name='${
    //         home_files[i].originalname
    //       }' where (idfees_file) = ('2')`
    //     )
    //   : null;
  }
  res.send({ cand_id: cand_id });
};

exports.student_bank_files = (req, res) => {
  var { cand_id } = req.body;
  var bank_files = req.files;
  // console.log(bank_files);

  var dt = new Date();
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

  for (i in bank_files) {
    bank_files[i].fieldname.includes("challan")
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${bank_files[
            i
          ].buffer.toString("base64")}', certificate_files_name='${
            bank_files[i].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','challan')`
        )
      : null;
    bank_files[i].fieldname.includes("sq_challan")
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${bank_files[
            i
          ].buffer.toString("base64")}', certificate_files_name='${
            bank_files[i].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','sq_challan')`
        )
      : null;
    bank_files[i].fieldname.includes("passbook")
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${bank_files[
            i
          ].buffer.toString("base64")}', certificate_files_name='${
            bank_files[i].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','passbook')`
        )
      : null;
  }
  res.send({ cand_id: cand_id });
};

// surety
exports.surety_mdms = (req, res) => {
  var dt = new Date();
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

  var { cand_id, name } = req.body;
  var docs = req.files;

  for (i in docs) {
    docs[i].fieldname.includes("surety")
      ? db.query(
          `update admintv_ems.surety_mdms set surety_File ='${docs[
            i
          ].buffer.toString("base64")}',file_name = '${
            docs[i].originalname
          }',last_modified_time = '${last_modified_time}' where surety_id = '${cand_id}'`,
          (err, data) => {
            if (err) {
              console.log(err);
              console.log(data);
            }
          }
        )
      : null;
  }
  res.send({ cand_id: cand_id });
};
// docs_files
exports.docs_file_1 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_2 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};

exports.docs_file_3 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};

exports.docs_file_4 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};

exports.docs_file_5 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};

exports.docs_file_6 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_7 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_8 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_9 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_10 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_11 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_12 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_13 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_14 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_15 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_16 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_17 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_18 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_19 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_20 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_21 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_22 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_23 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_24 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_25 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_26 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_27 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_28 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
exports.docs_file_29 = (req, res) => {
  var dt = new Date();
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
  console.log(req.body);
  console.log(req.files);

  var { cand_id, name } = req.body;
  var docs = req.files;

  if (docs[0]) {
    docs[0].fieldname.includes(name)
      ? db.query(
          `update admintv_ems.certificate_files set certificate_files = '${docs[0].buffer.toString(
            "base64"
          )}', certificate_files_name='${
            docs[0].originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','${name}')`,
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
            res.send({ cand_id: cand_id });
          }
        )
      : res.send({ cand_id: cand_id });
  } else {
    res.send({ cand_id: cand_id });
  }
};
