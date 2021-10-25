exports.random_report = (req, res) => {
  var sql = `select distinct academic_year from admintv_ems.cand_profile_details where academic_year != ''`;
  db.query(sql, (err, academic_year) => {
    var sql = `select distinct course from admintv_ems.cand_admission_details`;
    db.query(sql, (err, course) => {
      var sql = `SELECT * FROM admintv_ems.community_details`;
      db.query(sql, function (err, data6) {
        res.render("report.ejs", {
          message: "",
          userData: "",
          userData3: "",
          userData4: "",
          userData5: "",
          userData7: "",
          userData8: "",
          userData10: "",
          userData27: "",
          userData30: "",
          userData6: data6,
          course: course,
          academic_year: academic_year,
        });
      });
    });
  });
};

exports.random_reports = (req, res) => {
  var data = JSON.parse(req.body.data);

  var course = data.course;
  var academic_year = data.academic_year;
  var community = data.community;
  var blood_group = data.blood_group;
  var gender = data.gender;
  var religion = data.religion;
  var admission_type = data.admission_type;
  var admission_quota = data.admission_quota;
  var columns = data.columns;

  var columns_ = new Array();
  for (i in columns) {
    columns_.push(`${columns[i]} as column_${Number(i) + 1}`);
  }

  // left join admintv_ems.certificate_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.certificate_details.cand_id
  var sql = `SELECT ${columns_.join(
    ","
  )} FROM admintv_ems.cand_admission_details
            left join admintv_ems.cand_academic_mdms on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_academic_mdms.cand_id
            left join admintv_ems.cand_academic_mdms_1 on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_academic_mdms_1.cand_id
            left join admintv_ems.cand_academic_mdms_2 on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_academic_mdms_2.cand_id
            left join admintv_ems.cand_address_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_address_details.cand_id
            left join admintv_ems.cand_bank_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_bank_details.cand_id
            left join admintv_ems.cand_contact_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_contact_details.cand_id
            left join admintv_ems.cand_institute_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_institute_details.cand_id
            left join admintv_ems.cand_institute_details_mdms on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_institute_details_mdms.cand_id
            left join admintv_ems.cand_marks_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_marks_details.cand_id
            left join admintv_ems.cand_neet_mark_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_neet_mark_details.cand_id
            left join admintv_ems.cand_neet_marks_mdms on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_neet_marks_mdms.cand_id
            left join admintv_ems.cand_profile_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_profile_details.cand_id
            left join admintv_ems.cand_relieving_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
            left join admintv_ems.cand_surety_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_surety_details.cand_id

            where course in ('${course.join(
              "','"
            )}') and academic_year in ('${academic_year.join(
    "','"
  )}') and gender in ('${gender.join(
    "','"
  )}') and blood_group in ('${blood_group.join("','")}') and
            religion in ('${religion.join(
              "','"
            )}') and community in ('${community.join(
    "','"
  )}') and admission_type in ('${admission_type.join(
    "','"
  )}') and admission_quota in ('${admission_quota.join(
    "','"
  )}') and relieved = 'No' order by cand_name`;
  // console.log(sql);
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
    }
    // for (i in data) {
    //   console.log(Object.values(data[i]).length);
    // }
    res.send(data);
  });
};

exports.report_print = (req, res) => {
  var title = req.body.report_title;
  var values = JSON.parse(req.body.report_value);

  // console.log(Object.keys(values[0]));
  var keys = Object.keys(values[0]);

  var table = `<table><thead>`;
  table += `<th>S.no</th>`;
  for (var i = 0; i < keys.length; i++) {
    table += `<th>${keys[i]}</th>`;
  }
  table += `</thead><tbody>`;
  for (var j = 0; j < values.length; j++) {
    table += `<tr><td>${j + 1}</td>`;
    for (var k = 0; k < keys.length; k++) {
      table += `<td>${values[j][keys[k]]}</td>`;
    }
    table += `</tr>`;
  }
  table += `</tbody></table>`;
  res.render("report_page.ejs", {
    title: title,
    keys: keys,
    values: values,
  });
};

exports.approve_page = (req, res) => {
  var sql = `select distinct academic_year from admintv_ems.cand_profile_details where academic_year != ''`;
  db.query(sql, (err, academic_year) => {
    var sql = `select distinct course from admintv_ems.cand_admission_details`;
    db.query(sql, (err, course) => {
      var sql = `SELECT * FROM admintv_ems.community_details`;
      db.query(sql, function (err, data6) {
        res.render("approve.ejs", {
          message: "",
          userData: "",
          userData3: "",
          userData4: "",
          userData5: "",
          userData7: "",
          userData8: "",
          userData10: "",
          userData27: "",
          userData30: "",
          userData6: data6,
          course: course,
          academic_year: academic_year,
        });
      });
    });
  });
};

exports.approve_search = (req, res) => {
  var data = JSON.parse(req.body.data);

  var course = data.course;
  var academic_year = data.academic_year;

  var sql = `select admintv_ems.cand_admission_details.cand_id ,
  cand_name ,reg_no ,admission_type ,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission from admintv_ems.cand_admission_details
   left join admintv_ems.cand_profile_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_profile_details.cand_id
   left join admintv_ems.cand_relieving_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
   where course in ('${course.join(
     "','"
   )}') and academic_year in ('${academic_year.join(
    "','"
  )}') and relieved = 'No' order by cand_name`;
  // console.log(sql);
  db.query(sql, (err, data) => {
    if (err) console.error(err);
    // console.table(data);
    res.send(data);
  });
};

exports.approved = (req, res) => {
  var cand_id = JSON.parse(req.body.data);

  // console.log(cand_id.join("','"));
  var sql = `update admintv_ems.cand_admission_details set approved = 'Yes' where cand_id in ('${cand_id.join(
    "','"
  )}')`;
  db.query(sql, (err, data) => {
    // console.log(data);
    res.send("Approved Successfully");
  });
};

exports.approve_filter = (req, res) => {
  var { data } = req.body;
  var approved;
  var verified;
  // console.log(data);
  if (data == "approved") {
    approved = "Yes";
    verified = "Yes";
  } else if (data == "verified") {
    approved = "No";
    verified = "Yes";
  } else {
    null;
  }

  var sql = `select admintv_ems.cand_admission_details.cand_id ,
  cand_name ,reg_no ,admission_type ,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission from admintv_ems.cand_admission_details
   left join admintv_ems.cand_profile_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_profile_details.cand_id
   left join admintv_ems.cand_relieving_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
   where verified = '${verified}' and approved = '${approved}' and relieved = 'No' order by cand_name`;
  // console.log(sql);
  db.query(sql, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
};
