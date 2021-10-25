var nodemailer = require("nodemailer");
var { google } = require("googleapis");
require("dotenv").config();

var CLIENT_ID =
  "317147454135-afi1nv4j65bqn9agu7d99r4g124g624d.apps.googleusercontent.com";
var CLIENT_SECRET = "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";
var REDIRECT_URI = "https://developers.google.com/oauthplayground";
var REFRESH_TOKEN =
  "1//04m7EASJrfU-1CgYIARAAGAQSNwF-L9Ir15ST1qbRZrFCF5rsb19g9hWH4x6N7S896r5kSdMRcg5a-XZUj0raFf67vnRoIbBm5G0";

const oAuth2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.mail = (req, res) => {
  var access_token = oAuth2client.getAccessToken();
  var { userid, emailid, password } = req.session.login_user;
  // console.log(req.session.login_user);
var transporter = nodemailer.createTransport({
    port:25,
	secure:false,
	host:'localhost',
    auth: {
      
      user: "tvmc@admissiontvmc.in",
      pass:"Tvmc@2021",
    },
	tls:{
rejectUnauthorized:false
}
  });

  var mailOptions = {
    from: "TVMC <tvmc@admissiontvmc.in>",
    to: `${emailid}`,
    subject: "Sending Email from TVMC",
    text: `Dear User,
          Please find your user name and password to login
          Username: ${userid},
          Password: ${password},
          Thanks and Regards,
          Tirunelveli Medical College,
          Tirunelveli`,
	    html: `<h5><br>Dear User,<br>
          <br>Please find your user name and password to login <br>
          <br>Username: ${userid}<br>
              <br>Password: ${password}<br>
          <br>Thanks and Regards,<br>
          Tirunelveli Medical College,
          <br>Tirunelveli<br></h5>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

function convertCryptKey(strKey) {
  var newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  strKey = new Buffer(strKey);
  for (var i = 0; i < strKey.length; i++) newKey[i % 16] ^= strKey[i];
  return newKey;
}
exports.pwdrecover = (req, res, data) => {
  var access_token = oAuth2client.getAccessToken();
  var rdata = JSON.parse(JSON.stringify(data));

  var userid = rdata[0].user_id;
  var emailid = rdata[0].emailid;
  var epass = rdata[0].password;
  var dc = crypto.createDecipheriv(
    "aes-128-ecb",
    convertCryptKey("myPassword"),
    ""
  );
  var password = dc.update(epass, "hex", "utf8") + dc.final("utf8");
  var transport = nodemailer.createTransport({
    port:25,
	secure:false,
	host:'localhost',
    auth: {
      
      user: "tvmc@admissiontvmc.in",
      pass:"Tvmc@2021",
    },
	tls:{
rejectUnauthorized:false
}
  });
  var mailOptions = {
     from: "TVMC <tvmc@admissiontvmc.in>",
    to: `${emailid}`,
    subject: "Sending Email from TVMC",
    text: `Dear User,
          Please find your user name and password to login
          Username: ${userid},
          Password: ${password},
          Thanks and Regards,
          Tirunelveli Medical College,
          Tirunelveli`,
    html: `<h3><br>Dear User,<br>
          <br>Please find your user name and password to login <br>
          <br>Username: ${userid}<br>
            Password: ${password}
          <br>Thanks and Regards,<br>
          <br>Tirunelveli Medical College,<br>
          <br>Tirunelveli<br></h3>`,
  };
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(error);
    } else {
        res.send(info);
      console.log("Email sent: " + info.response);
    }
  });
};
