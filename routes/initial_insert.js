const initial_files = require("./insert_files");

exports.student_home = (req, res) => {
  var message = "";
  var post = req.body;
  console.log(post);
  var user_details = JSON.parse(post.user_details);
  var submitted = post.action;

  var name = post.full_name;
  var hepatitis = post.hepatitis == "undefined" ? "No" : post.hepatitis;
  var covid = post.covid == "undefined" ? "No" : post.covid;
  // profile tab
  var initial = post.initial;
  var initial_expansion = post.initial_expansion;
  var type_of_allotment = post.type_of_allotment;
  var father_name = post.father_name;
  var mother_name = post.mother_name;
  var date_of_birth = post.date_of_birth;
  var gender = post.gender;
  var blood_group = post.blood_group;
  var religion = post.religion;
  var community = post.community;
  var caste = post.caste;
  var nationality = post.nationality;
  var willing_to_donate_blood = post.willing_to_donate_blood;
  var academic_year = post.academic_year;
  var student_code = post.student_code;

  // admission tab
  var rank = post.rank;
  var rank_no = post.rank_no;
  var ar_no = post.ar_no;
  var total_mark = post.total_mark;
  var neet_mark = post.neet_mark;
  var reg_no = post.reg_no;
  var neet_roll_no = post.neet_roll_no;
  var course = post.course;
  var course_title = post.course_title;
  var admission_type = post.admission_type;
  var admission_quota = post.admission_quota;
  var course_commencement = post.course_commencement;
  var date_of_admission = post.date_of_admission;
  var date_of_allotment = post.date_of_allotment;
  var selected_category = post.selected_category;
  var willing_for_counciling = post.willing_for_counciling;

  //address tab
  var ps_address = post.ps_address;
  var ps_pincode = post.ps_pincode;
  var ps_state = post.ps_state;
  var ps_district = post.ps_district;
  var pm_address = post.pm_address;
  var pm_pincode = post.pm_pincode;
  var pm_state = post.pm_state;
  var pm_district = post.pm_district;
  var address_type = "";
  ps_address == pm_address ? (address_type = "1") : (address_type = "0");

  //contact tab
  var tel_phone = post.tel_phone;
  var mobile_phone = post.mobile_phone;
  var email_id = post.email_id;
  var aadhar_no = post.aadhar_no;
  var voter_id = post.voter_id;
  var remarks = post.remarks;

  // for institute mbbs
  var institute_name = post.institute_name;
  var place = post.place;
  var register_no = post.register_no;
  var exam_passed = post.exam_passed;
  var relieving_date = post.relieving_date;
  var district = post.district;
  var board = post.board;
  var month_of_passing = post.month_of_passing;
  var state = post.state;
  var year_of_passing = post.year_of_passing;
  var duration = post.duration;

  //for mark details mbbs
  var lang_theory = post.lang_theory;
  var lang_practical = post.lang_practical;
  var lang_internal = post.lang_internal;
  var lang_total = post.lang_total;
  var lang_max = post.lang_max;
  var eng_theory = post.eng_theory;
  var eng_practical = post.eng_practical;
  var eng_internal = post.eng_internal;
  var eng_total = post.eng_total;
  var eng_max = post.eng_max;
  var mat_theory = post.mat_theory;
  var mat_practical = post.mat_practical;
  var mat_internal = post.mat_internal;
  var mat_total = post.mat_total;
  var mat_max = post.mat_max;
  var phy_theory = post.phy_theory;
  var phy_practical = post.phy_practical;
  var phy_internal = post.phy_internal;
  var phy_total = post.phy_total;
  var phy_max = post.phy_max;

  var chem_theory = post.chem_theory;
  var chem_practical = post.chem_practical;
  var chem_internal = post.chem_internal;
  var chem_total = post.chem_total;
  var chem_max = post.chem_max;
  var bio_theory = post.bio_theory;
  var bio_practical = post.bio_practical;
  var bio_internal = post.bio_internal;
  var bio_total = post.bio_total;
  var bio_max = post.bio_max;
  var bot_theory = post.bot_theory;
  var bot_practical = post.bot_practical;
  var bot_internal = post.bot_internal;
  var bot_total = post.bot_total;
  var bot_max = post.bot_max;

  var zoo_theory = post.zoo_theory;
  var zoo_practical = post.zoo_practical;
  var zoo_internal = post.zoo_internal;
  var zoo_total = post.zoo_total;
  var zoo_max = post.zoo_max;
  var lang_paper = post.lang_paper;

  var lang_paper = post.lang_paper;
  var subj_code = post.subj_code;
  var total_mark_m = post.total_mark1;
  var max_mark = post.max_mark;
  var percentage = post.percentage;

  // for neet details mbbs
  var phy_neet_mark = post.phy_neet_mark;
  var chem_neet_mark = post.chem_neet_mark;
  var bio_neet_mark = post.bio_neet_mark;
  var agg_neet_mark = post.agg_neet_mark;
  var phy_neet_max = post.phy_neet_max;
  var chem_neet_max = post.chem_neet_max;
  var bio_neet_max = post.bio_neet_max;
  var agg_neet_max = post.agg_neet_max;

  //institute details mdms
  var institute_name = post.institute_name;
  var college_post = post.college_post;
  var amount_of_agreement = post.amount_of_agreement;
  var period_of_agreement = post.period_of_agreement;

  //academic details mdms
  var mbbs_name = post.mbbs_name;
  var mbbs_place = post.mbbs_place;
  var mbbs_district = post.mbbs_district;
  var mbbs_state = post.mbbs_state;
  var mbbs_university = post.mbbs_university;
  var mbbs_marksheet_no = post.mbbs_marksheet_no;
  var mbbs_passing_month = post.mbbs_passing_month;
  var mbbs_passing_year = post.mbbs_passing_year;
  var mbbs_speciality = post.mbbs_speciality;

  var pg_diplamo_name = post.pg_diplamo_name;
  var pg_diplamo_place = post.pg_diplamo_place;
  var pg_diplamo_district = post.pg_diplamo_district;
  var pg_diplamo_state = post.pg_diplamo_state;
  var pg_diplamo_university = post.pg_diplamo_university;
  var pg_diplamo_marksheet_no = post.pg_diplamo_marksheet_no;
  var pg_diplamo_passing_month = post.pg_diplamo_passing_month;
  var pg_diplamo_passing_year = post.pg_diplamo_passing_year;
  var pg_diplamo_speciality = post.pg_diplamo_speciality;

  var mdms_name = post.mdms_name;
  var mdms_place = post.mdms_place;
  var mdms_district = post.mdms_district;
  var mdms_state = post.mdms_state;
  var mdms_university = post.mdms_university;
  var mdms_marksheet_no = post.mdms_marksheet_no;
  var mdms_passing_month = post.mdms_passing_month;
  var mdms_passing_year = post.mdms_passing_year;
  var mdms_speciality = post.mdms_speciality;

  //neet_marks mdms
  var mbbs_marks = post.mbbs_marks;
  var pg_diplamo_marks = post.pg_diplamo_marks;
  var mdms_marks = post.mdms_marks;
  var neet_percentile = post.neet_percentile;

  //bank details
  var account_name = post.account_name;
  var account_no = post.account_no;
  var bank_name = post.bank_name;
  var branch_name = post.branch_name;
  var ifsc = post.ifsc;
  var micr = post.micr;
  var pan_no = post.pan_no;

  var transaction_id = post.transaction_id;
  var name_of_bank = post.name_of_bank;
  var name_of_branch = post.name_of_branch;
  var amount_paid = post.paid_amount;
  var payment_date = post.payment_date;
  var sq_amount_paid = post.sq_paid_amount;
  var sq_payment_date = post.sq_payment_date;

  //surety details
  var surety_one_name = post.surety_one_name;
  var surety_one_aadhaar = post.surety_one_aadhaar;
  var surety_one_pan = post.surety_one_pan;
  var surety_one_address = post.surety_one_address;

  var surety_two_name = post.surety_two_name;
  var surety_two_aadhaar = post.surety_two_aadhaar;
  var surety_two_pan = post.surety_two_pan;
  var surety_two_address = post.surety_two_address;

  var surety_three_name = post.surety_three_name;
  var surety_three_aadhaar = post.surety_three_aadhaar;
  var surety_three_pan = post.surety_three_pan;
  var surety_three_address = post.surety_three_address;

  // certificate_details
  var c1_type = post.c1;
  var c1_reg_no = post.c1_reg_no;
  var c1_date = post.c1_date;
  var c1_issue = post.c1_issue;
  var c1_place = post.c1_place;

  var c2_type = post.c2;
  var c2_reg_no = post.c2_reg_no;
  var c2_date = post.c2_date;
  var c2_issue = post.c2_issue;
  var c2_place = post.c2_place;

  var c3_type = post.c3;
  var c3_reg_no = post.c3_reg_no;
  var c3_date = post.c3_date;
  var c3_issue = post.c3_issue;
  var c3_place = post.c3_place;

  var c4_type = post.c4;
  var c4_reg_no = post.c4_reg_no;
  var c4_date = post.c4_date;
  var c4_issue = post.c4_issue;
  var c4_place = post.c4_place;

  var c5_type = post.c5;
  var c5_reg_no = post.c5_reg_no;
  var c5_date = post.c5_date;
  var c5_issue = post.c5_issue;
  var c5_place = post.c5_place;

  var c6_type = post.c6;
  var c6_reg_no = post.c6_reg_no;
  var c6_date = post.c6_date;
  var c6_issue = post.c6_issue;
  var c6_place = post.c6_place;

  var c7_type = post.c7;
  var c7_reg_no = post.c7_reg_no;
  var c7_date = post.c7_date;
  var c7_issue = post.c7_issue;
  var c7_place = post.c7_place;

  var c8_type = post.c8;
  var c8_reg_no = post.c8_reg_no;
  var c8_date = post.c8_date;
  var c8_issue = post.c8_issue;
  var c8_place = post.c8_place;

  var c9_type = post.c9;
  var c9_reg_no = post.c9_reg_no;
  var c9_date = post.c9_date;
  var c9_issue = post.c9_issue;
  var c9_place = post.c9_place;

  var c10_type = post.c10;
  var c10_reg_no = post.c10_reg_no;
  var c10_date = post.c10_date;
  var c10_issue = post.c10_issue;
  var c10_place = post.c10_place;

  var c11_type = post.c11;
  var c11_reg_no = post.c11_reg_no;
  var c11_date = post.c11_date;
  var c11_issue = post.c11_issue;
  var c11_place = post.c11_place;

  var c12_type = post.c12;
  var c12_reg_no = post.c12_reg_no;
  var c12_date = post.c12_date;
  var c12_issue = post.c12_issue;
  var c12_place = post.c12_place;

  var c13_type = post.c13;
  var c13_reg_no = post.c13_reg_no;
  var c13_date = post.c13_date;
  var c13_issue = post.c13_issue;
  var c13_place = post.c13_place;

  var c14_type = post.c14;
  var c14_reg_no = post.c14_reg_no;
  var c14_date = post.c14_date;
  var c14_issue = post.c14_issue;
  var c14_place = post.c14_place;

  var c15_type = post.c15;
  var c15_reg_no = post.c15_reg_no;
  var c15_date = post.c15_date;
  var c15_issue = post.c15_issue;
  var c15_place = post.c15_place;

  var c16_type = post.c16;
  var c16_reg_no = post.c16_reg_no;
  var c16_date = post.c16_date;
  var c16_issue = post.c16_issue;
  var c16_place = post.c16_place;

  var c17_type = post.c17;
  var c17_reg_no = post.c17_reg_no;
  var c17_date = post.c17_date;
  var c17_issue = post.c17_issue;
  var c17_place = post.c17_place;

  var c18_type = post.c18;
  var c18_reg_no = post.c18_reg_no;
  var c18_date = post.c18_date;
  var c18_issue = post.c18_issue;
  var c18_place = post.c18_place;

  var c19_type = post.c19;
  var c19_reg_no = post.c19_reg_no;
  var c19_date = post.c19_date;
  var c19_issue = post.c19_issue;
  var c19_place = post.c19_place;

  var c20_type = post.c20;
  var c20_reg_no = post.c20_reg_no;
  var c20_date = post.c20_date;
  var c20_issue = post.c20_issue;
  var c20_place = post.c20_place;

  var c21_type = post.c21;
  var c21_reg_no = post.c21_reg_no;
  var c21_date = post.c21_date;
  var c21_issue = post.c21_issue;
  var c21_place = post.c21_place;

  var c22_type = post.c22;
  var c22_reg_no = post.c22_reg_no;
  var c22_date = post.c22_date;
  var c22_issue = post.c22_issue;
  var c22_place = post.c22_place;

  var c23_type = post.c23;
  var c23_reg_no = post.c23_reg_no;
  var c23_date = post.c23_date;
  var c23_issue = post.c23_issue;
  var c23_place = post.c23_place;

  var c24_type = post.c24;
  var c24_reg_no = post.c24_reg_no;
  var c24_date = post.c24_date;
  var c24_issue = post.c24_issue;
  var c24_place = post.c24_place;

  var c25_type = post.c25;
  var c25_reg_no = post.c25_reg_no;
  var c25_date = post.c25_date;
  var c25_issue = post.c25_issue;
  var c25_place = post.c25_place;

  var c26_type = post.c26;
  var c26_reg_no = post.c26_reg_no;
  var c26_date = post.c26_date;
  var c26_issue = post.c26_issue;
  var c26_place = post.c26_place;

  var c27_type = post.c27;
  var c27_reg_no = post.c27_reg_no;
  var c27_date = post.c27_date;
  var c27_issue = post.c27_issue;
  var c27_place = post.c27_place;

  // scanned
  // var scan_sign = post.scan_sign.substring(22);
  //relieving details
  var relieved = "No";

  // console.log('candid:'+cand_id);
  var dt = new Date();

  registered_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
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

  if (!post.cand_id) {
    var num = Math.floor(Math.random() * 1e6);
    var cand_first = name.substring(0, 4);
    var cand_id = cand_first + num;

    course_title == "MBBS"
      ? initial_files.initial_files(cand_id, name, last_modified_time)
      : course_title == "MDMS"
      ? initial_files.initial_files_(cand_id, name, last_modified_time)
      : null;
    // ---------------------------------end of files-----------------------
    user_details.user_type == "Public"
      ? db.query(
          `update admintv_ems.user_details set cand_id = '${cand_id}' where user_name ='${user_details.user_name}' and password ='${user_details.password}'`
        )
      : null;

    var sql = `INSERT INTO admintv_ems.cand_admission_details(cand_id,cand_name,rank_,rank_no,ar_no,total_mark,neet_mark,reg_no,neet_roll_no,course,course_title,admission_type,admission_quota,course_commencement,date_of_admission,date_of_allotment,selected_category,willing_for_counciling,student_code,hepatitis,covid,last_modified_time) VALUES (
      '${cand_id}','${name}','${rank}','${rank_no}','${ar_no}','${total_mark}','${neet_mark}','${reg_no}','${neet_roll_no}','${course}','${course_title}','${admission_type}','${admission_quota}','${course_commencement}','${date_of_admission}','${date_of_allotment}','${selected_category}','${willing_for_counciling}','${student_code}','${hepatitis}','${covid}','${last_modified_time}')`;
    db.query(sql, function (err, data) {
      var sql = `INSERT INTO admintv_ems.cand_profile_details (cand_id, name, initial, initial_expansion,type_of_allotment, father_name, mother_name, date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood, academic_year,  registered_time, last_modified_time) values ('${cand_id}','${name}', '${initial}', '${initial_expansion}','${type_of_allotment}', '${father_name}', '${mother_name}', '${date_of_birth}', '${gender}', '${blood_group}', '${religion}', '${community}', '${caste}', '${nationality}', '${willing_to_donate_blood}', '${academic_year}',  '${registered_time}', '${last_modified_time}')`;
      db.query(sql, function (err, data) {
        var sql = `INSERT INTO admintv_ems.cand_address_details (cand_id, address_type, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district, last_modified_time) values ('${cand_id}', '${address_type}', '${ps_address.replace(
          "'",
          "''"
        )}', '${ps_pincode}', '${ps_state}', '${ps_district}', '${pm_address.replace(
          "'",
          "''"
        )}', '${pm_pincode}', '${pm_state}', '${pm_district}', '${last_modified_time}')`;
        db.query(sql, function (err, data) {
          var sql = `INSERT INTO admintv_ems.cand_contact_details (cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks, last_modified_time) values('${cand_id}', '${tel_phone}', '${mobile_phone}', '${email_id}', '${aadhar_no}', '${voter_id}', '${remarks}', '${last_modified_time}')`;
          db.query(sql, function (err, data) {
            var sql = `INSERT INTO admintv_ems.cand_bank_details (cand_id,account_name,account_no, bank_name, branch_name, ifsc, micr, pan_no,transaction_id,name_of_bank,name_of_branch,amount_paid,payment_date,sq_amount_paid,sq_payment_date, last_modified_time) values('${cand_id}','${account_name}' ,'${account_no}', '${bank_name}', '${branch_name}', '${ifsc}', '${micr}', '${pan_no}','${transaction_id}','${name_of_bank}','${name_of_branch}','${amount_paid}','${payment_date}','${sq_amount_paid}','${sq_payment_date}','${last_modified_time}')`;
            db.query(sql, function (err, data) {
              var sql = `INSERT INTO admintv_ems.cand_relieving_details  (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name,last_modified_time) values('${cand_id}', '${relieved}','','','','','${last_modified_time}')`;
              db.query(sql, function (err, data) {
                if (course_title == "MBBS") {
                  var sql_ins = `INSERT INTO admintv_ems.cand_institute_details(cand_id,institute_name,place,district,state,relieving_date,duration,exam_passed,register_no,month_of_passing,year_of_passing,board,last_modified_time) VALUES ('${cand_id}','${institute_name.replace(
                    "'",
                    "''"
                  )}','${place}','${district}','${state}','${relieving_date}','${duration}','${exam_passed}','${register_no}','${month_of_passing}','${year_of_passing}','${board}','${last_modified_time}')`;
                  var sql_mark = `INSERT INTO admintv_ems.cand_marks_details(cand_id,lang_theory,lang_practical,lang_internal,lang_total,lang_max,eng_theory,eng_practical,eng_internal,eng_total,eng_max,mat_theory,mat_practical,mat_internal,mat_total,mat_max,phy_theory,phy_practical,phy_internal,phy_total,phy_max,chem_theory,chem_practical,chem_internal,chem_total,chem_max,bio_theory,bio_practical,bio_internal,bio_total,bio_max,bot_theory,bot_practical,bot_internal,bot_total,bot_max,zoo_theory,zoo_practical,zoo_internal,zoo_total,zoo_max,lang_paper,subj_code,total_mark,max_mark,percentage) VALUES ('${cand_id}','${lang_theory}','${lang_practical}','${lang_internal}','${lang_total}','${lang_max}','${eng_theory}','${eng_practical}','${eng_internal}','${eng_total}','${eng_max}','${mat_theory}','${mat_practical}','${mat_internal}','${mat_total}','${mat_max}','${phy_theory}','${phy_practical}','${phy_internal}','${phy_total}','${phy_max}','${chem_theory}','${chem_practical}','${chem_internal}','${chem_total}','${chem_max}','${bio_theory}','${bio_practical}','${bio_internal}','${bio_total}','${bio_max}','${bot_theory}','${bot_practical}','${bot_internal}','${bot_total}','${bot_max}','${zoo_theory}','${zoo_practical}','${zoo_internal}','${zoo_total}','${zoo_max}','${lang_paper}','${subj_code}','${total_mark_m}','${max_mark}','${percentage}')`;
                  var sql_neet = `INSERT INTO admintv_ems.cand_neet_mark_details(cand_id,phy_mark,phy_max_mark,chem_mark,chem_max_mark,bio_mark,bio_max_mark,agg_mark,agg_max_mark,last_modified_time) VALUES ('${cand_id}','${phy_neet_mark}','${phy_neet_max}','${chem_neet_mark}','${chem_neet_max}','${bio_neet_mark}','${bio_neet_max}','${agg_neet_mark}','${agg_neet_max}','${last_modified_time}')`;
                } else {
                  var sql_ins = "";
                  var sql_mark = "";
                  var sql_neet = "";
                }
                db.query(sql_ins, function (err, data) {
                  db.query(sql_mark, function (err, data) {
                    db.query(sql_neet, function (err, data) {
                      var sql = `INSERT INTO admintv_ems.cand_fees (cand_id,last_modified_time) values ('${cand_id}','${last_modified_time}')`;
                      db.query(sql, function () {
                        var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                            ('${cand_id}','${c1_type}','${c1_reg_no}','${c1_date}','${c1_issue}','${c1_place}','Y','${last_modified_time}')`;
                        db.query(sql, function () {
                          var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                  ('${cand_id}','${c2_type}','${c2_reg_no}','${c2_date}','${c2_issue}','${c2_place}','Y','${last_modified_time}')`;
                          db.query(sql, function () {
                            var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                    ('${cand_id}','${c3_type}','${c3_reg_no}','${c3_date}','${c3_issue}','${c3_place}','Y','${last_modified_time}')`;
                            db.query(sql, function () {
                              var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                        ('${cand_id}','${c4_type}','${c4_reg_no}','${c4_date}','${c4_issue}','${c4_place}','Y','${last_modified_time}')`;
                              db.query(sql, function () {
                                var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c5_type}','${c5_reg_no}','${c5_date}','${c5_issue}','${c5_place}','Y','${last_modified_time}')`;
                                db.query(sql, function () {
                                  var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c6_type}','${c6_reg_no}','${c6_date}','${c6_issue}','${c6_place}','Y','${last_modified_time}')`;
                                  db.query(sql, function () {
                                    var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c7_type}','${c7_reg_no}','${c7_date}','${c7_issue}','${c7_place}','Y','${last_modified_time}')`;
                                    db.query(sql, function () {
                                      var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c8_type}','${c8_reg_no}','${c8_date}','${c8_issue}','${c8_place}','Y','${last_modified_time}')`;
                                      db.query(sql, function () {
                                        var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c9_type}','${c9_reg_no}','${c9_date}','${c9_issue}','${c9_place}','Y','${last_modified_time}')`;
                                        db.query(sql, function () {
                                          var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c10_type}','${c10_reg_no}','${c10_date}','${c10_issue}','${c10_place}','Y','${last_modified_time}')`;
                                          db.query(sql, function () {
                                            var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c11_type}','${c11_reg_no}','${c11_date}','${c11_issue}','${c11_place}','Y','${last_modified_time}')`;
                                            db.query(sql, function () {
                                              var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c12_type}','${c12_reg_no}','${c12_date}','${c12_issue}','${c12_place}','Y','${last_modified_time}')`;
                                              db.query(sql, function () {
                                                var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c13_type}','${c13_reg_no}','${c13_date}','${c13_issue}','${c13_place}','Y','${last_modified_time}')`;
                                                db.query(sql, function () {
                                                  var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c14_type}','${c14_reg_no}','${c14_date}','${c14_issue}','${c14_place}','Y','${last_modified_time}')`;
                                                  db.query(sql, function () {
                                                    var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c15_type}','${c15_reg_no}','${c15_date}','${c15_issue}','${c15_place}','Y','${last_modified_time}')`;
                                                    db.query(sql, function () {
                                                      if (
                                                        course_title == "MDMS"
                                                      ) {
                                                        var sql = `INSERT INTO admintv_ems.cand_institute_details_mdms (cand_id, name, post, amount_of_agreement, period_of_agreement, last_modified_time) values ('${cand_id}', '${institute_name.replace(
                                                          "'",
                                                          "''"
                                                        )}', '${college_post}', '${amount_of_agreement}', '${period_of_agreement}', '${last_modified_time}')`;
                                                        db.query(
                                                          sql,
                                                          function (err, data) {
                                                            var sql = `INSERT INTO admintv_ems.cand_academic_mdms (cand_id, mbbs_name, mbbs_place, mbbs_district, mbbs_state, mbbs_university, mbbs_marksheet_no, mbbs_passing_month, mbbs_passing_year, mbbs_speciality, last_modified_time) values('${cand_id}', '${mbbs_name}', '${mbbs_place}', '${mbbs_district}', '${mbbs_state}', '${mbbs_university}', '${mbbs_marksheet_no}', '${mbbs_passing_month}', '${mbbs_passing_year}', '${mbbs_speciality}', '${last_modified_time}')`;
                                                            db.query(
                                                              sql,
                                                              function (
                                                                err,
                                                                data
                                                              ) {
                                                                var sql = `INSERT INTO admintv_ems.cand_academic_mdms_1 (cand_id, pg_diplamo_name, pg_diplamo_place, pg_diplamo_district, pg_diplamo_state, pg_diplamo_university, pg_diplamo_marksheet_no, pg_diplamo_passing_month, pg_diplamo_passing_year, pg_diplamo_speciality, last_modified_time) values('${cand_id}', '${pg_diplamo_name}', '${pg_diplamo_place}', '${pg_diplamo_district}', '${pg_diplamo_state}', '${pg_diplamo_university}', '${pg_diplamo_marksheet_no}', '${pg_diplamo_passing_month}', '${pg_diplamo_passing_year}', '${pg_diplamo_speciality}', '${last_modified_time}')`;
                                                                db.query(
                                                                  sql,
                                                                  function (
                                                                    err,
                                                                    data
                                                                  ) {
                                                                    var sql = `INSERT INTO admintv_ems.cand_academic_mdms_2 (cand_id, mdms_name, mdms_place, mdms_district, mdms_state, mdms_university, mdms_marksheet_no, mdms_passing_month, mdms_passing_year, mdms_speciality) values ('${cand_id}', '${mdms_name}', '${mdms_place}', '${mdms_district}', '${mdms_state}', '${mdms_university}', '${mdms_marksheet_no}', '${mdms_passing_month}', '${mdms_passing_year}', '${mdms_speciality}')`;
                                                                    db.query(
                                                                      sql,
                                                                      function (
                                                                        err,
                                                                        data
                                                                      ) {
                                                                        var sql = `INSERT INTO admintv_ems.cand_neet_marks_mdms (cand_id, mbbs_marks, pg_diplamo_marks, mdms_marks, neet_percentile, last_modified_time) values('${cand_id}', '${mbbs_marks}', '${pg_diplamo_marks}', '${mdms_marks}','${neet_percentile}','${last_modified_time}')`;
                                                                        db.query(
                                                                          sql,
                                                                          function (
                                                                            err,
                                                                            data
                                                                          ) {
                                                                            var sql = `INSERT INTO admintv_ems.cand_surety_details (cand_id, surety_one_name, surety_one_aadhaar, surety_one_pan, surety_one_address, surety_two_name, surety_two_aadhaar, surety_two_pan, surety_two_address, surety_three_name, surety_three_aadhaar, surety_three_pan, surety_three_address, last_modified_time) values('${cand_id}', '${surety_one_name}', '${surety_one_aadhaar}', '${surety_one_pan}', '${surety_one_address}', '${surety_two_name}', '${surety_two_aadhaar}', '${surety_two_pan}', '${surety_two_address}', '${surety_three_name}', '${surety_three_aadhaar}', '${surety_three_pan}', '${surety_three_address}', '${last_modified_time}')`;
                                                                            db.query(
                                                                              sql,
                                                                              function (
                                                                                err,
                                                                                data
                                                                              ) {
                                                                                var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c16_type}','${c16_reg_no}','${c16_date}','${c16_issue}','${c16_place}','Y','${last_modified_time}')`;
                                                                                db.query(
                                                                                  sql,
                                                                                  function () {
                                                                                    var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c17_type}','${c17_reg_no}','${c17_date}','${c17_issue}','${c17_place}','Y','${last_modified_time}')`;
                                                                                    db.query(
                                                                                      sql,
                                                                                      function () {
                                                                                        var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c18_type}','${c18_reg_no}','${c18_date}','${c18_issue}','${c18_place}','Y','${last_modified_time}')`;
                                                                                        db.query(
                                                                                          sql,
                                                                                          function () {
                                                                                            var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c19_type}','${c19_reg_no}','${c19_date}','${c19_issue}','${c19_place}','Y','${last_modified_time}')`;
                                                                                            db.query(
                                                                                              sql,
                                                                                              function () {
                                                                                                var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c20_type}','${c20_reg_no}','${c20_date}','${c20_issue}','${c20_place}','Y','${last_modified_time}')`;
                                                                                                db.query(
                                                                                                  sql,
                                                                                                  function () {
                                                                                                    var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c21_type}','${c21_reg_no}','${c21_date}','${c21_issue}','${c21_place}','Y','${last_modified_time}')`;
                                                                                                    db.query(
                                                                                                      sql,
                                                                                                      function () {
                                                                                                        var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c22_type}','${c22_reg_no}','${c22_date}','${c22_issue}','${c22_place}','Y','${last_modified_time}')`;
                                                                                                        db.query(
                                                                                                          sql,
                                                                                                          function () {
                                                                                                            var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c23_type}','${c23_reg_no}','${c23_date}','${c23_issue}','${c23_place}','Y','${last_modified_time}')`;
                                                                                                            db.query(
                                                                                                              sql,
                                                                                                              function () {
                                                                                                                var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c24_type}','${c24_reg_no}','${c24_date}','${c24_issue}','${c24_place}','Y','${last_modified_time}')`;
                                                                                                                db.query(
                                                                                                                  sql,
                                                                                                                  function () {
                                                                                                                    var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c25_type}','${c25_reg_no}','${c25_date}','${c25_issue}','${c25_place}','Y','${last_modified_time}')`;
                                                                                                                    db.query(
                                                                                                                      sql,
                                                                                                                      function () {
                                                                                                                        var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c26_type}','${c26_reg_no}','${c26_date}','${c26_issue}','${c26_place}','Y','${last_modified_time}')`;
                                                                                                                        db.query(
                                                                                                                          sql,
                                                                                                                          function () {
                                                                                                                            var sql = `insert into admintv_ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c27_type}','${c27_reg_no}','${c27_date}','${c27_issue}','${c27_place}','Y','${last_modified_time}')`;
                                                                                                                            db.query(
                                                                                                                              sql,
                                                                                                                              function () {
                                                                                                                                res.send(
                                                                                                                                  {
                                                                                                                                    cand_id:
                                                                                                                                      cand_id,
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
                                                      } else {
                                                        res.send({
                                                          cand_id: cand_id,
                                                        });
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
  } else {
    var cand_id = post.cand_id;
    var sql = `UPDATE admintv_ems.cand_profile_details SET name = '${name}', initial='${initial}', initial_expansion='${initial_expansion}',type_of_allotment='${type_of_allotment}', father_name='${father_name}', mother_name='${mother_name}', date_of_birth='${date_of_birth}', gender='${gender}', blood_group='${blood_group}', religion='${religion}', community='${community}', caste='${caste}', nationality='${nationality}', willing_to_donate_blood='${willing_to_donate_blood}', academic_year='${academic_year}',registered_time='${registered_time}', last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
    db.query(sql, function () {
      var sql = `UPDATE admintv_ems.cand_admission_details SET cand_name='${name}',rank_='${rank}',rank_no='${rank_no}',ar_no = '${ar_no}',total_mark = '${total_mark}',neet_mark = '${neet_mark}',reg_no = '${reg_no}',neet_roll_no = '${neet_roll_no}',course = '${course}',admission_type = '${admission_type}',admission_quota = '${admission_quota}',course_commencement = '${course_commencement}',date_of_admission = '${date_of_admission}',date_of_allotment = '${date_of_allotment}',selected_category = '${selected_category}',willing_for_counciling = '${willing_for_counciling}',student_code ='${student_code}',submitted ='${submitted}',hepatitis ='${hepatitis}',covid ='${covid}',last_modified_time ='${last_modified_time}' WHERE(cand_id = '${cand_id}')`;
      db.query(sql, function () {
        var sql = ` UPDATE admintv_ems.cand_address_details SET address_type='${address_type}', ps_address='${ps_address}', ps_pincode='${ps_pincode}', ps_state='${ps_state}', ps_district='${ps_district}', pm_address='${pm_address}', pm_pincode='${pm_pincode}', pm_state='${pm_state}', pm_district='${pm_district}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
        db.query(sql, function () {
          var sql = `UPDATE admintv_ems.cand_contact_details SET tel_phone ='${tel_phone}', mobile_phone='${mobile_phone}', email_id='${email_id}', aadhar_no='${aadhar_no}', voter_id='${voter_id}', remarks='${remarks}',last_modified_time='${last_modified_time}' WHERE(cand_id ='${cand_id}')`;
          db.query(sql, function () {
            res.send({ cand_id: cand_id });
          });
        });
      });
    });
  }
};
