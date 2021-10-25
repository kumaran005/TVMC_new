const mysql = require("mysql");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require("fs");

const db_new = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ems",
});

rl.question("Academic Year ? ", function (year) {
  rl.question("course ? ", function (program) {
    rl.question("dept ?", function (dept) {
      var sql = `select admintv_ems.cand_admission_details.cand_id,admintv_ems.cand_admission_details.cand_name,
          admintv_ems.cand_profile_details.father_name,admintv_ems.cand_profile_details.mother_name from admintv_ems.cand_admission_details
          inner join admintv_ems.cand_profile_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_profile_details.cand_id
          inner Join admintv_ems.cand_relieving_details on admintv_ems.cand_admission_details.cand_id = admintv_ems.cand_relieving_details.cand_id
          where (academic_year,course_title,course,relieved) = ('${year}','${program.toUpperCase()}','${dept}','No')`;

      db_new.query(sql, (err, data) => {
        function compareStrings(a, b) {
          return a.cand_name.toLowerCase() < b.cand_name.toLowerCase()
            ? -1
            : a.cand_name.toLowerCase() > b.cand_name.toLowerCase()
            ? 1
            : a.cand_name.toLowerCase() == b.cand_name.toLowerCase()
            ? a.father_name.toLowerCase() < b.father_name.toLowerCase()
              ? -1
              : a.father_name.toLowerCase() > b.father_name.toLowerCase()
              ? 1
              : a.father_name.toLowerCase() == b.father_name.toLowerCase()
              ? a.mother_name.toLowerCase() < b.mother_name.toLowerCase()
                ? -1
                : a.mother_name.toLowerCase() > b.mother_name.toLowerCase()
                ? 1
                : 0
              : 0
            : 0;
        }

        var number = data.sort(function (a, b) {
          return compareStrings(a, b);
        });
        console.log(program.toUpperCase(), dept.toUpperCase());
        var course, department;
        // mbbs
        if (program.toUpperCase() == "MBBS") {
          if (dept.toUpperCase() == "MBBS") {
            course = "01";
            department = "001";
          }
        }
        // bsc
        else if (program.toUpperCase() == "BSC") {
          if (dept.toUpperCase() == "B.SC. MEDICAL LABORATORY TECHNOLOGY") {
            course = "02";
            department = "001";
          } else if (
            dept.toUpperCase() ==
            "B.SC. CARDIO PULMONARY PERFUSION CARE TECHNOLOGY"
          ) {
            course = "02";
            department = "002";
          } else if (dept.toUpperCase() == "B.SC. CARDIAC TECHNOLOGY") {
            course = "02";
            department = "003";
          } else if (
            dept.toUpperCase() == "B.SC. ACCIDENT AND EMERGENCY CARE TECHNOLOGY"
          ) {
            course = "02";
            department = "004";
          } else if (dept.toUpperCase() == "B.SC. DIALYSIS TECHNOLOGY") {
            course = "02";
            department = "005";
          } else if (dept.toUpperCase() == "B.SC. PHYSICIAN ASSISTANT") {
            course = "02";
            department = "006";
          } else if (dept.toUpperCase() == "B.SC. CRITICAL CARE TECHNOLOGY") {
            course = "02";
            department = "007";
          } else if (
            dept.toUpperCase() ==
            "B.SC. OPERATION THEATRE AND ANAESTHESIA TECHNOLOGY"
          ) {
            course = "02";
            department = "008";
          } else if (dept.toUpperCase() == "B.SC. RESPIRATORY THERAPY") {
            course = "02";
            department = "009";
          } else if (
            dept.toUpperCase() == "B.SC. RADIOGRAPHY AND IMAGING TECHNOLOGY"
          ) {
            course = "02";
            department = "010";
          } else {
            null;
          }
        }
        //mdms
        else if (program.toUpperCase() == "MDMS") {
          if (dept.toUpperCase() == "MD ANAESTHESIOLOGY") {
            course = "03";
            department = "001";
          } else if (dept.toUpperCase() == "MD BIOCHEMISTRY") {
            course = "03";
            department = "002";
          } else if (dept.toUpperCase() == "MD CHEST MEDICINE") {
            course = "03";
            department = "003";
          } else if (
            dept.toUpperCase() == "MD DERMATOLOGY,VENEROLOGY & LEPROSY"
          ) {
            course = "03";
            department = "004";
          } else if (dept.toUpperCase() == "MD FORENSIC MEDICINE") {
            course = "03";
            department = "005";
          } else if (dept.toUpperCase() == "MD GENERAL MEDICINE") {
            course = "03";
            department = "006";
          } else if (
            dept.toUpperCase() == "MD IMMUNO-HAEMATOLOGY & BLOOD TRANFUSION"
          ) {
            course = "03";
            department = "007";
          } else if (dept.toUpperCase() == "MD MICROBIOLOGY") {
            course = "03";
            department = "008";
          } else if (dept.toUpperCase() == "MD PATHOLOGY") {
            course = "03";
            department = "009";
          } else if (dept.toUpperCase() == "MD PAEDIATRIC MEDICINE") {
            course = "03";
            department = "010";
          } else if (dept.toUpperCase() == "MD PHARMACOLOGY") {
            course = "03";
            department = "011";
          } else if (dept.toUpperCase() == "MD PHYSIOLOGY") {
            course = "03";
            department = "012";
          } else if (dept.toUpperCase() == "MD PSYCHIATRY") {
            course = "03";
            department = "013";
          } else if (dept.toUpperCase() == "MD RADIODIAGNOSIS") {
            course = "03";
            department = "014";
          } else if (dept.toUpperCase() == "MD RADIOTHERAPY") {
            course = "03";
            department = "015";
          }
          //ms
          else if (dept.toUpperCase() == "MS GENERAL SURGERY") {
            course = "04";
            department = "001";
          } else if (dept.toUpperCase() == "MS OBSTETRICS & GYNAECOLOGY") {
            course = "04";
            department = "002";
          } else if (dept.toUpperCase() == "MS OPHTHALMOLOGY") {
            course = "04";
            department = "003";
          } else if (dept.toUpperCase() == "MS OTO-RHINO-LARYNGOLOGY") {
            course = "04";
            department = "004";
          } else if (dept.toUpperCase() == "MS ORTHOPAEDICS") {
            course = "04";
            department = "005";
          } else {
            null;
          }
        } else if (program.toUpperCase() == "AISSC") {
          if (dept.toUpperCase() == "DM CARDIOLOGY") {
            course = "05";
            department = "001";
          } else if (dept.toUpperCase() == "DM MEDICAL GASTROENTEROLOGY") {
            course = "05";
            department = "002";
          } else if (dept.toUpperCase() == "DM NEPHROLOGY") {
            course = "05";
            department = "003";
          } else if (dept.toUpperCase() == "DM NEUROLOGY") {
            course = "05";
            department = "004";
          } else if (dept.toUpperCase() == "M.CH NEUROSURGERY") {
            course = "06";
            department = "001";
          } else if (dept.toUpperCase() == "M.CH PAEDIATRIC SURGERY") {
            course = "06";
            department = "002";
          } else if (
            dept.toUpperCase() == "M.CH PLASTIC AND RECONSTRUCTIVE SURGERY"
          ) {
            course = "06";
            department = "003";
          } else if (dept.toUpperCase() == "M.CH GENITO URINARY SURGERY") {
            course = "06";
            department = "004";
          } else if (dept.toUpperCase() == "M.CH SURGICAL GASTROENTEROLOGY") {
            course = "06";
            department = "005";
          }
        }

        var data = fs.readFileSync("./rollno.json");

        var myobj = JSON.parse(data);

        for (i in number) {
          if (i < 9) {
            myobj.push({
              cand_id: number[i].cand_id,
              cand_name: number[i].cand_name,
              student_code: `${year.substring(0, 4)}${course}${department}00${
                Number(i) + 1
              }`,
            });
          } else if (i >= 9 && i < 99) {
            myobj.push({
              cand_id: number[i].cand_id,
              cand_name: number[i].cand_name,
              student_code: `${year.substring(0, 4)}${course}${department}0${
                Number(i) + 1
              }`,
            });
          } else {
            myobj.push({
              cand_id: number[i].cand_id,
              cand_name: number[i].cand_name,
              student_code: `${year.substring(0, 4)}${course}${department}${
                Number(i) + 1
              }`,
            });
          }
        }

        json = JSON.stringify(
          myobj.filter((x) => {
            return x != null;
          }),
          null,
          2
        );
        fs.writeFileSync("./rollno.json", json, (err, data1) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(data1);
        });

        // rl.close();
        var after_data = fs.readFileSync("./rollno.json");
        var myobj_data = JSON.parse(after_data);
        console.log(myobj_data.length);
        for (j in myobj_data) {
          console.log(Number(j) + 1);
          var sql = `update admintv_ems.cand_admission_details set student_code= '${myobj_data[j].student_code}' where cand_id = '${myobj_data[j].cand_id}'`;
          db_new.query(sql, (err, data) => {
            if (err) {
              console.log(err);
            }

            // delete myobj_data[j];

            json = JSON.stringify(
              myobj_data.filter((x) => {
                return x != null;
              }),
              null,
              2
            );
            // data = json.table.filter((x)=> {return(x!=null)})
            fs.writeFileSync("./rollno.json", json, (err) => {
              if (err) {
                console.error(err);
              }
            });
          });
        }
      });
    });
  });
});
rl.on("close", function () {
  process.exit(0);
});
