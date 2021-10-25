exports.select_mbbs = (req, res) => {
  // console.log(req.body.cand_id);
  var { cand_id } = req.body;
  // select
  var sql = `select certificate_type,certificate_files_name from admintv_ems.certificate_files where cand_id ='${cand_id}'`;
  db.query(sql, (err, data27) => {
    var sql = `SELECT * FROM admintv_ems.cand_fees where cand_id ='${cand_id}' `;
    db.query(sql, (err, data26) => {
      var sql15 = `SELECT * FROM admintv_ems.cand_neet_mark_details where cand_id ='${cand_id}'`;
      db.query(sql15, (err, data19) => {
        var sql14 = `SELECT * FROM admintv_ems.cand_marks_details where cand_id ='${cand_id}'`;
        db.query(sql14, (err, data18) => {
          var sql13 = `SELECT * FROM admintv_ems.cand_institute_details where cand_id ='${cand_id}'`;
          db.query(sql13, (err, data17) => {
            var sql11 = `select * from admintv_ems.cand_relieving_details where cand_id ='${cand_id}'`;
            db.query(sql11, (err, data16) => {
              var sql9 = `SELECT * FROM admintv_ems.certificate_details where cand_id ='${cand_id}'  AND active_flag ='Y'`;
              db.query(sql9, (err, data15) => {
                var sql8 = `SELECT * FROM admintv_ems.cand_contact_details where cand_id ='${cand_id}'`;
                db.query(sql8, (err, data14) => {
                  var sql7 = `SELECT * FROM admintv_ems.cand_bank_details where cand_id ='${cand_id}'`;
                  db.query(sql7, (err, data13) => {
                    var sql3 = `SELECT category,Filename FROM admintv_ems.biometric_details where cand_id ='${cand_id}' AND active_flag ='Y'`;
                    db.query(sql3, (err, data12) => {
                      var sql2 = `SELECT * FROM admintv_ems.cand_address_details where cand_id ='${cand_id}'`;
                      db.query(sql2, (err, data11) => {
                        var sql = `SELECT * FROM admintv_ems.cand_profile_details where cand_id ='${cand_id}'`;
                        db.query(sql, (err, data1) => {
                          var sql = `SELECT * FROM admintv_ems.cand_admission_details where (cand_id, active_status) =('${cand_id}','Yes')`;
                          db.query(sql, (err, data) => {
                            res.send({
                              admission: data,
                              profile: data1,
                              address: data11,
                              photos: data12,
                              bank: data13,
                              contact: data14,
                              certificate: data15,
                              relieving: data16,
                              institute: data17,
                              marks: data18,
                              neet: data19,
                              fees: data26,
                              certificate_files: data27,
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

exports.select_mdms = (req, res) => {
  var { cand_id } = req.body;
  var sql = `select file_name from admintv_ems.surety_mdms where surety_id = '${cand_id}'`;
  db.query(sql, (err, data28) => {
    var sql = `select certificate_type,certificate_files_name from certificate_files where cand_id = '${cand_id}'`;
    db.query(sql, (err, data27) => {
      var sql = `SELECT * FROM admintv_ems.cand_fees where cand_id in ('${cand_id}') `;
      db.query(sql, (err, data26) => {
        var sql18 = `SELECT * FROM admintv_ems.cand_institute_details_mdms where cand_id in ('${cand_id}')`;
        db.query(sql18, (err, data25) => {
          var sql17 = `SELECT * FROM admintv_ems.cand_academic_mdms_2 where cand_id in ('${cand_id}')`;
          db.query(sql17, (err, data24) => {
            var sql16 = `SELECT * FROM admintv_ems.cand_academic_mdms_1 where cand_id in ('${cand_id}')`;
            db.query(sql16, (err, data23) => {
              var sql15 = `SELECT * FROM admintv_ems.cand_academic_mdms where cand_id in ('${cand_id}')`;
              db.query(sql15, (err, data22) => {
                var sql14 = `SELECT * FROM admintv_ems.cand_neet_marks_mdms where cand_id in ('${cand_id}')`;
                db.query(sql14, (err, data21) => {
                  var sql12 = `SELECT * FROM admintv_ems.cand_surety_details where cand_id in ('${cand_id}')`;
                  db.query(sql12, (err, data20) => {
                    var sql11 = `select * from admintv_ems.cand_relieving_details where cand_id in ('${cand_id}')`;
                    db.query(sql11, (err, data16) => {
                      var sql9 = `SELECT * FROM admintv_ems.certificate_details where cand_id in ('${cand_id}')  AND active_flag ='Y'`;
                      db.query(sql9, (err, data15) => {
                        var sql8 = `SELECT * FROM admintv_ems.cand_contact_details where cand_id in ('${cand_id}')`;
                        db.query(sql8, (err, data14) => {
                          var sql7 = `SELECT * FROM admintv_ems.cand_bank_details where cand_id in ('${cand_id}')`;
                          db.query(sql7, (err, data13) => {
                            var sql3 = `SELECT category,Filename FROM admintv_ems.biometric_details where cand_id in ('${cand_id}') AND active_flag ='Y'`;
                            db.query(sql3, (err, data12) => {
                              var sql2 = `SELECT * FROM admintv_ems.cand_address_details where cand_id in ('${cand_id}')`;
                              db.query(sql2, (err, data11) => {
                                var sql = `SELECT * FROM admintv_ems.cand_profile_details where cand_id in ('${cand_id}')`;
                                db.query(sql, (err, data1) => {
                                  var sql = `SELECT * FROM admintv_ems.cand_admission_details where (cand_id, active_status) =('${cand_id}','Yes')`;
                                  db.query(sql, (err, data) => {
                                    res.send({
                                      admission: data,
                                      profile: data1,
                                      address: data11,
                                      photos: data12,
                                      bank: data13,
                                      contact: data14,
                                      certificate: data15,
                                      relieving: data16,
                                      surety: data20,
                                      neet: data21,
                                      mbbs_marks: data22,
                                      diploma_marks: data23,
                                      mdms_marks: data24,
                                      institute: data25,
                                      fees: data26,
                                      certificate_files: data27,
                                      surety_file: data28,
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

exports.select_bsc = (req, res) => {
  // console.log(req.body.cand_id);
  var { cand_id } = req.body;
  // select
  var sql = `select certificate_type,certificate_files_name from certificate_files where cand_id = '${cand_id}'`;
  db.query(sql, (err, data27) => {
    var sql = `SELECT * FROM admintv_ems.cand_fees where cand_id ='${cand_id}' `;
    db.query(sql, (err, data26) => {
      var sql15 = `SELECT * FROM admintv_ems.cand_neet_mark_details where cand_id ='${cand_id}'`;
      db.query(sql15, (err, data19) => {
        var sql14 = `SELECT * FROM admintv_ems.cand_marks_details where cand_id ='${cand_id}'`;
        db.query(sql14, (err, data18) => {
          var sql13 = `SELECT * FROM admintv_ems.cand_institute_details where cand_id ='${cand_id}'`;
          db.query(sql13, (err, data17) => {
            var sql11 = `select * from admintv_ems.cand_relieving_details where cand_id ='${cand_id}'`;
            db.query(sql11, (err, data16) => {
              var sql9 = `SELECT * FROM admintv_ems.certificate_details where cand_id ='${cand_id}'  AND active_flag ='Y'`;
              db.query(sql9, (err, data15) => {
                var sql8 = `SELECT * FROM admintv_ems.cand_contact_details where cand_id ='${cand_id}'`;
                db.query(sql8, (err, data14) => {
                  var sql7 = `SELECT * FROM admintv_ems.cand_bank_details where cand_id ='${cand_id}'`;
                  db.query(sql7, (err, data13) => {
                    var sql3 = `SELECT category,Filename FROM admintv_ems.biometric_details where cand_id ='${cand_id}' AND active_flag ='Y'`;
                    db.query(sql3, (err, data12) => {
                      var sql2 = `SELECT * FROM admintv_ems.cand_address_details where cand_id ='${cand_id}'`;
                      db.query(sql2, (err, data11) => {
                        var sql = `SELECT * FROM admintv_ems.cand_profile_details where cand_id ='${cand_id}'`;
                        db.query(sql, (err, data1) => {
                          var sql = `SELECT * FROM admintv_ems.cand_admission_details where (cand_id, active_status) =('${cand_id}','Yes')`;
                          db.query(sql, (err, data) => {
                            res.send({
                              admission: data,
                              profile: data1,
                              address: data11,
                              photos: data12,
                              bank: data13,
                              contact: data14,
                              certificate: data15,
                              relieving: data16,
                              institute: data17,
                              marks: data18,
                              neet: data19,
                              fees: data26,
                              certificate_files: data27,
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

exports.select_aissc = (req, res) => {
  var { cand_id } = req.body;
  var sql = `select file_name from admintv_ems.surety_aissc where surety_id = '${cand_id}'`;
  db.query(sql, (err, data28) => {
    var sql = `select certificate_type,certificate_files_name from certificate_files where cand_id = '${cand_id}'`;
    db.query(sql, (err, data27) => {
      var sql = `SELECT * FROM admintv_ems.cand_fees where cand_id in ('${cand_id}') `;
      db.query(sql, (err, data26) => {
        var sql18 = `SELECT * FROM admintv_ems.cand_institute_details_mdms where cand_id in ('${cand_id}')`;
        db.query(sql18, (err, data25) => {
          var sql17 = `SELECT * FROM admintv_ems.cand_academic_mdms_2 where cand_id in ('${cand_id}')`;
          db.query(sql17, (err, data24) => {
            var sql16 = `SELECT * FROM admintv_ems.cand_academic_mdms_1 where cand_id in ('${cand_id}')`;
            db.query(sql16, (err, data23) => {
              var sql15 = `SELECT * FROM admintv_ems.cand_academic_mdms where cand_id in ('${cand_id}')`;
              db.query(sql15, (err, data22) => {
                var sql14 = `SELECT * FROM admintv_ems.cand_neet_marks_mdms where cand_id in ('${cand_id}')`;
                db.query(sql14, (err, data21) => {
                  var sql12 = `SELECT * FROM admintv_ems.cand_surety_details where cand_id in ('${cand_id}')`;
                  db.query(sql12, (err, data20) => {
                    var sql11 = `select * from admintv_ems.cand_relieving_details where cand_id in ('${cand_id}')`;
                    db.query(sql11, (err, data16) => {
                      var sql9 = `SELECT * FROM admintv_ems.certificate_details where cand_id in ('${cand_id}')  AND active_flag ='Y'`;
                      db.query(sql9, (err, data15) => {
                        var sql8 = `SELECT * FROM admintv_ems.cand_contact_details where cand_id in ('${cand_id}')`;
                        db.query(sql8, (err, data14) => {
                          var sql7 = `SELECT * FROM admintv_ems.cand_bank_details where cand_id in ('${cand_id}')`;
                          db.query(sql7, (err, data13) => {
                            var sql3 = `SELECT category,Filename FROM admintv_ems.biometric_details where cand_id in ('${cand_id}') AND active_flag ='Y'`;
                            db.query(sql3, (err, data12) => {
                              var sql2 = `SELECT * FROM admintv_ems.cand_address_details where cand_id in ('${cand_id}')`;
                              db.query(sql2, (err, data11) => {
                                var sql = `SELECT * FROM admintv_ems.cand_profile_details where cand_id in ('${cand_id}')`;
                                db.query(sql, (err, data1) => {
                                  var sql = `SELECT * FROM admintv_ems.cand_admission_details where (cand_id, active_status) =('${cand_id}','Yes')`;
                                  db.query(sql, (err, data) => {
                                    res.send({
                                      admission: data,
                                      profile: data1,
                                      address: data11,
                                      photos: data12,
                                      bank: data13,
                                      contact: data14,
                                      certificate: data15,
                                      relieving: data16,
                                      surety: data20,
                                      neet: data21,
                                      mbbs_marks: data22,
                                      diploma_marks: data23,
                                      mdms_marks: data24,
                                      institute: data25,
                                      fees: data26,
                                      certificate_files: data27,
                                      surety_file: data28,
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

exports.select_nursing = (req, res) => {
  // console.log(req.body.cand_id);
  var { cand_id } = req.body;
  // select
  var sql = `select certificate_type,certificate_files_name from certificate_files where cand_id = '${cand_id}'`;
  db.query(sql, (err, data27) => {
    var sql = `SELECT * FROM admintv_ems.cand_fees where cand_id ='${cand_id}' `;
    db.query(sql, (err, data26) => {
      var sql15 = `SELECT * FROM admintv_ems.cand_neet_mark_details where cand_id ='${cand_id}'`;
      db.query(sql15, (err, data19) => {
        var sql14 = `SELECT * FROM admintv_ems.cand_marks_details where cand_id ='${cand_id}'`;
        db.query(sql14, (err, data18) => {
          var sql13 = `SELECT * FROM admintv_ems.cand_institute_details where cand_id ='${cand_id}'`;
          db.query(sql13, (err, data17) => {
            var sql11 = `select * from admintv_ems.cand_relieving_details where cand_id ='${cand_id}'`;
            db.query(sql11, (err, data16) => {
              var sql9 = `SELECT * FROM admintv_ems.certificate_details where cand_id ='${cand_id}'  AND active_flag ='Y'`;
              db.query(sql9, (err, data15) => {
                var sql8 = `SELECT * FROM admintv_ems.cand_contact_details where cand_id ='${cand_id}'`;
                db.query(sql8, (err, data14) => {
                  var sql7 = `SELECT * FROM admintv_ems.cand_bank_details where cand_id ='${cand_id}'`;
                  db.query(sql7, (err, data13) => {
                    var sql3 = `SELECT category,Filename FROM admintv_ems.biometric_details where cand_id ='${cand_id}' AND active_flag ='Y'`;
                    db.query(sql3, (err, data12) => {
                      var sql2 = `SELECT * FROM admintv_ems.cand_address_details where cand_id ='${cand_id}'`;
                      db.query(sql2, (err, data11) => {
                        var sql = `SELECT * FROM admintv_ems.cand_profile_details where cand_id ='${cand_id}'`;
                        db.query(sql, (err, data1) => {
                          var sql = `SELECT * FROM admintv_ems.cand_admission_details where (cand_id, active_status) =('${cand_id}','Yes')`;
                          db.query(sql, (err, data) => {
                            res.send({
                              admission: data,
                              profile: data1,
                              address: data11,
                              photos: data12,
                              bank: data13,
                              contact: data14,
                              certificate: data15,
                              relieving: data16,
                              institute: data17,
                              marks: data18,
                              neet: data19,
                              fees: data26,
                              certificate_files: data27,
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

exports.verify = (req, res) => {
  var { cand_id } = req.body;

  var verified = "Yes";
  var sql = `update admintv_ems.cand_admission_details set verified = '${verified}' where cand_id = '${cand_id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send("Verified Successfully..!");
  });
};
