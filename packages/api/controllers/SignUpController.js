import nodemailer from 'nodemailer';
import {} from 'dotenv/config';
// import SignUp from '../models/signUp';

// add new controller for sign up

const hostname = process.env.APPSETTING_SMTP_HOST;
const username = process.env.APPSETTING_SMTP_USER;
const pswd = process.env.APPSETTING_SMTP_PASS;
const emailPort = Number(process.env.APPSETTING_SMTP_PORT) | 465;

const emailMessage =
`
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <title>Welcome to the Readefine Community</title>
    <style>
    </style>
</head>
<body style="margin-top: 15px;">
    <h1>Working</h1>
</body>
</html>
`;

// transform from ts to js

async function sendEmail(emailTo, subject, htmlMessage) {
  const transporter = nodemailer.createTransport({
    host: hostname,
    port: emailPort,
    secure: true,
    requireTLS: true,
    auth: {
      user: username,
      pass: pswd
    },
    logger: true
  });
  console.log(hostname, username, pswd, emailTo)

  return transporter.sendMail({
    from: `Readefine <${username}>`,
    to: [emailTo, username],
    subject: subject,
    text: '',
    html: htmlMessage,
    headers: {'x-myheader':'test header'},
  })

}

export const createSignUp = async (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');

  const signUpData = req.body;
  console.log(signUpData)
    
  sendEmail(signUpData.email, 'Placeholder text', emailMessage).then((msg) => {
      console.log(msg)
      return res.status(200).json(msg)
  }).catch(err => {
      console.log(err)
      return res.status(400).json(err)
    });
  
};