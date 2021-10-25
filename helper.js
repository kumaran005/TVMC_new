const mysql = require("mysql");
const fs = require("fs");

const db_old = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "educollege",
});
const db_new = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ems",
});
var j = 0;
var arr = []; /*
//educollege.studentadmission
// var studentadmission = `select * from educollege.studentadmission`;
// db_old.query(studentadmission, (err, data) => {
//admission_details
/*
  for (i in data) {
    var sql =
      "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`active_status`) VALUES ('" +
      data[i].AdmissionId +
      "','" +
      data[i].CandidateName +
      "','" +
      data[i].Rank +
      "','" +
      data[i].NeetNo +
      "','" +
      data[i].ARNo +
      "','" +
      data[i].TotalMarksObtained +
      "','" +
      data[i].NeetMark +
      "','" +
      data[i].RegistrationNo +
      "','" +
      data[i].NeetRollNo +
      "','" +
      data[i].CourseId +
      "','" +
      data[i].AdmissionTypeId +
      "','" +
      data[i].AdmissionQuotaId +
      "','" +
      data[i].DateOfCommencementOfCourse +
      "','" +
      data[i].DateOfAdmission +
      "','" +
      data[i].DateOfAllotment +
      "','" +
      data[i].SelectedCategoryId +
      "','" +
      data[i].WillingnessForCouncilingId +
      "','Yes')";

    // db_new.query(sql, () => {
    //   console.log("admission:", j);
    //   j++;
    // });
    // admission_type
    
    var sql = `update ems.cand_admission_details set admission_type = 'Regular Admission' where(admission_type='1') `;
    db_new.query(sql, () => {
      var sql = `update ems.cand_admission_details set admission_type = 'Court Case' where(admission_type='2') `;
      db_new.query(sql, () => {
        var sql = `update ems.cand_admission_details set admission_type = 'Lateral Entry' where(admission_type='3') `;
        db_new.query(sql, () => {
          var sql = `update ems.cand_admission_details set admission_type = 'Same Diploma' where(admission_type='4') `;
          db_new.query(sql, () => {
            // admission_quota
            var sql = `update ems.cand_admission_details set admission_quota = 'State Quota' where(admission_quota = '1')`;
            db_new.query(sql, () => {
              var sql = `update ems.cand_admission_details set admission_quota = 'All India' where(admission_quota = '2')`;
              db_new.query(sql, () => {
                var sql = `update ems.cand_admission_details set admission_quota = 'Management' where(admission_quota = '3')`;
                db_new.query(sql, () => {
                  var sql = `update ems.cand_admission_details set admission_quota = 'State Govt.Elapsed' where(admission_quota = '4')`;
                  db_new.query(sql, () => {
                    var sql = `update ems.cand_admission_details set admission_quota = 'Management NRI' where(admission_quota = '5')`;
                    db_new.query(sql, () => {
                      var sql = `update ems.cand_admission_details set admission_quota = 'University' where(admission_quota = '6')`;
                      db_new.query(sql, () => {
                        // selected_category
                        var sql = `update ems.cand_admission_details set selected_category = 'Scheduled Castes' where (selected_category = '1')`;
                        db_new.query(sql, () => {
                          var sql = `update ems.cand_admission_details set selected_category = 'Scheduled Tribes' where (selected_category = '2')`;
                          db_new.query(sql, () => {
                            var sql = `update ems.cand_admission_details set selected_category = 'Most Backward Classes' where (selected_category = '3')`;
                            db_new.query(sql, () => {
                              var sql = `update ems.cand_admission_details set selected_category = 'Denotified Communities' where (selected_category = '4')`;
                              db_new.query(sql, () => {
                                var sql = `update ems.cand_admission_details set selected_category = 'Backward Classes' where (selected_category = '5')`;
                                db_new.query(sql, () => {
                                  var sql = `update ems.cand_admission_details set selected_category = 'Backward Classes Muslims' where (selected_category = '6')`;
                                  db_new.query(sql, () => {
                                    var sql = `update ems.cand_admission_details set selected_category = 'Scheduled Castes(PC)' where (selected_category = '7')`;
                                    db_new.query(sql, () => {
                                      var sql = `update ems.cand_admission_details set selected_category = 'Scheduled Castes Arundhathiar' where (selected_category = '8')`;
                                      db_new.query(sql, () => {
                                        var sql = `update ems.cand_admission_details set selected_category = 'Scheduled Castes Arundhathiar(PC)' where (selected_category = '9')`;
                                        db_new.query(sql, () => {
                                          var sql = `update ems.cand_admission_details set selected_category = 'Scheduled Tribes(PC)' where (selected_category = '10')`;
                                          db_new.query(sql, () => {
                                            var sql = `update ems.cand_admission_details set selected_category = 'Most Backward Classes(PC)' where (selected_category = '11')`;
                                            db_new.query(sql, () => {
                                              var sql = `update ems.cand_admission_details set selected_category = 'Denotified Communities(PC)' where (selected_category = '12')`;
                                              db_new.query(sql, () => {
                                                var sql = `update ems.cand_admission_details set selected_category = 'Backward Classes(PC)' where (selected_category = '13')`;
                                                db_new.query(sql, () => {
                                                  var sql = `update ems.cand_admission_details set selected_category = 'Backward Classes Muslims(PC)' where (selected_category = '14')`;
                                                  db_new.query(sql, () => {
                                                    var sql = `update ems.cand_admission_details set selected_category = 'Other Backward Classes' where (selected_category = '15')`;
                                                    db_new.query(sql, () => {
                                                      var sql = `update ems.cand_admission_details set selected_category = 'Other Backward Classes(PC)' where (selected_category = '16')`;
                                                      db_new.query(sql, () => {
                                                        var sql = `update ems.cand_admission_details set selected_category = 'Others' where (selected_category = '17')`;
                                                        db_new.query(
                                                          sql,
                                                          () => {
                                                            var sql = `update ems.cand_admission_details set selected_category = 'Others(PC)' where (selected_category = '18')`;
                                                            db_new.query(
                                                              sql,
                                                              () => {
                                                                var sql = `update ems.cand_admission_details set willing_for_counciling ='No' where (willing_for_counciling='0')`;
                                                                db_new.query(
                                                                  sql,
                                                                  () => {
                                                                    var sql = `update ems.cand_admission_details set willing_for_counciling ='Yes' where(willing_for_counciling='1')`;
                                                                    db_new.query(
                                                                      sql
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
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  // profile details
  data.forEach((element) => {
    var sql =
      "insert into ems.cand_profile_details (cand_id, name, initial, initial_expansion, type_of_allotment, father_name, mother_name,date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood,academic_year, student_code) values ('" +
      element.AdmissionId +
      "','" +
      element.CandidateName +
      "','" +
      element.Initial +
      "', '" +
      element.InitialExpansion +
      "','" +
      element.TypeOfAllotment +
      "','" +
      element.FatherName +
      "','" +
      element.MotherName +
      "','" +
      element.DateOfBirth +
      "','" +
      element.GenderId +
      "','" +
      element.BloodGroupId +
      "','" +
      element.ReligionId +
      "','" +
      element.CommunityId +
      "','" +
      element.Caste +
      "','" +
      element.NationalityId +
      "','" +
      element.WillingToDonateBloodId +
      "','" +
      element.AcademicYear +
      "','" +
      element.StudentCode +
      "')";
    // db_new.query(sql);
  });
//   // willing to donate blood
//   update ems.cand_profile_details set willing_to_donate_blood = 'Yes' where willing_to_donate_blood = '1';
// update ems.cand_profile_details set willing_to_donate_blood = 'No' where willing_to_donate_blood = '0';
//   // religion
//   update ems.cand_profile_details set religion = 'Hindu' where religion ='1';
// update ems.cand_profile_details set religion = 'Christian' where religion ='2';
  //type_of_allotment
  var sql = `update ems.cand_profile_details set type_of_allotment = '' where (type_of_allotment ='null')`;
  db_new.query(sql, () => {
    var sql = `update ems.cand_profile_details set type_of_allotment = 'Service' where(type_of_allotment='1')`;
    db_new.query(sql, () => {
      var sql = `update ems.cand_profile_details set type_of_allotment = 'Non-Service' where(type_of_allotment='2')`;
      db_new.query(sql, () => {
        // gender
        var sql = `update ems.cand_profile_details set gender = 'Male' where (gender = '0')`;
        db_new.query(sql, () => {
          var sql = `update ems.cand_profile_details set gender ='Female' where(gender = '1')`;
          db_new.query(sql, () => {
            // blood_group
            var sql = `update ems.cand_profile_details set blood_group = 'O+' where(blood_group='1')`;
            db_new.query(sql, () => {
              var sql = `update ems.cand_profile_details set blood_group = 'A+' where(blood_group='2')`;
              db_new.query(sql, () => {
                var sql = `update ems.cand_profile_details set blood_group = 'B+' where(blood_group='3')`;
                db_new.query(sql, () => {
                  var sql = `update ems.cand_profile_details set blood_group = 'AB+' where(blood_group='4')`;
                  db_new.query(sql, () => {
                    var sql = `update ems.cand_profile_details set blood_group = 'O-' where(blood_group='5')`;
                    db_new.query(sql, () => {
                      var sql = `update ems.cand_profile_details set blood_group = 'A-' where(blood_group='6')`;
                      db_new.query(sql, () => {
                        var sql = `update ems.cand_profile_details set blood_group = 'B-' where(blood_group='7')`;
                        db_new.query(sql, () => {
                          var sql = `update ems.cand_profile_details set blood_group = 'AB-' where(blood_group='8')`;
                          db_new.query(sql, () => {
                            // cummunity
                            var sql = `update ems.cand_profile_details set community = 'Scheduled Castes' where (community = '1')`;
                            db_new.query(sql, () => {
                              var sql = `update ems.cand_profile_details set community = 'Scheduled Tribes' where (community = '2')`;
                              db_new.query(sql, () => {
                                var sql = `update ems.cand_profile_details set community = 'Most Backward Classes' where (community = '3')`;
                                db_new.query(sql, () => {
                                  var sql = `update ems.cand_profile_details set community = 'Denotified Communities' where (community = '4')`;
                                  db_new.query(sql, () => {
                                    var sql = `update ems.cand_profile_details set community = 'Backward Classes' where (community = '5')`;
                                    db_new.query(sql, () => {
                                      var sql = `update ems.cand_profile_details set community = 'Backward Classes Muslims' where (community = '6')`;
                                      db_new.query(sql, () => {
                                        var sql = `update ems.cand_profile_details set community = 'Scheduled Castes(PC)' where (community = '7')`;
                                        db_new.query(sql, () => {
                                          var sql = `update ems.cand_profile_details set community = 'Scheduled Castes Arundhathiar' where (community = '8')`;
                                          db_new.query(sql, () => {
                                            var sql = `update ems.cand_profile_details set community = 'Scheduled Castes Arundhathiar(PC)' where (community = '9')`;
                                            db_new.query(sql, () => {
                                              var sql = `update ems.cand_profile_details set community = 'Scheduled Tribes(PC)' where (community = '10')`;
                                              db_new.query(sql, () => {
                                                var sql = `update ems.cand_profile_details set community = 'Most Backward Classes(PC)' where (community = '11')`;
                                                db_new.query(sql, () => {
                                                  var sql = `update ems.cand_profile_details set community = 'Denotified Communities(PC)' where (community = '12')`;
                                                  db_new.query(sql, () => {
                                                    var sql = `update ems.cand_profile_details set community = 'Backward Classes(PC)' where (community = '13')`;
                                                    db_new.query(sql, () => {
                                                      var sql = `update ems.cand_profile_details set community = 'Backward Classes Muslims(PC)' where (community = '14')`;
                                                      db_new.query(sql, () => {
                                                        var sql = `update ems.cand_profile_details set community = 'Other Backward Classes' where (community = '15')`;
                                                        db_new.query(
                                                          sql,
                                                          () => {
                                                            var sql = `update ems.cand_profile_details set community = 'Other Backward Classes(PC)' where (community = '16')`;
                                                            db_new.query(
                                                              sql,
                                                              () => {
                                                                var sql = `update ems.cand_profile_details set community = 'Others' where (community = '17')`;
                                                                db_new.query(
                                                                  sql,
                                                                  () => {
                                                                    var sql = `update ems.cand_profile_details set community = 'Others(PC)' where (community = '18')`;
                                                                    db_new.query(
                                                                      sql,
                                                                      () => {
                                                                        // nationality
                                                                        var sql = `update ems.cand_profile_details set nationality = 'Indian' where(nationality='0')`;
                                                                        db_new.query(
                                                                          sql
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
*/
// address_details
// data.forEach((element) => {
//   var sql =
//     "insert into ems.cand_address_details (cand_id, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district) values ('" +
//     element.AdmissionId +
//     "','" +
//     element.PresAddress.replace("'", " ") +
//     "','" +
//     element.PresPincode +
//     "','" +
//     element.PresStateId +
//     "','" +
//     element.PresDistrict +
//     "','" +
//     element.PermAddress.replace("'", " ") +
//     "','" +
//     element.PermPincode +
//     "','" +
//     element.PermStateId +
//     "','" +
//     element.PermDistrict +
//     "')";
//   db_new.query(sql, (err) => arr.push(err));
// });console.log(arr)})

/*
  // relieved_details
  data.forEach((element) => {
    var sql =
      "insert into ems.cand_relieving_details (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name)values('" +
      element.AdmissionId +
      "','" +
      element.RelievedId +
      "','" +
      element.AmountRefunded +
      "','" +
      element.DateOfRelieving +
      "','" +
      element.DateOfReallotment +
      "','" +
      element.CollegeTransferTo +
      "')";
    // db_new.query(sql, () => {
    //   var sql = `update ems.cand_relieving_details set relieved ='No' where(relieved ='0')`;
    //   db_new.query(sql, () => {
    //     var sql = `update ems.cand_relieving_details set relieved ='Yes' where(relieved='1')`;
    //     db_new.query(sql, console.log());
    // });
    // });
  });

  // contact  details
  data.forEach((element) => {
    var sql =
      "insert into ems.cand_contact_details(cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks)values('" +
      element.AdmissionId +
      "','" +
      element.PhoneNo +
      "','" +
      element.MobileNo +
      "','" +
      element.Email +
      "','" +
      element.AadharNo +
      "','" +
      element.VoterIdNo +
      "','" +
      element.Remarks +
      "')";
    // db_new.query(sql, console.log());
  });

  //biometric details
  // --~~~~~~~-`-``--`^-^//
  data.forEach((element) => {
    // var Photograph = element.Photograph == null ? "" : element.Photograph;
    var buffer_photo =
      element.Photograph == null
        ? ""
        : new Buffer.from(element.Photograph).toString("base64");
    var photo = `insert into ems.biometric_details (cand_id, cand_name, category,Filename,  active_flag)values('${element.AdmissionId}','${element.CandidateName}','Photo','${buffer_photo}' ,'Y')`;
    db_new.query(photo,  (err) => {
      console.error(err);
      // var Signature = element.Signature == null ? "" : element.Signature;
      var buffer_sign =
        element.Signature == null
          ? ""
          : new Buffer.from(element.Signature).toString("base64");
      var sign = `insert into ems.biometric_details (cand_id, cand_name, category,Filename,  active_flag)values('${element.AdmissionId}','${element.CandidateName}','Sign','${buffer_sign}' ,'Y')`;
      db_new.query(sign,  (err) => {
        console.error(err);
        // var FingerImage =
        //   element.FingerImage == null ? "" : element.FingerImage;
        var buffer_finger =
          element.FingerImage == null
            ? ""
            : new Buffer.from(element.FingerImage).toString("base64");
        var finger = `insert into ems.biometric_details (cand_id, cand_name, category,Filename,  active_flag)values('${element.AdmissionId}','${element.CandidateName}','Thumb','${buffer_finger}' ,'Y')`;
        db_new.query(finger,  (err) => {
          console.error(err);
          // console.log("ok");
        });
      });
    });
  });
  // console.log(i);
});

// educollege.bankdetails
var bankdetails = `select * from educollege.bankdetails`;
db_old.query(bankdetails, (err, data) => {
  data.forEach((element) => {
    var sql =
      "insert into ems.cand_bank_details(cand_id, account_no, bank_name, branch_name, ifsc, micr, pan_no)values('" +
      element.AdmissionId +
      "','" +
      element.AccountNo +
      "','" +
      element.BankName +
      "','" +
      element.BankBranchName +
      "','" +
      element.IFSC +
      "','" +
      element.MICR +
      "','" +
      element.PAN +
      "')";
    // db_new.query(sql );
  });
  // console.log(i);
});

// fees details
var fees = `select * from educollege.mbbsfeesstructure`;
db_old.query(fees, (err, data) => {
  data.forEach((element) => {
    var sql =
      "insert into ems.cand_fees(cand_id, tution_fee, special_fee, medical_fee, caution_fee, lib_fee, univ_fee, lic_fee, red_fee, mis_fee, flag_fee, total_fee)values('" +
      element.AdmissionId +
      "','" +
      element.TutionFees +
      "','" +
      element.SpecialFees +
      "','" +
      element.MedicalExamFees +
      "','" +
      element.CautionDeposit +
      "','" +
      element.LibraryFees +
      "','" +
      element.UniversityFees +
      "','" +
      element.LICFees +
      "','" +
      element.RedCrossFees +
      "','" +
      element.MiscellaniousFees +
      "','" +
      element.FlagFees +
      "','" +
      element.TotalFees +
      "')";
    // db_new.query(sql, );
  });
  // console.log(i);
});

// ugQualification details
var ugQualification = `select * from educollege.ugqualificationdetails`;
db_old.query(ugQualification, (err, data) => {
  data.forEach((element) => {
    var sql =
      "insert into ems.cand_institute_details (cand_id, institute_name, place, district, state, relieving_date, duration, exam_passed, register_no, month_of_passing, year_of_passing, board)values('" +
      element.AdmissionId +
      "','" +
      element.SchoolName.replace("'","''") +
      "','" +
      element.SchoolPlace.replace("'","''") +
      "','" +
      element.SchoolDistrict +
      "','" +
      element.SchoolStateId +
      "','" +
      element.SchoolRelievingDate +
      "','" +
      element.Duration +
      "','" +
      element.ExamPassed +
      "','" +
      element.RegisterNo +
      "','" +
      element.MonthOfPassingId +
      "','" +
      element.YearOfPassing +
      "','" +
      element.Board +
      "')";
    db_new.query(sql, , (err) => {
      console.log(err);
      var sql = "insert into ems.cand_mark_details(cand_id, lang_theory, lang_practical, lang_internal, lang_total, lang_max, eng_theory, eng_practical, eng_internal, eng_total, eng_max, mat_theory, mat_practical, mat_internal, mat_total, mat_max, phy_theory, phy_practical, phy_internal, phy_total, phy_max, chem_theory, chem_practical, chem_internal, chem_total, chem_max, bio_theory, bio_practical, bio_internal, bio_total, bio_max, bot_theory, bot_practical, bot_internal, bot_total, bot_max, zoo_theory, zoo_practical, zoo_internal, zoo_total, zoo_max, lang_paper, subj_code, total_mark, max_mark, percentage)values('"+
      element.AdmissionId+"')";
    });
  });
  // console.log(i);
});
update ems.cand_address_details set ps_state = 'TamilNadu' where ps_state ='1';
update ems.cand_address_details set ps_state = 'AndhraPradesh' where ps_state ='2';
update ems.cand_address_details set ps_state = 'ArunachalPradesh' where ps_state ='3';
update ems.cand_address_details set ps_state = 'Haryana' where ps_state ='9';
update ems.cand_address_details set ps_state = 'JammuandKashmir' where ps_state ='11';
update ems.cand_address_details set ps_state = 'Karnataka' where ps_state ='13';
update ems.cand_address_details set ps_state = 'Kerala' where ps_state ='14';
update ems.cand_address_details set ps_state = 'Maharastra' where ps_state ='16';
update ems.cand_address_details set ps_state = 'Nagaland' where ps_state ='20';
update ems.cand_address_details set ps_state = 'Rajasthan' where ps_state ='23';
update ems.cand_address_details set ps_state = 'Telangana' where ps_state ='25';
update ems.cand_address_details set ps_state = 'UttarPradesh' where ps_state ='27';
update ems.cand_address_details set ps_state = 'Puducherrry' where ps_state ='32';
update ems.cand_address_details set pm_state = 'TamilNadu' where pm_state ='1';
update ems.cand_address_details set pm_state = 'AndhraPradesh' where pm_state ='2';
update ems.cand_address_details set pm_state = 'ArunachalPradesh' where pm_state ='3';
update ems.cand_address_details set pm_state = 'Haryana' where pm_state ='9';
update ems.cand_address_details set pm_state = 'JammuandKashmir' where pm_state ='11';
update ems.cand_address_details set pm_state = 'Karnataka' where pm_state ='13';
update ems.cand_address_details set pm_state = 'Kerala' where pm_state ='14';
update ems.cand_address_details set pm_state = 'Maharastra' where pm_state ='16';
update ems.cand_address_details set pm_state = 'Nagaland' where pm_state ='20';
update ems.cand_address_details set ps_state = 'Rajasthan' where pm_state ='23';
update ems.cand_address_details set pm_state = 'Telangana' where pm_state ='25';
update ems.cand_address_details set pm_state = 'UttarPradesh' where pm_state ='27';
update ems.cand_address_details set pm_state = 'Puducherrry' where pm_state ='32';


update ems.cand_institute_details set month_of_passing='January' where month_of_passing ='1';
update ems.cand_institute_details set month_of_passing='February' where month_of_passing ='2';
update ems.cand_institute_details set month_of_passing='March' where month_of_passing ='3';
update ems.cand_institute_details set month_of_passing='April' where month_of_passing ='4';
update ems.cand_institute_details set month_of_passing='May' where month_of_passing ='5';
update ems.cand_institute_details set month_of_passing='June' where month_of_passing ='6';
update ems.cand_institute_details set month_of_passing='July' where month_of_passing ='7';
update ems.cand_institute_details set month_of_passing='August' where month_of_passing ='8';
update ems.cand_institute_details set month_of_passing='September' where month_of_passing ='9';
update ems.cand_institute_details set month_of_passing='October' where month_of_passing ='10';
update ems.cand_institute_details set month_of_passing='November' where month_of_passing ='11';
update ems.cand_institute_details set month_of_passing='December' where month_of_passing ='12'; 

update ems.cand_admission_details set course = 'MS GENERAL SURGERY',course_title = 'MDMS' where course =1051;













              CertificateDocFile, CertificateFileName, ThumbDocFile, ThumbFileName

var datas = fs.readFileSync("cert.json");
var data = JSON.parse(datas);
console.log(data.length);
for (i in data) {
  // console.log(`'${data[i].AdmissionId}','${data[i].CommCertificateNo}', '${data[i].CommCertificateDate}', '${data[i].CommCertificateIA}', '${data[i].CommCertificatePlace}'`)
  var sql1 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
    values('${data[i].AdmissionId}','CommCertificate','${data[i].CommCertificateNo}', '${data[i].CommCertificateDate}', '${data[i].CommCertificateIA}', '${data[i].CommCertificatePlace}','Y')`;
  db_new.query(sql1);
  var sql2 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place, active_flag)
      values('${data[i].AdmissionId}','EligibilityCertificate','${data[i].EligibilityCertificateNo}', '${data[i].EligibilityCertificateDate}', '${data[i].EligibilityCertificateIA}', '${data[i].EligibilityCertificatePlace}','Y') `;
  db_new.query(sql2);
  var sql3 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','MigrationCertificate','${data[i].MigrationCertificateNo}', '${data[i].MigrationCertificateDate}', '${data[i].MigrationCertificateIA}', '${data[i].MigrationCertificatePlace}','Y') `;
  db_new.query(sql3);
  var sql4 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','RecoginitionCertificate','${data[i].RecoginitionCertificateNo}', '${data[i].RecoginitionCertificateDate}', '${data[i].RecoginitionCertificateIA}', '${data[i].RecoginitionCertificatePlace}','Y') `;
  db_new.query(sql4);
  var sql5 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','SCRegistration','${data[i].SCRegistrationNo}', '${data[i].SCRegistrationDate}', '${data[i].SCRegistrationIA}', '${data[i].SCRegistrationPlace}','Y')`;
  db_new.query(sql5);
  var sql6 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place, active_flag)
      values('${data[i].AdmissionId}','TransferCertificate','${data[i].TransferCertificateNo}', '${data[i].TransferCertificateDate}', '${data[i].TransferCertificateIA}', '${data[i].TransferCertificatePlace}','Y') `;
  db_new.query(sql6);
  var sql7 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','ConductCertificate','${data[i].ConductCertificateNo}', '${data[i].ConductCertificateDate}', '${data[i].ConductCertificateIA}', '${data[i].ConductCertificatePlace}','Y') `;
  db_new.query(sql7);
  var sql8 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','MbbsDegreeCertificate','${data[i].MbbsDegreeCertificateNo}', '${data[i].MbbsDegreeCertificateDate}', '${data[i].MbbsDegreeCertificateIA}', '${data[i].MbbsDegreeCertificatePlace}','Y') `;
  db_new.query(sql8);
  var sql9 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','PgDiplomaDegreeCertificate','${data[i].PgDiplomaDegreeCertificateNo}', '${data[i].PgDiplomaDegreeCertificateDate}', '${data[i].PgDiplomaDegreeCertificateIA}', '${data[i].PgDiplomaDegreeCertificatePlace}','Y') `;
  db_new.query(sql9);
  var sql10 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
        values('${data[i].AdmissionId}','MdmsDegreeCertificate','${data[i].MdmsDegreeCertificateNo}', '${data[i].MdmsDegreeCertificateDate}', '${data[i].MdmsDegreeCertificateIA}', '${data[i].MdmsDegreeCertificatePlace}','Y') `;
  db_new.query(sql10);
  var sql11 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','MbbsMedicalCouncilRegistration','${data[i].MbbsMedicalCouncilRegistrationNo}', '${data[i].MbbsMedicalCouncilRegistrationDate}', '${data[i].MbbsMedicalCouncilRegistrationIA}', '${data[i].MbbsMedicalCouncilRegistrationPlace}','Y') `;
  db_new.query(sql11);
  var sql12 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','PgDiplomaMedicalCouncilRegistration','${data[i].PgDiplomaMedicalCouncilRegistrationNo}', '${data[i].PgDiplomaMedicalCouncilRegistrationDate}', '${data[i].PgDiplomaMedicalCouncilRegistrationIA}', '${data[i].PgDiplomaMedicalCouncilRegistrationPlace}','Y') `;
  db_new.query(sql12);
  var sql13 = `insert into ems.certificate_details (cand_id,all_certificate, reg_no, date, issue, place,  active_flag)
      values('${data[i].AdmissionId}','MdmsMedicalCouncilRegistration','${data[i].MdmsMedicalCouncilRegistrationNo}', '${data[i].MdmsMedicalCouncilRegistrationDate}', '${data[i].MdmsMedicalCouncilRegistrationIA}', '${data[i].MdmsMedicalCouncilRegistrationPlace}','Y') `;
  db_new.query(sql13, () => {
    console.log(j++);
  });
}
*/

// var sql = `SELECT * FROM educollege.mbbsfeesstructure`;
// db_old.query(sql, (err, data) => {
//   data.forEach((element) => {
//     var sql = `insert into ems.cand_fees(cand_id, tution_fee, special_fee, medical_fee, caution_fee, lib_fee, univ_fee, lic_fee, red_fee, mis_fee, flag_fee, total_fee) values( '${element.AdmissionId}', '${element.TutionFees}', '${element.SpecialFees}', '${element.MedicalExamFees}', '${element.CautionDeposit}', '${element.LibraryFees}', '${element.UniversityFees}', '${element.LICFees}', '${element.RedCrossFees}', '${element.MiscellaniousFees}', '${element.FlagFees}', '${element.TotalFees}')`;
//     // db_new.query(sql);
//   });
//   var sql = `SELECT * FROM educollege.mdmsfeesstructure`;
//   db_old.query(sql, (err, data) => {
//     data.forEach((element) => {
//       var sql = `insert into ems.cand_fees(cand_id, tution_fee, special_fee, caution_fee, lib_fee,  flag_fee, total_fee) values ( '${element.AdmissionId}', '${element.TutionFees}', '${element.SpecialFees}', '${element.CautionDeposit}', '${element.LibraryFees}', '${element.FlagFees}', '${element.TotalFees}')`;
//       // db_new.query(sql);
//     });
//     var sql = `SELECT * FROM educollege.aisscfeesstructure`;
//     db_old.query(sql, (err, data) => {
//       data.forEach((element) => {
//         var sql = `insert into ems.cand_fees(cand_id, tution_fee, special_fee,  caution_fee, lib_fee,  flag_fee, total_fee) values( '${element.AdmissionId}', '${element.TutionFees}', '${element.SpecialFees}', '${element.CautionDeposit}', '${element.LibraryFees}', '${element.FlagFees}', '${element.TotalFees}')`;
//         // db_new.query(sql);
//       });
//       var sql = `SELECT * FROM educollege.bscfeesstructure`;
//       db_old.query(sql, (err, data) => {
//         data.forEach((element) => {
//           var sql = `insert into ems.cand_fees(cand_id, tution_fee, special_fee, medical_fee, caution_fee, lib_fee, univ_fee, lic_fee, red_fee, mis_fee, flag_fee, total_fee)values( '${element.AdmissionId}', '${element.TutionFees}', '${element.SpecialFees}', '${element.MedicalExamFees}', '${element.CautionDeposit}', '${element.LibraryFees}', '${element.UniversityFees}', '${element.LICFees}', '${element.RedCrossFees}', '${element.MiscellaniousFees}', '${element.FlagFees}', '${element.TotalFees}')`;
//           // db_new.query(sql, console.log("ok"));
//         });
//       });
//     });
//   });
// });

// var k = 1;
// var sql = `Select cand_id
// from ems.cand_admission_details
// where ems.cand_admission_details.cand_id not in (select cand_id from ems.cand_fees)`;

// db_new.query(sql, (err, data) => {
//   data.forEach((element) => {
//     var sql = `insert into ems.cand_fees (cand_id) values ('${element.cand_id}')`;
//     db_new.query(sql, console.log(k++));
//   });
// });

var c = 1;

// var sql = `select * from ems.surety`;
// db_new.query(sql, (err, data) => {
//   data.forEach((el) => {
//     var sql = `update ems.surety_details set surety_files='${el.surety_File}' where cand_id = '${el.cand_id}'`;
//     db_new.query(sql, (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//     console.log(c++);
//   });
// });

// var datas = fs.readFileSync("vgjfg.json");
// var data = JSON.parse(datas);
// // console.log(data.length);
// for (i in data) {
//   db_new.query(
//     `update ems.cand_profile_details set  academic_year = '${data[i].AcademicYear}' where cand_id ='${data[i].AdmissionId}'`,
//     (err, data) => {
//       if (err) {
//         console.error(err);
//       }
//       console.log(c++);
//     }
//   );
// }

bsc = [
  "B.sc. Medical Laboratory Technology",
  "B.sc. Cardio Pulmonary Perfusion Care Technology",
  "B.sc. Cardiac Technology",
  "B.sc. Accident and Emergency Care Technology",
  "B.sc. Dialysis Technology",
  "B.sc. Physician Assistant",
  "B.sc. Critical Care Technology",
  "B.sc. Operation Theatre and Anaesthesia Technology",
  "B.sc. Respiratory Therapy",
  "B.sc. Radiography and Imaging Technology",
];
// bsc.forEach(element => {
//   console.log(element.toUpperCase())
// });

mdms = [
  "MD Anaesthesiology",
  "MD Biochemistry",
  "MD Chest Medicine",
  "MD Dermatology,Venerology & Leprosy",
  "MD Forensic Medicine",
  "MD General Medicine",
  "MD Immuno-Haematology & Blood Tranfusion",
  "MD Microbiology",
  "MD Pathology",
  "MD Paediatric Medicine",
  "MD Pharmacology",
  "MD Physiology",
  "MD Psychiatry",
  "MD Radiodiagnosis",
  "MD Radiotherapy",
  "MS General Surgery",
  "MS Obstetrics & Gynaecology",
  "MS Ophthalmology",
  "MS Oto-Rhino-Laryngology",
  "MS Orthopaedics",
];

// mdms.forEach((element) => {
//   console.log(element.toUpperCase());
// });

aissc = [
  "DM Cardiology",
  "DM Medical Gastroenterology",
  "DM Nephrology",
  "DM Neurology",
  "M.Ch Neurosurgery",
  "M.Ch Paediatric Surgery",
  "M.Ch Plastic and Reconstructive Surgery",
  "M.Ch Genito Urinary Surgery",
  "M.Ch Surgical Gastroenterology",
];
// aissc.forEach((element) => {
//   console.log(element.toUpperCase());
// });

var sql = `select * from educollege.aisscbond`;
db_old.query(sql, (err, data) => {
  data.forEach((e) => {
    var sql = `insert into ems.cand_surety_details (cand_id, surety_one_name, surety_one_aadhaar, surety_one_pan, surety_one_address, surety_two_name, surety_two_aadhaar, surety_two_pan, surety_two_address, surety_three_name, surety_three_aadhaar, surety_three_pan, surety_three_address) values('${e.AdmissionId}','${e.SuretyOneName}','${e.SuretyOneAadharCardNO}','${e.SuretyOnePanCardNo}','${e.SuretyOneAddress}','${e.SuretyTwoName}','${e.SuretyTwoAadharCardNO}','${e.SuretyTwoPanCardNo}','${e.SuretyTwoAddress}','${e.SuretyThreeName}','${e.SuretyThreeAadharCardNO}','${e.SuretyThreePanCardNo}','${e.SuretyThreeAddress}')`;
    db_new.query(sql, (err) => {
      if (err) console.error(err);
      console.log(c++);
    });
  });
});
var d = 1;
// var sql = `SELECT * FROM educollege.aisscqualificationdetails`;
// db_old.query(sql,(err,data)=>{
//   data.forEach(e=>{
//     var sql = `insert into ems.cand_institute_details_mdms (cand_id, name, post, amount_of_agreement, period_of_agreement) values ('${e.AdmissionId}', '${e.PreviousInstituteName}', '${e.PreviousInstitutePost}', '${e.AmountOfAgreement}', '${e.PeriodOfAgreement}')`;
//     db_new.query(sql,()=>{
//       var sql = `insert into  ems.cand_academic_mdms (cand_id, mbbs_name, mbbs_place, mbbs_district, mbbs_state, mbbs_university, mbbs_marksheet_no, mbbs_passing_month, mbbs_passing_year) values( '${e.AdmissionId}','${e.MbbsCollegeName}', '${e.MbbsCollegePlace}', '${e.MbbsCollegeDistrict}', '${e.MbbsCollegeStateId}', '${e.MbbsCollegeUniversity}', '${e.MbbsMarkSheetNo}', '${e.MbbsMonthOfPassingId}', '${e.MbbsYearOfPassing}')`;
//       db_new.query(sql,()=>{
//         var sql = `insert into  ems.cand_academic_mdms_1 (cand_id, pg_diplamo_name, pg_diplamo_place, pg_diplamo_district, pg_diplamo_state, pg_diplamo_university, pg_diplamo_marksheet_no, pg_diplamo_passing_month, pg_diplamo_passing_year, pg_diplamo_speciality) values('${e.AdmissionId}','${e.PgDiplomaCollegeName}', '${e.PgDiplomaCollegePlace}', '${e.PgDiplomaCollegeDistrict}', '${e.PgDiplomaCollegeStateId}', '${e.PgDiplomaCollegeUniversity}', '${e.PgDiplomaMarkSheetNo}', '${e.PgDiplomaMonthOfPassingId}', '${e.PgDiplomaYearOfPassing}','${e.PgDiplomaSpeciality}')`;
//         db_new.query(sql,()=>{
//           var sql = `insert into  ems.cand_academic_mdms_2 (cand_id, mdms_name, mdms_place, mdms_district, mdms_state, mdms_university, mdms_marksheet_no, mdms_passing_month, mdms_passing_year, mdms_speciality) values( '${e.AdmissionId}',  '${e.MdmsCollegeName}', '${e.MdmsCollegePlace}', '${e.MdmsCollegeDistrict}', '${e.MdmsCollegeStateId}', '${e.MdmsCollegeUniversity}', '${e.MdmsMarkSheetNo}', '${e.MdmsMonthOfPassingId}', '${e.MdmsYearOfPassing}', '${e.MdmsSpeciality}')`;
//           db_new.query(sql,()=>{
//             var sql = `insert into ems.cand_neet_marks_mdms (cand_id, mbbs_marks, pg_diplamo_marks, mdms_marks, neet_percentile) values ('${e.AdmissionId}', '${e.MbbsMark}', '${e.PgDiplomaMark}', '${e.MdmsMark}', '${e.NeetPercentile}')`;
//             db_new.query(sql,()=>{
//               console.log(d++)
//             })
//       })
//     })})
//     })
//   })
// })
// From Ravi Ammaiappan to Everyone:  10:31 AM
// Date
// Name of the student
// Course
// Student ID
// Amount Paid
// Name of the Bank
// Transacation ID
// Phone number
// Acknowledgement Reciept
// Date of Submission
