const user = require("./user");

exports.edit_cand = function (req, res) {
  var message = "";

  var post = req.body;
  // console.log("post", post.user_details);
  var user_details = JSON.parse(post.user_details);
  var submit_type = post.action;
  var submitted;
  submit_type == "submitted"
    ? (submitted = "Yes")
    : submit_type == "saved"
    ? (submitted = "No")
    : null;
  var cand_id = post.cand_id;

  var hepatitis = post.hepatitis;
  var covid = post.covid;
  // profile tab
  var name = post.full_name;
  // console.table(post);
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

  //relieving details
  var relieved = post.relieved;
  var amount_refunded = post.amount_refunded;
  var date_of_relieving = post.date_of_relieving;
  var date_of_reallotment = post.date_of_reallotment;
  var college_name = post.college_name;
  var dt = new Date();
  var submit_date = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")}`;
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

  var aadhar = [];
  var passbook = [];
  var challan = [];
  var sq_challan = [];
  var allotment_order = [];
  var communityarr = [];
  var transfer = [];
  var migration = [];
  var eligiblity = [];
  var conduct = [];
  var nativity = [];
  var ten_pass = [];
  var ten_mark = [];
  var twelve_pass = [];
  var twelve_mark = [];
  var neet_hal = [];
  var neet_admit_card = [];
  var neet_score_card = [];
  var mbbs_first_mark = [];
  var mbbs_second_mark = [];
  var mbbs_third_mark = [];
  var mbbs_fourth_mark = [];
  var mbbs_crri = [];
  var mbbs_degree = [];
  var mbbs_pro_one = [];
  var mbbs_pro_two = [];
  var mbbs_register = [];
  var mbbs_attempt = [];
  var mbbs_course_cum = [];
  var mbbs_transfer = [];
  var diploma_degree = [];
  var diploma_pro = [];
  var diploma_register = [];
  var diploma_course_cum = [];
  var screening = [];
  var pan = [];
  var passport = [];
  var visa = [];
  var certificate_form = [];
  var admission_commitee_form = [];
  var suretyarr = [];
  var photosarr = [];
  var signarr = [];
  var thumbarr = [];
  var fingerarr = [];

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

  var myObj = req.files;
  // console.log(myObj);
  console.log("myobj:" + myObj.length);

  for (i in myObj) {
    if (myObj[i].fieldname.includes("n_cand_photo")) {
      var pcategory = "Photo";

      photosarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_cand_sign")) {
      var scategory = "Sign";
      signarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_cand_thumb")) {
      var tcategory = "Thumb";
      thumbarr.push(myObj[i]);
    }
    // else if(myObj[i].fieldname.includes('n_cand_finger'))
    // {

    //   fingerarr.push(myObj[i]);
    // }
    else if (myObj[i].fieldname.includes("surety")) {
      suretyarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("Certificate_Form")) {
      certificate_form.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("Admission_commitee_Form")) {
      admission_commitee_form.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("aadhar")) {
      aadhar.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("passbook")) {
      passbook.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("challan")) {
      challan.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("sq_challan")) {
      sq_challan.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("community")) {
      communityarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("transfer")) {
      transfer.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("conduct")) {
      conduct.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("eligibility")) {
      eligiblity.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("migration")) {
      migration.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("neet_hall_ticket")) {
      neet_hal.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("neet_score_card")) {
      neet_score_card.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("10th_mark")) {
      ten_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("10th_pass")) {
      ten_pass.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("12th_mark")) {
      twelve_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("12th_pass")) {
      twelve_pass.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("pan_card")) {
      pan.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("passport")) {
      passport.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("visa")) {
      visa.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("nativity")) {
      nativity.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("allotment_order")) {
      allotment_order.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("neet_admit_card")) {
      neet_admit_card.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_first_mark")) {
      mbbs_first_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_second_mark")) {
      mbbs_second_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_third_mark")) {
      mbbs_third_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_fourth_mark")) {
      mbbs_fourth_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_crri")) {
      mbbs_crri.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_degree")) {
      mbbs_degree.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_pro_one")) {
      mbbs_pro_one.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_pro_two")) {
      mbbs_pro_two.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_register")) {
      mbbs_register.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_attempt")) {
      mbbs_attempt.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_course_cum")) {
      mbbs_course_cum.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("mbbs_transfer")) {
      console.log(myObj[i]);
      mbbs_transfer.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("diploma_degree")) {
      diploma_degree.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("diploma_pro")) {
      diploma_pro.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("diploma_register")) {
      diploma_register.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("diploma_course_cum")) {
      diploma_course_cum.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("screening_test")) {
      screening.push(myObj[i]);
    } else {
      null;
    }

    var x = "";
    x += myObj[i].filename + "<br>";
  }

  var pcategory = "Photo";
  var scategory = "Sign";
  var tcategory = "Thumb";
  var active_flag = "Y";

  photosarr.length != 0
    ? photosarr.forEach((element) => {
        db.query(
          `update admintv_ems.biometric_details set cand_name = '${name}',Filename = '${element.buffer.toString(
            "base64"
          )}',last_modified_time = '${last_modified_time}' where cand_id = '${cand_id}' and category = '${pcategory}'`
        );
      })
    : null;
  signarr.length != 0
    ? signarr.forEach((element) => {
        db.query(
          `update admintv_ems.biometric_details set cand_name = '${name}',Filename = '${element.buffer.toString(
            "base64"
          )}',last_modified_time = '${last_modified_time}' where cand_id = '${cand_id}' and category = '${scategory}'`
        );
      })
    : null;
  thumbarr.length != 0
    ? thumbarr.forEach((element) => {
        db.query(
          `update admintv_ems.biometric_details set cand_name = '${name}',Filename = '${element.buffer.toString(
            "base64"
          )}',last_modified_time = '${last_modified_time}' where cand_id = '${cand_id}' and category = '${tcategory}'`
        );
      })
    : null;
  // fingerarr.forEach(element => {
  //   db.query("INSERT INTO admintv_ems.finger(cand_id,cand_name,cand_finger) VALUES ('"+ cand_id +"','"+ name +"','"+ element.filename+"')", function (err, data) {
  // });
  // });

  suretyarr.length != 0
    ? suretyarr.forEach((element) => {
        course_title == "MDMS"
          ? db.query(
              `update admintv_ems.surety_mdms set surety_File ='${element.buffer.toString(
                "base64"
              )}',file_name = '${
                element.originalname
              }',last_modified_time = '${last_modified_time}' where surety_id = '${cand_id}'`,
              (err, data) => {
                if (err) {
                  console.log(err);
                }
              }
            )
          : course_title == "AISSC"
          ? db.query(
              `update admintv_ems.surety_aissc set surety_File ='${element.buffer.toString(
                "base64"
              )}',file_name = '${
                element.originalname
              }',last_modified_time = '${last_modified_time}' where surety_id = '${cand_id}'`,
              (err, data) => {
                if (err) {
                  console.log(err);
                }
              }
            )
          : null;
      })
    : null;
  var cf_file = "";
  certificate_form.length != 0
    ? certificate_form.forEach((element) => {
        cf_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
          "base64"
        )}', certificate_files_name='${
          element.originalname
        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','Certificate_Form')`;
      })
    : null;
  db.query(cf_file, () => {
    var acf_file = "";
    admission_commitee_form.length != 0
      ? admission_commitee_form.forEach((element) => {
          acf_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
            "base64"
          )}', certificate_files_name='${
            element.originalname
          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','Admission_Commitee_Form')`;
        })
      : null;
    db.query(acf_file, () => {
      var aadhar_file = "";
      aadhar.length != 0
        ? aadhar.forEach((element) => {
            aadhar_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
              "base64"
            )}', certificate_files_name='${
              element.originalname
            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','aadhar')`;
          })
        : null;
      db.query(aadhar_file, () => {
        var passbook_file = "";
        passbook.length != 0
          ? passbook.forEach((element) => {
              passbook_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                "base64"
              )}', certificate_files_name='${
                element.originalname
              }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','passbook')`;
            })
          : null;
        db.query(passbook_file, () => {
          var challan_file = "";
          challan.length != 0
            ? challan.forEach((element) => {
                challan_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                  "base64"
                )}', certificate_files_name='${
                  element.originalname
                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','challan')`;
              })
            : null;
          db.query(challan_file, () => {
            var sq_challan_file = "";
            sq_challan.length != 0
              ? sq_challan.forEach((element) => {
                  sq_challan_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                    "base64"
                  )}', certificate_files_name='${
                    element.originalname
                  }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','sq_challan')`;
                })
              : null;
            db.query(sq_challan_file, () => {
              var community_file = "";
              communityarr.length != 0
                ? communityarr.forEach((element) => {
                    community_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                      "base64"
                    )}', certificate_files_name='${
                      element.originalname
                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','community')`;
                  })
                : null;
              db.query(community_file, () => {
                var transfer_file = "";
                transfer.length != 0
                  ? transfer.forEach((element) => {
                      transfer_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                        "base64"
                      )}', certificate_files_name='${
                        element.originalname
                      }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','transfer')`;
                    })
                  : null;
                db.query(transfer_file, () => {
                  var conduct_file = "";
                  conduct.length != 0
                    ? conduct.forEach((element) => {
                        conduct_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                          "base64"
                        )}', certificate_files_name='${
                          element.originalname
                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','conduct')`;
                      })
                    : null;
                  db.query(conduct_file, () => {
                    var eligibility_file = "";
                    eligiblity.length != 0
                      ? eligiblity.forEach((element) => {
                          eligibility_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                            "base64"
                          )}', certificate_files_name='${
                            element.originalname
                          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','eligibility')`;
                        })
                      : null;
                    db.query(eligibility_file, () => {
                      var migration_file = "";
                      migration.length != 0
                        ? migration.forEach((element) => {
                            migration_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                              "base64"
                            )}', certificate_files_name='${
                              element.originalname
                            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','migration')`;
                          })
                        : null;
                      db.query(migration_file, () => {
                        var neet_hal_file = "";
                        neet_hal.length != 0
                          ? neet_hal.forEach((element) => {
                              neet_hal_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                "base64"
                              )}', certificate_files_name='${
                                element.originalname
                              }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','neet_hall_ticket')`;
                            })
                          : null;
                        db.query(neet_hal_file, () => {
                          var neet_score_file = "";
                          neet_score_card.length != 0
                            ? neet_score_card.forEach((element) => {
                                (neet_score_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                  "base64"
                                )}', certificate_files_name='${
                                  element.originalname
                                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','neet_score_card')`),
                                  (err, data) => {
                                    if (err) console.log(err);
                                  };
                              })
                            : null;
                          db.query(neet_score_file, () => {
                            var ten_mark_file = "";
                            ten_mark.length != 0
                              ? ten_mark.forEach((element) => {
                                  ten_mark_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                    "base64"
                                  )}', certificate_files_name='${
                                    element.originalname
                                  }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','ten_mark')`;
                                })
                              : null;
                            db.query(ten_mark_file, () => {
                              var ten_pass_file = "";
                              ten_pass.length != 0
                                ? ten_pass.forEach((element) => {
                                    ten_pass_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                      "base64"
                                    )}', certificate_files_name='${
                                      element.originalname
                                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','ten_pass')`;
                                  })
                                : null;
                              db.query(ten_pass_file, () => {
                                var twelve_mark_file = "";
                                twelve_mark.length != 0
                                  ? twelve_mark.forEach((element) => {
                                      twelve_mark_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                        "base64"
                                      )}', certificate_files_name='${
                                        element.originalname
                                      }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','twelve_mark')`;
                                    })
                                  : null;
                                db.query(twelve_mark_file, () => {
                                  var twelve_pass_file = "";
                                  twelve_pass.length != 0
                                    ? twelve_pass.forEach((element) => {
                                        twelve_pass_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                          "base64"
                                        )}', certificate_files_name='${
                                          element.originalname
                                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','twelve_pass')`;
                                      })
                                    : null;
                                  db.query(twelve_pass_file, () => {
                                    var pan_file = "";
                                    pan.length != 0
                                      ? pan.forEach((element) => {
                                          pan_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                            "base64"
                                          )}', certificate_files_name='${
                                            element.originalname
                                          }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','pan_card')`;
                                        })
                                      : null;
                                    db.query(pan_file, () => {
                                      var passport_file = "";
                                      passport.length != 0
                                        ? passport.forEach((element) => {
                                            passport_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                              "base64"
                                            )}', certificate_files_name='${
                                              element.originalname
                                            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','passport')`;
                                          })
                                        : null;
                                      db.query(passport_file, () => {
                                        var visa_file = "";
                                        visa.length != 0
                                          ? visa.forEach((element) => {
                                              visa_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                "base64"
                                              )}', certificate_files_name='${
                                                element.originalname
                                              }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','visa')`;
                                            })
                                          : null;
                                        db.query(visa_file, () => {
                                          var nativity_file = "";
                                          nativity.length != 0
                                            ? nativity.forEach((element) => {
                                                nativity_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                  "base64"
                                                )}', certificate_files_name='${
                                                  element.originalname
                                                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','nativity')`;
                                              })
                                            : null;
                                          db.query(nativity_file, () => {
                                            var allotment_file = "";
                                            allotment_order.length != 0
                                              ? allotment_order.forEach(
                                                  (element) => {
                                                    allotment_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                      "base64"
                                                    )}', certificate_files_name='${
                                                      element.originalname
                                                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','allotment_order')`;
                                                  }
                                                )
                                              : null;
                                            db.query(allotment_file, () => {
                                              var neet_admit_file = "";
                                              neet_admit_card.length != 0
                                                ? neet_admit_card.forEach(
                                                    (element) => {
                                                      neet_admit_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                        "base64"
                                                      )}', certificate_files_name='${
                                                        element.originalname
                                                      }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','neet_admit_card')`;
                                                    }
                                                  )
                                                : null;
                                              db.query(neet_admit_file, () => {
                                                var mbbs_first_file = "";
                                                mbbs_first_mark.length != 0
                                                  ? mbbs_first_mark.forEach(
                                                      (element) => {
                                                        mbbs_first_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                          "base64"
                                                        )}', certificate_files_name='${
                                                          element.originalname
                                                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_first_mark')`;
                                                      }
                                                    )
                                                  : null;
                                                db.query(
                                                  mbbs_first_file,
                                                  () => {
                                                    var mbbs_second_file = "";
                                                    mbbs_second_mark.length != 0
                                                      ? mbbs_second_mark.forEach(
                                                          (element) => {
                                                            mbbs_second_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                              "base64"
                                                            )}', certificate_files_name='${
                                                              element.originalname
                                                            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_second_mark')`;
                                                          }
                                                        )
                                                      : null;
                                                    db.query(
                                                      mbbs_second_file,
                                                      () => {
                                                        var mbbs_third_file =
                                                          "";
                                                        mbbs_third_mark.length !=
                                                        0
                                                          ? mbbs_third_mark.forEach(
                                                              (element) => {
                                                                mbbs_third_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                  "base64"
                                                                )}', certificate_files_name='${
                                                                  element.originalname
                                                                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_third_mark')`;
                                                              }
                                                            )
                                                          : null;
                                                        db.query(
                                                          mbbs_third_file,
                                                          () => {
                                                            var mbbs_fourth_file =
                                                              "";
                                                            mbbs_fourth_mark.length !=
                                                            0
                                                              ? mbbs_fourth_mark.forEach(
                                                                  (element) => {
                                                                    mbbs_fourth_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                      "base64"
                                                                    )}', certificate_files_name='${
                                                                      element.originalname
                                                                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_fourth_mark')`;
                                                                  }
                                                                )
                                                              : null;
                                                            db.query(
                                                              mbbs_fourth_file,
                                                              () => {
                                                                var mbbs_crri_file =
                                                                  "";
                                                                mbbs_crri.length !=
                                                                0
                                                                  ? mbbs_crri.forEach(
                                                                      (
                                                                        element
                                                                      ) => {
                                                                        mbbs_crri_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                          "base64"
                                                                        )}', certificate_files_name='${
                                                                          element.originalname
                                                                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_crri')`;
                                                                      }
                                                                    )
                                                                  : null;
                                                                db.query(
                                                                  mbbs_crri_file,
                                                                  () => {
                                                                    var mbbs_degree_file =
                                                                      "";
                                                                    mbbs_degree.length !=
                                                                    0
                                                                      ? mbbs_degree.forEach(
                                                                          (
                                                                            element
                                                                          ) => {
                                                                            mbbs_degree_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                              "base64"
                                                                            )}', certificate_files_name='${
                                                                              element.originalname
                                                                            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_degree')`;
                                                                          }
                                                                        )
                                                                      : null;

                                                                    db.query(
                                                                      mbbs_degree_file,
                                                                      () => {
                                                                        var mbbs_pro_one_file =
                                                                          "";
                                                                        mbbs_pro_one.length !=
                                                                        0
                                                                          ? mbbs_pro_one.forEach(
                                                                              (
                                                                                element
                                                                              ) => {
                                                                                mbbs_pro_one_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                  "base64"
                                                                                )}', certificate_files_name='${
                                                                                  element.originalname
                                                                                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_pro_one')`;
                                                                              }
                                                                            )
                                                                          : null;
                                                                        db.query(
                                                                          mbbs_pro_one_file,
                                                                          () => {
                                                                            var mbbs_pro_two_file =
                                                                              "";
                                                                            mbbs_pro_two.length !=
                                                                            0
                                                                              ? mbbs_pro_two.forEach(
                                                                                  (
                                                                                    element
                                                                                  ) => {
                                                                                    mbbs_pro_two_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                      "base64"
                                                                                    )}', certificate_files_name='${
                                                                                      element.originalname
                                                                                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_pro_two')`;
                                                                                  }
                                                                                )
                                                                              : null;

                                                                            db.query(
                                                                              mbbs_pro_two_file,
                                                                              () => {
                                                                                var mbbs_register_file =
                                                                                  "";
                                                                                mbbs_register.length !=
                                                                                0
                                                                                  ? mbbs_register.forEach(
                                                                                      (
                                                                                        element
                                                                                      ) => {
                                                                                        mbbs_register_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                          "base64"
                                                                                        )}', certificate_files_name='${
                                                                                          element.originalname
                                                                                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_register')`;
                                                                                      }
                                                                                    )
                                                                                  : null;
                                                                                db.query(
                                                                                  mbbs_register_file,
                                                                                  () => {
                                                                                    var mbbs_attempt_file =
                                                                                      "";
                                                                                    mbbs_attempt.length !=
                                                                                    0
                                                                                      ? mbbs_attempt.forEach(
                                                                                          (
                                                                                            element
                                                                                          ) => {
                                                                                            mbbs_attempt_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                              "base64"
                                                                                            )}', certificate_files_name='${
                                                                                              element.originalname
                                                                                            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_attempt')`;
                                                                                          }
                                                                                        )
                                                                                      : null;

                                                                                    db.query(
                                                                                      mbbs_attempt_file,
                                                                                      () => {
                                                                                        var mbbs_course_cum_file =
                                                                                          "";
                                                                                        mbbs_course_cum.length !=
                                                                                        0
                                                                                          ? mbbs_course_cum.forEach(
                                                                                              (
                                                                                                element
                                                                                              ) => {
                                                                                                mbbs_course_cum_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                  "base64"
                                                                                                )}', certificate_files_name='${
                                                                                                  element.originalname
                                                                                                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_course_cum')`;
                                                                                              }
                                                                                            )
                                                                                          : null;
                                                                                        db.query(
                                                                                          mbbs_course_cum_file,
                                                                                          () => {
                                                                                            var mbbs_transfer_file =
                                                                                              "";
                                                                                            mbbs_transfer.length !=
                                                                                            0
                                                                                              ? mbbs_transfer.forEach(
                                                                                                  (
                                                                                                    element
                                                                                                  ) => {
                                                                                                    mbbs_transfer_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                      "base64"
                                                                                                    )}', certificate_files_name='${
                                                                                                      element.originalname
                                                                                                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','mbbs_transfer')`;
                                                                                                  }
                                                                                                )
                                                                                              : null;
                                                                                            db.query(
                                                                                              mbbs_transfer_file,
                                                                                              () => {
                                                                                                var diploma_degree_file =
                                                                                                  "";
                                                                                                diploma_degree.length !=
                                                                                                0
                                                                                                  ? diploma_degree.forEach(
                                                                                                      (
                                                                                                        element
                                                                                                      ) => {
                                                                                                        diploma_degree_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                          "base64"
                                                                                                        )}', certificate_files_name='${
                                                                                                          element.originalname
                                                                                                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','diploma_degree')`;
                                                                                                      }
                                                                                                    )
                                                                                                  : null;
                                                                                                db.query(
                                                                                                  diploma_degree_file,
                                                                                                  () => {
                                                                                                    var diploma_pro_file =
                                                                                                      "";
                                                                                                    diploma_pro.length !=
                                                                                                    0
                                                                                                      ? diploma_pro.forEach(
                                                                                                          (
                                                                                                            element
                                                                                                          ) => {
                                                                                                            diploma_pro_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                              "base64"
                                                                                                            )}', certificate_files_name='${
                                                                                                              element.originalname
                                                                                                            }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','diploma_pro')`;
                                                                                                          }
                                                                                                        )
                                                                                                      : null;
                                                                                                    db.query(
                                                                                                      diploma_pro_file,
                                                                                                      () => {
                                                                                                        var diploma_register_file =
                                                                                                          "";
                                                                                                        diploma_register.length !=
                                                                                                        0
                                                                                                          ? diploma_register.forEach(
                                                                                                              (
                                                                                                                element
                                                                                                              ) => {
                                                                                                                diploma_register_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                                  "base64"
                                                                                                                )}', certificate_files_name='${
                                                                                                                  element.originalname
                                                                                                                }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','diploma_register')`;
                                                                                                              }
                                                                                                            )
                                                                                                          : null;
                                                                                                        db.query(
                                                                                                          diploma_register_file,
                                                                                                          () => {
                                                                                                            var diploma_course_cum_file =
                                                                                                              "";
                                                                                                            diploma_course_cum.length !=
                                                                                                            0
                                                                                                              ? diploma_course_cum.forEach(
                                                                                                                  (
                                                                                                                    element
                                                                                                                  ) => {
                                                                                                                    diploma_course_cum_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                                      "base64"
                                                                                                                    )}', certificate_files_name='${
                                                                                                                      element.originalname
                                                                                                                    }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','diploma_course_cum')`;
                                                                                                                  }
                                                                                                                )
                                                                                                              : null;
                                                                                                            db.query(
                                                                                                              diploma_course_cum_file,
                                                                                                              () => {
                                                                                                                var screening_test_file =
                                                                                                                  "";
                                                                                                                screening.length !=
                                                                                                                0
                                                                                                                  ? screening.forEach(
                                                                                                                      (
                                                                                                                        element
                                                                                                                      ) => {
                                                                                                                        screening_test_file += `update admintv_ems.certificate_files set certificate_files = '${element.buffer.toString(
                                                                                                                          "base64"
                                                                                                                        )}', certificate_files_name='${
                                                                                                                          element.originalname
                                                                                                                        }', last_modified_time='${last_modified_time}' where (cand_id, certificate_type) = ('${cand_id}','screening_test')`;
                                                                                                                      }
                                                                                                                    )
                                                                                                                  : null;
                                                                                                                db.query(
                                                                                                                  screening_test_file,
                                                                                                                  () => {}
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
            });
          });
        });
      });
    });
  });
  var sql = `UPDATE admintv_ems.cand_profile_details SET name = '${name}', initial='${initial}', initial_expansion='${initial_expansion}',type_of_allotment='${type_of_allotment}', father_name='${father_name}', mother_name='${mother_name}', date_of_birth='${date_of_birth}', gender='${gender}', blood_group='${blood_group}', religion='${religion}', community='${community}', caste='${caste}', nationality='${nationality}', willing_to_donate_blood='${willing_to_donate_blood}', academic_year='${academic_year}',registered_time='${registered_time}', last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
  db.query(sql, function (err, data) {
    var sql = `UPDATE admintv_ems.cand_admission_details SET cand_name='${name}',rank_='${rank}',rank_no='${rank_no}',ar_no = '${ar_no}',total_mark = '${total_mark}',neet_mark = '${neet_mark}',reg_no = '${reg_no}',neet_roll_no = '${neet_roll_no}',course = '${course}',admission_type = '${admission_type}',admission_quota = '${admission_quota}',course_commencement = '${course_commencement}',date_of_admission = '${date_of_admission}',date_of_allotment = '${date_of_allotment}',selected_category = '${selected_category}',willing_for_counciling = '${willing_for_counciling}',student_code ='${student_code}',submitted ='${submitted}',hepatitis ='${hepatitis}',covid ='${covid}',last_modified_time ='${last_modified_time}' WHERE(cand_id = '${cand_id}')`;
    db.query(sql, function (err, data) {
      var sql = ` UPDATE admintv_ems.cand_address_details SET address_type='${address_type}', ps_address='${ps_address}', ps_pincode='${ps_pincode}', ps_state='${ps_state}', ps_district='${ps_district}', pm_address='${pm_address}', pm_pincode='${pm_pincode}', pm_state='${pm_state}', pm_district='${pm_district}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
      db.query(sql, function () {
        var sql = `UPDATE admintv_ems.cand_contact_details SET tel_phone ='${tel_phone}', mobile_phone='${mobile_phone}', email_id='${email_id}', aadhar_no='${aadhar_no}', voter_id='${voter_id}', remarks='${remarks}',last_modified_time='${last_modified_time}' WHERE(cand_id ='${cand_id}')`;
        db.query(sql, function () {
          var sql = `UPDATE admintv_ems.cand_institute_details_mdms SET name='${institute_name}',post='${college_post}',amount_of_agreement ='${amount_of_agreement}',period_of_agreement='${period_of_agreement}',last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
          db.query(sql, function () {
            var sql = `UPDATE admintv_ems.cand_academic_mdms SET mbbs_name ='${mbbs_name}', mbbs_place='${mbbs_place}', mbbs_district='${mbbs_district}', mbbs_state='${mbbs_state}', mbbs_university='${mbbs_university}', mbbs_marksheet_no='${mbbs_marksheet_no}', mbbs_passing_month='${mbbs_passing_month}', mbbs_passing_year='${mbbs_passing_year}', mbbs_speciality='${mbbs_speciality}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
            db.query(sql, function () {
              var sql = `UPDATE admintv_ems.cand_academic_mdms_1 SET pg_diplamo_name='${pg_diplamo_name}', pg_diplamo_place='${pg_diplamo_place}', pg_diplamo_district='${pg_diplamo_district}', pg_diplamo_state='${pg_diplamo_state}', pg_diplamo_university='${pg_diplamo_university}', pg_diplamo_marksheet_no='${pg_diplamo_marksheet_no}', pg_diplamo_passing_month='${pg_diplamo_passing_month}', pg_diplamo_passing_year='${pg_diplamo_passing_year}', pg_diplamo_speciality ='${pg_diplamo_speciality}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
              db.query(sql, function () {
                var sql = `UPDATE admintv_ems.cand_academic_mdms_2 SET mdms_name ='${mdms_name}', mdms_place='${mdms_place}', mdms_district='${mdms_district}', mdms_state='${mdms_state}', mdms_university='${mdms_university}', mdms_marksheet_no='${mdms_marksheet_no}', mdms_passing_month='${mdms_passing_month}', mdms_passing_year='${mdms_passing_year}', mdms_speciality='${mdms_speciality}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
                db.query(sql, function () {
                  var sql = `UPDATE admintv_ems.cand_neet_marks_mdms SET mbbs_marks='${mbbs_marks}', pg_diplamo_marks='${pg_diplamo_marks}', mdms_marks ='${mdms_marks}', neet_percentile ='${neet_percentile}',last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
                  db.query(sql, function () {
                    var sql = `UPDATE admintv_ems.cand_bank_details SET account_name='${account_name}', account_no = '${account_no}', bank_name = '${bank_name}', branch_name = '${branch_name}', ifsc = '${ifsc}', micr = '${micr}', pan_no = '${pan_no}',transaction_id ='${transaction_id}',name_of_bank='${name_of_bank}',name_of_branch='${name_of_branch}',amount_paid='${amount_paid}',payment_date='${payment_date}',sq_amount_paid='${sq_amount_paid}',sq_payment_date='${sq_payment_date}',last_modified_time='${last_modified_time}' WHERE(cand_id = '${cand_id}')`;
                    db.query(sql, function () {
                      var sql = `UPDATE admintv_ems.cand_surety_details SET  surety_one_name = '${surety_one_name}', surety_one_aadhaar = '${surety_one_aadhaar}', surety_one_pan = '${surety_one_pan}', surety_one_address = '${surety_one_address}', surety_two_name = '${surety_two_name}', surety_two_aadhaar = '${surety_two_aadhaar}', surety_two_pan = '${surety_two_pan}', surety_two_address = '${surety_two_address}', surety_three_name = '${surety_three_name}', surety_three_aadhaar ='${surety_three_aadhaar}', surety_three_pan ='${surety_three_pan}', surety_three_address ='${surety_three_address}',last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
                      db.query(sql, function () {
                        var sql = `UPDATE admintv_ems.cand_relieving_details SET relieved = '${relieved}',amount_refunded = '${amount_refunded}',date_of_relieving = '${date_of_relieving}',date_of_reallotment = '${date_of_reallotment}',college_name = '${college_name}',last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
                        db.query(sql, function () {
                          var sql = `UPDATE admintv_ems.cand_institute_details SET institute_name ='${institute_name.replace(
                            "'",
                            "''"
                          )}', place ='${place}', district='${district}', state='${state}', relieving_date='${relieving_date}', duration='${duration}', exam_passed='${exam_passed}', register_no='${register_no}', month_of_passing='${month_of_passing}', year_of_passing='${year_of_passing}', board='${board}', last_modified_time='${last_modified_time}' WHERE (cand_id='${cand_id}')`;
                          db.query(sql, function (err) {
                            console.log(err);
                            var sql = `UPDATE admintv_ems.cand_neet_mark_details SET phy_mark='${phy_neet_mark}', phy_max_mark='${phy_neet_max}', chem_mark='${chem_neet_mark}', chem_max_mark='${chem_neet_max}', bio_mark='${bio_neet_mark}', bio_max_mark='${bio_neet_max}', agg_mark='${agg_neet_mark}', agg_max_mark='${agg_neet_max}', last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
                            db.query(sql, function () {
                              var sql = `UPDATE admintv_ems.cand_marks_details SET lang_theory='${lang_theory}', lang_practical='${lang_practical}', lang_internal='${lang_internal}', lang_total='${lang_total}', lang_max='${lang_max}', eng_theory='${eng_theory}', eng_practical='${eng_practical}', eng_internal='${eng_internal}', eng_total='${eng_total}', eng_max='${eng_max}', mat_theory='${mat_theory}', mat_practical='${mat_practical}', mat_internal='${mat_internal}', mat_total='${mat_total}', mat_max='${mat_max}', phy_theory='${phy_theory}', phy_practical='${phy_practical}', phy_internal='${phy_internal}', phy_total='${phy_total}', phy_max='${phy_max}', chem_theory='${chem_theory}', chem_practical='${chem_practical}', chem_internal='${chem_internal}', chem_total='${chem_total}', chem_max='${chem_max}', bio_theory='${bio_theory}', bio_practical='${bio_practical}', bio_internal='${bio_internal}', bio_total='${bio_total}', bio_max='${bio_max}', bot_theory='${bot_theory}', bot_practical='${bot_practical}', bot_internal='${bot_internal}', bot_total='${bot_total}',bot_max='${bot_max}', zoo_theory='${zoo_theory}', zoo_practical='${zoo_practical}', zoo_internal='${zoo_internal}', zoo_total='${zoo_total}', zoo_max='${zoo_max}', lang_paper='${lang_paper}', subj_code='${subj_code}', total_mark='${total_mark_m}', max_mark='${max_mark}',percentage='${percentage}' WHERE (cand_id = '${cand_id}')`;
                              db.query(sql, function () {
                                // ----------certificate details---------
                                var sql = `update admintv_ems.certificate_details set  reg_no = '${c1_reg_no}', date = '${c1_date}', issue = '${c1_issue}', place ='${c1_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c1_type}')`;
                                db.query(sql, function () {
                                  var sql = `update admintv_ems.certificate_details set  reg_no = '${c2_reg_no}', date = '${c2_date}', issue = '${c2_issue}', place ='${c2_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c2_type}')`;
                                  db.query(sql, function () {
                                    var sql = `update admintv_ems.certificate_details set  reg_no = '${c3_reg_no}', date = '${c3_date}', issue = '${c3_issue}', place ='${c3_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c3_type}')`;
                                    db.query(sql, function () {
                                      var sql = `update admintv_ems.certificate_details set  reg_no = '${c4_reg_no}', date = '${c4_date}', issue = '${c4_issue}', place ='${c4_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c4_type}')`;
                                      db.query(sql, function () {
                                        var sql = `update admintv_ems.certificate_details set  reg_no = '${c5_reg_no}', date = '${c5_date}', issue = '${c5_issue}', place ='${c5_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c5_type}')`;
                                        db.query(sql, function () {
                                          var sql = `update admintv_ems.certificate_details set  reg_no = '${c6_reg_no}', date = '${c6_date}', issue = '${c6_issue}', place ='${c6_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c6_type}')`;
                                          db.query(sql, function () {
                                            var sql = `update admintv_ems.certificate_details set  reg_no = '${c7_reg_no}', date = '${c7_date}', issue = '${c7_issue}', place ='${c7_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c7_type}')`;
                                            db.query(sql, function () {
                                              var sql = `update admintv_ems.certificate_details set  reg_no = '${c8_reg_no}', date = '${c8_date}', issue = '${c8_issue}', place ='${c8_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c8_type}')`;
                                              db.query(sql, function () {
                                                var sql = `update admintv_ems.certificate_details set  reg_no = '${c9_reg_no}', date = '${c9_date}', issue = '${c9_issue}', place ='${c9_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c9_type}')`;
                                                db.query(sql, function () {
                                                  var sql = `update admintv_ems.certificate_details set  reg_no = '${c10_reg_no}', date = '${c10_date}', issue = '${c10_issue}', place ='${c10_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c10_type}')`;
                                                  db.query(sql, function () {
                                                    var sql = `update admintv_ems.certificate_details set  reg_no = '${c11_reg_no}', date = '${c11_date}', issue = '${c11_issue}', place ='${c11_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c11_type}')`;
                                                    db.query(sql, function () {
                                                      var sql = `update admintv_ems.certificate_details set  reg_no = '${c12_reg_no}', date = '${c12_date}', issue = '${c12_issue}', place ='${c12_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c12_type}')`;
                                                      db.query(
                                                        sql,
                                                        function () {
                                                          var sql = `update admintv_ems.certificate_details set  reg_no = '${c13_reg_no}', date = '${c13_date}', issue = '${c13_issue}', place ='${c13_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c13_type}')`;
                                                          db.query(
                                                            sql,
                                                            function () {
                                                              var sql = `update admintv_ems.certificate_details set  reg_no = '${c14_reg_no}', date = '${c14_date}', issue = '${c14_issue}', place ='${c14_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c14_type}')`;
                                                              db.query(
                                                                sql,
                                                                function () {
                                                                  var sql = `update admintv_ems.certificate_details set  reg_no = '${c15_reg_no}', date = '${c15_date}', issue = '${c15_issue}', place ='${c15_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c15_type}')`;
                                                                  db.query(
                                                                    sql,
                                                                    function () {
                                                                      var sql = `update admintv_ems.certificate_details set  reg_no = '${c16_reg_no}', date = '${c16_date}', issue = '${c16_issue}', place ='${c16_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c16_type}')`;
                                                                      db.query(
                                                                        sql,
                                                                        function () {
                                                                          var sql = `update admintv_ems.certificate_details set  reg_no = '${c17_reg_no}', date = '${c17_date}', issue = '${c17_issue}', place ='${c17_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c17_type}')`;
                                                                          db.query(
                                                                            sql,
                                                                            function () {
                                                                              var sql = `update admintv_ems.certificate_details set  reg_no = '${c18_reg_no}', date = '${c18_date}', issue = '${c18_issue}', place ='${c18_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c18_type}')`;
                                                                              db.query(
                                                                                sql,
                                                                                function () {
                                                                                  var sql = `update admintv_ems.certificate_details set  reg_no = '${c19_reg_no}', date = '${c19_date}', issue = '${c19_issue}', place ='${c19_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c19_type}')`;
                                                                                  db.query(
                                                                                    sql,
                                                                                    function () {
                                                                                      var sql = `update admintv_ems.certificate_details set  reg_no = '${c20_reg_no}', date = '${c20_date}', issue = '${c20_issue}', place ='${c20_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c20_type}')`;
                                                                                      db.query(
                                                                                        sql,
                                                                                        function () {
                                                                                          var sql = `update admintv_ems.certificate_details set  reg_no = '${c21_reg_no}', date = '${c21_date}', issue = '${c21_issue}', place ='${c21_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c21_type}')`;
                                                                                          db.query(
                                                                                            sql,
                                                                                            function () {
                                                                                              var sql = `update admintv_ems.certificate_details set  reg_no = '${c22_reg_no}', date = '${c22_date}', issue = '${c22_issue}', place ='${c22_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c22_type}')`;
                                                                                              db.query(
                                                                                                sql,
                                                                                                function () {
                                                                                                  var sql = `update admintv_ems.certificate_details set  reg_no = '${c23_reg_no}', date = '${c23_date}', issue = '${c23_issue}', place ='${c23_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c23_type}')`;
                                                                                                  db.query(
                                                                                                    sql,
                                                                                                    function () {
                                                                                                      var sql = `update admintv_ems.certificate_details set  reg_no = '${c24_reg_no}', date = '${c24_date}', issue = '${c24_issue}', place ='${c24_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c24_type}')`;
                                                                                                      db.query(
                                                                                                        sql,
                                                                                                        function () {
                                                                                                          var sql = `update admintv_ems.certificate_details set  reg_no = '${c25_reg_no}', date = '${c25_date}', issue = '${c25_issue}', place ='${c25_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c25_type}')`;
                                                                                                          db.query(
                                                                                                            sql,
                                                                                                            function () {
                                                                                                              var sql = `update admintv_ems.certificate_details set  reg_no = '${c26_reg_no}', date = '${c26_date}', issue = '${c26_issue}', place ='${c26_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c26_type}')`;
                                                                                                              db.query(
                                                                                                                sql,
                                                                                                                function () {
                                                                                                                  var sql = `update admintv_ems.certificate_details set  reg_no = '${c27_reg_no}', date = '${c27_date}', issue = '${c27_issue}', place ='${c27_place}', active_flag = 'Y', last_modified_time = '${last_modified_time}' where (cand_id,all_certificate) = ('${cand_id}','${c27_type}')`;
                                                                                                                  db.query(
                                                                                                                    sql,
                                                                                                                    function () {
                                                                                                                      if (
                                                                                                                        user_details.user_type ==
                                                                                                                          "Public" &&
                                                                                                                        submitted ==
                                                                                                                          "Yes"
                                                                                                                      ) {
                                                                                                                        var sql1 = `update admintv_ems.cand_admission_details set submit_date = '${submit_date}' where cand_id = '${cand_id}'`;
                                                                                                                        db.query(
                                                                                                                          sql1,
                                                                                                                          () => {
                                                                                                                            var sql = `select cand_id,course from admintv_ems.user_details where user_name = '${user_details.user_name}' and password = '${user_details.password}'`;
                                                                                                                            db.query(
                                                                                                                              sql,
                                                                                                                              (
                                                                                                                                err,
                                                                                                                                cand_id
                                                                                                                              ) => {
                                                                                                                                var sql_1 = `SELECT admintv_ems.cand_admission_details.cand_id,cand_name,course,name_of_bank,amount_paid,transaction_id,mobile_phone,submit_date FROM admintv_ems.cand_admission_details
                                                                                                                                                    inner join admintv_ems.cand_relieving_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
                                                                                                                                                    inner join admintv_ems.cand_bank_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_bank_details.cand_id
                                                                                                                                                    inner join admintv_ems.cand_contact_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_contact_details.cand_id
                                                                                                                                                    where (course_title,active_status,relieved ,admintv_ems.cand_admission_details.cand_id) = ('${cand_id[0].course}','Yes','No','${cand_id[0].cand_id}')`;

                                                                                                                                db.query(
                                                                                                                                  sql_1,
                                                                                                                                  function (
                                                                                                                                    err,
                                                                                                                                    data
                                                                                                                                  ) {
                                                                                                                                    console.log(
                                                                                                                                      data
                                                                                                                                    );
                                                                                                                                    res.render(
                                                                                                                                      "receipt.ejs",
                                                                                                                                      {
                                                                                                                                        userData:
                                                                                                                                          data,
                                                                                                                                      }
                                                                                                                                    );
                                                                                                                                  }
                                                                                                                                );
                                                                                                                              }
                                                                                                                            );
                                                                                                                          }
                                                                                                                        );
                                                                                                                      } else {
                                                                                                                        user.all_boards(
                                                                                                                          req,
                                                                                                                          res
                                                                                                                        );
                                                                                                                      }
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
