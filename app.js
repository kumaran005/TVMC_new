/**
 * Module dependencies.
 */
require("dotenv").config();
const multer = require("multer");
const exphbs = require("express-handlebars");
const express = require("express"),
  routes = require("./routes"),
  user = require("./routes/user"),
  select = require("./routes/select"),
  insert = require("./routes/insert"),
  initial_insert = require("./routes/initial_insert"),
  initial_files = require("./routes/insert_files"),
  update = require("./routes/update"),
  delte = require("./routes/delete"),
  relieve = require("./routes/relieve"),
  report = require("./routes/reports"),
  student_reports = require("./routes/student_reports"),
  admin = require("./routes/admin"),
  fee = require("./routes/fee"),
  checkslip = require("./routes/checkslip");
(http = require("http")), (path = require("path"));
//const methodOverride = require('method-override');
const session = require("express-session");
const app = express();
const mysql = require("mysql");
// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
let bodyParser = require("body-parser");
var cors = require('cors');
app.use(cors())
//Server port
const pool = mysql.createPool({
   host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

setInterval(function () {
  pool.query("SELECT 1", [], function () {});
}, 5000);

//const connection;
var getConnection = function (callback) {
  pool.getConnection(function (err, connection) {
	if(connection)console.log(connected);
    callback(err, connection);
  });
};
module.exports = getConnection;

//Server port

global.db = pool;

const socketio = require("socket.io");

const formatMessage = require("./public/assets/utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./public/assets/utils/users");
const { render } = require("ejs");
const server = http.createServer(app);
const io = socketio(server);

const botName = "EMS";

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatRoom!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

app.use((req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','https://admin.tvmc.ac.in');
	res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, OPTIONS');
	res.setHeader(
				 'Access-Control-Allow-Headers',
				 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

app.options('*',(req,res)=>{
res.status(200);
});


// all environments
app.set("port", process.env.PORT || 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
//app.use(express.static('public'))
// Public Folder
app.use(express.static("./public"));

// app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({secret: "keyboard cat"})
);
//upload files
const upload = multer({ storage: multer.memoryStorage() });

// development only

app.get("/", routes.index);
app.get("/icboard", user.icboard);

app.post("/acknowledgement", user.ack);

app.get("/signuphome", user.add_user);

app.get("/view_report", user.view_report);
app.post("/view_report", user.view_report);
app.post("/add_user", user.add_user);

// fees
app.get("/collect_fees", fee.collect_fees);
app.post("/collect_fees", fee.collect_fees);
app.get("/print_fees", fee.print_fees);
app.post("/print_fees", fee.print_fees);

app.get("/forgotpwd", user.forgotpwd);
app.post("/forgetpasssword", user.forgetpasssword);
// app.get("/pwdupdate", user.pwdupdate);
// app.post("/pwdupdate", user.pwdupdate);

app.get("/login", routes.index);
app.get("/logout", user.logout);
app.post("/login", user.login);
// app.get("/home/icdashboard", user.icdashboard);

app.get("/myprofile", user.myprofile);
app.post("/myprofile", user.myprofile);
app.get("/changepassword", user.changepassword);
app.post("/changepassword", user.changepassword);
app.post("/changepswd", user.changepswd);

//mbbs
app.get("/boards", user.all_boards);
app.post("/boards", user.all_boards);

// //mdms
// app.get("/mdms_board", user.mdms_board);
// app.post("/mdms_board", user.mdms_board);

// //bsc
// app.get("/bsc_board", user.bsc_board);
// app.post("/bsc_board", user.bsc_board);

// //aissc
// app.get("/aissc_board", user.aissc_board);
// app.post("/aissc_board", user.aissc_board);

// // nursing
// app.get("/nursing_board", user.nursing_board);
// app.post("/nursing_board", user.nursing_board);

// select
app.post("/select_mbbs_student", select.select_mbbs);
app.post("/select_mdms_student", select.select_mdms);
app.post("/select_bsc_student", select.select_bsc);
app.post("/select_aissc_student", select.select_aissc);
app.post("/select_nursing_student", select.select_nursing);

// insert
// app.post("/add_students", upload.any(), insert.insert_cand);

// update
app.get("/update_student", upload.any(), update.edit_cand);
app.post("/update_student", upload.any(), update.edit_cand);

//reports
app.get("/get_reports", report.all_report);
app.post("/get_reports", report.all_report);

//student_reports
app.get("/student_reports", student_reports.student_reports);
app.post("/student_reports", student_reports.student_reports);

// random report
app.get("/report", admin.random_report);
app.post("/random_report", admin.random_reports);

app.post("/report_print", admin.report_print);

// relieve
app.get("/reli_check", relieve.reli_check);
app.post("/reli_check", relieve.reli_check);

// delete
app.post("/del_student", delte.delete_students);

app.get("/home/logout", user.logout);

app.post("/check_slip", checkslip.check_slip);

app.post("/verify", select.verify);
app.get("/approve", admin.approve_page);
app.post("/approval_serach", admin.approve_search);
app.post("/approved", admin.approved);
app.post("/approval_filter", admin.approve_filter);
// certificate_download

app.post("/cert_form", (req, res) => {
  var { cand_id, certificate_type } = JSON.parse(req.body.data);

  var sql = `select * from admintv_ems.certificate_files where (cand_id,certificate_type) = ('${cand_id}','${certificate_type}')`;
  console.log(sql);
  db.query(sql, (err, data) => {
    res.send(data);
  });
});

// surety_file_mdms
app.post("/surety_file", (req, res) => {
  var { cand_id } = req.body;
  var sql = `SELECT * FROM admintv_ems.surety_mdms where surety_id = '${cand_id}'`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});
// surety_aissc;
app.post("/surety_file_aissc", (req, res) => {
  var { cand_id } = req.body;
  var sql = `SELECT * FROM admintv_ems.surety_aissc where surety_id = '${cand_id}'`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});

app.post("/fees_file", (req, res) => {
  console.log(req.body);
  var { cand_id } = req.body;
  var sql = `SELECT * FROM admintv_ems.fees_file where idfees_file ='${cand_id}'`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});

//initial_insert
// student_details
app.post("/student_home", upload.any(), initial_insert.student_home);
// qualification_details
app.post("/student_qual", upload.any(), insert.student_qual);
// bank_details
app.post("/student_bank", upload.any(), insert.student_bank);
// surety_details
app.post("/student_surety", upload.any(), insert.student_surety);
//student_docs_end_of_submit
app.post("/add_students", upload.any(), insert.student_docs);

// initial_files
// aadhar & bio
app.post("/student_home_files", upload.any(), initial_files.student_home_files);
// challan_files
app.post("/student_bank_files", upload.any(), initial_files.student_bank_files);
// surety_files
app.post("/student_surety_files", upload.any(), initial_files.surety_mdms);
// certificates_files
app.post("/student_docs_files_1", upload.any(), initial_files.docs_file_1);
app.post("/student_docs_files_2", upload.any(), initial_files.docs_file_2);
app.post("/student_docs_files_3", upload.any(), initial_files.docs_file_3);
app.post("/student_docs_files_4", upload.any(), initial_files.docs_file_4);
app.post("/student_docs_files_5", upload.any(), initial_files.docs_file_5);
app.post("/student_docs_files_6", upload.any(), initial_files.docs_file_6);
app.post("/student_docs_files_7", upload.any(), initial_files.docs_file_7);
app.post("/student_docs_files_8", upload.any(), initial_files.docs_file_8);
app.post("/student_docs_files_9", upload.any(), initial_files.docs_file_9);
app.post("/student_docs_files_10", upload.any(), initial_files.docs_file_10);
app.post("/student_docs_files_11", upload.any(), initial_files.docs_file_11);
app.post("/student_docs_files_12", upload.any(), initial_files.docs_file_12);
app.post("/student_docs_files_13", upload.any(), initial_files.docs_file_13);
app.post("/student_docs_files_14", upload.any(), initial_files.docs_file_14);
app.post("/student_docs_files_15", upload.any(), initial_files.docs_file_15);
app.post("/student_docs_files_16", upload.any(), initial_files.docs_file_16);
app.post("/student_docs_files_17", upload.any(), initial_files.docs_file_17);
app.post("/student_docs_files_18", upload.any(), initial_files.docs_file_18);
app.post("/student_docs_files_19", upload.any(), initial_files.docs_file_19);
app.post("/student_docs_files_20", upload.any(), initial_files.docs_file_20);
app.post("/student_docs_files_21", upload.any(), initial_files.docs_file_21);
app.post("/student_docs_files_22", upload.any(), initial_files.docs_file_22);
app.post("/student_docs_files_23", upload.any(), initial_files.docs_file_23);
app.post("/student_docs_files_24", upload.any(), initial_files.docs_file_24);
app.post("/student_docs_files_25", upload.any(), initial_files.docs_file_25);
app.post("/student_docs_files_26", upload.any(), initial_files.docs_file_26);
app.post("/student_docs_files_27", upload.any(), initial_files.docs_file_27);
app.post("/student_docs_files_28", upload.any(), initial_files.docs_file_28);
app.post("/student_docs_files_29", upload.any(), initial_files.docs_file_29);

//Middleware
server.listen(8080, () => {
  console.log("http://localhost:8080");
});
