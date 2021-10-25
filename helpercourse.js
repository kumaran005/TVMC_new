function convert(str) {
  var mnths = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    },
    date = str.split(" ");

  return [date[2], mnths[date[1]], date[3]].join("-");
}

const moment = require("moment");
// console.log(convert("Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time)"))
//-> "2011-06-09"
const mysql = require("mysql");

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
var i = 0;
/*
var sql = `select cand_id,course_commencement from ems.cand_admission_details`;
db_new.query(sql,(err,data)=>{
  data.forEach(element => {
    after_date = convert(element.course_commencement)
   db_new.query(`update ems.cand_admission_details set course_commencement = '${after_date}' where cand_id='${element.cand_id}' `,(err)=>{
     console.error(err);
     console.log(element.cand_id,convert(element.course_commencement))
   })
    i++
    
  });
  console.log(i)
})

var sql = `select cand_id,date_of_admission from ems.cand_admission_details`;
db_new.query(sql,(err,data)=>{
  data.forEach(element =>{
    after_date = convert(element.date_of_admission)
    db_new.query(`update ems.cand_admission_details set date_of_admission ='${after_date}' where cand_id='${element.cand_id}'`,()=>{
      console.log(element.cand_id,convert(element.date_of_admission))
      i++;
    })
  });
  console.log(i)
})




var sql = `select cand_id,date_of_birth from ems.cand_profile_details`;
db_new.query(sql,(err,data)=>{
  data.forEach(element => {
    after_date  = convert(element.date_of_birth);
    db_new.query(`update ems.cand_profile_details set date_of_birth = '${after_date}' where cand_id = '${element.cand_id}'`,()=>{
      console.log(element.cand_id, convert(element.date_of_birth));
      i++;
    })
  });console.log(i)
})
*/

// var sql = `select AdmissionId,DateOfAllotment from educollege.studentadmission`;
// db_old.query(sql,(err,data)=>{
//   console.log(data);

//   // data.forEach(e =>{console.log(convert(`"${e.DateOfAllotment}"`))})
//   data.forEach(element =>{
//     after_date = convert(`"${element.DateOfAllotment}"`)
//     db_new.query(`update ems.cand_admission_details set date_of_allotment ='${after_date}' where cand_id='${element.AdmissionId}'`,()=>{
//       console.log(element.AdmissionId,after_date);
//       i++;
//     })
//   });
//   console.log(i)
// })

// var sql = `select AdmissionId,DateOfRelieving,DateOfReallotment from educollege.studentadmission`;
// db_old.query(sql,(err,data)=>{
//   data.forEach(element =>{
//     after_date = convert(`'${element.DateOfRelieving}'`)
//     after_date2 = convert(`'${element.DateOfReallotment}'`)
//     db_new.query(`update ems.cand_relieving_details set date_of_relieving = '${after_date}',date_of_reallotment ='${after_date2}' where cand_id='${element.AdmissionId}'`,()=>{
//       console.log((element.cand_id,after_date,after_date2))
//     })
//   })
// })

// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'TamilNadu' where mbbs_state =1`,()=>{console.log('hi')});
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'AndhraPradesh' where mbbs_state =2`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'ArunachalPradesh' where mbbs_state =3`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Haryana' where mbbs_state =9`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'JammuandKashmir' where mbbs_state =11`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Karnataka' where mbbs_state =13`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Kerala' where mbbs_state =14`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Maharastra' where mbbs_state =16`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Nagaland' where mbbs_state =20`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Rajasthan' where mbbs_state =23`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Telangana' where mbbs_state =25`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'UttarPradesh' where mbbs_state =27`);
// db_new.query(`update ems.cand_academic_mdms set mbbs_state = 'Puducherrry' where mbbs_state =32`);

// var sql =`select CertificateId, AdmissionId, CertificateDocFile, CertificateFileName, ThumbDocFile, ThumbFileName from educollege.temp_cert`;
// db_old.query(sql,(err,data)=>{
//   data.forEach(element =>{
//     var cert_doc_file = element.CertificateDocFile == null ? "": new Buffer.from(element.CertificateDocFile).toString("base64");
//     var cert_name = element.CertificateFileName == null ? "": element.CertificateFileName;
//     var sql = `insert into ems.certificate_files (cand_id, certificate_file, certificate_file_name) values('${element.AdmissionId}','${cert_doc_file}','${cert_name}')`;
//     db_new.query(sql,()=>{
//       var ThumbDocFile = element.ThumbDocFile == null ? "" :new Buffer.from(element.ThumbDocFile).toString("base64");
//       var ThumbFileName = element.ThumbFileName == null ? "": element.ThumbFileName;
//       var sql = `insert into ems.certificate_files (cand_id, certificate_file, certificate_file_name) values('${element.AdmissionId}','${ThumbDocFile}','${ThumbFileName}')`;
//       db_new.query(sql,(err)=>console.log(i++));
//     })
//   })
// })

// function convert_date(str) {
//   var mnths = {
//       01: "January",
//       02: "feb",
//       03: "mar",
//       04: "april",
//       05: "may",
//       06: "june",
//       07: "july",
//       08: "aug",
//       09: "sep",
//       10: "oct",
//       11: "nov",
//       12: "dec",
//     },
//     date = str.split("-");

//   console.log(date);
//   return [date[2], mnths[date[1]], date[0]].join(".");
// }
// console.log(convert_date("2016-01-25"));

// var parts = "2016-10-25".split("-");
// var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
// console.log(mydate.toDateString([0]));
// var c = 1;
// var sql = `select cand_id ,due_date from ems.check_slip`;
// db_new.query(sql, (err, data) => {
//   data.forEach((e) => {
//     // console.log(e.cand_id, e.due_date);
//     if (e.due_date) {
//       var dt = moment(`${e.due_date}`, "YYYY-MM-DD");
//       dtdt = dt.format("LL").split(" ");
//       date = {
//         cand_id: e.cand_id,
//         day: dtdt[1],
//         month: dtdt[0],
//         year: dtdt[2],
//       };
//       console.log(
//         date.cand_id,
//         date.day.replace(",", ""),
//         date.month,
//         date.year
//       );
//       db_new.query(`update ems.check_slip set due_date = '' where `);
//     }
//     c++;
//   });
//   console.log(c);
// });

var obj = ["hi", "hello", "ok", "thatsfine"];
// var key = Object.keys(obj[0])[1];
// var value = obj[1][key];

// console.log("key = ", key); // bar
// console.log("value = ", value);

var data = new Array();
for (i in obj) {
  data.push(`${obj[i]} as column_${Number(i) + 1}`);
}
console.log(data.join(","));

const text1 = "&";

console.log(encodeURI(text1));

console.log(encodeURIComponent("&"));
console.log(decodeURIComponent("A%2B"));

// console.log(JSON.stringify(decodeURI(text1.blur)));
