import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
// import SignUp from '../models/signUp';

// add new controller for sign up

const hostname = process.env.APPSETTING_STMP_HOST;
const username = process.env.APPSETTING_SMTP_USER;
const pswd = process.env.APPSETTING_SMTP_PASS;
const emailPort = Number(process.env.APPSETTING_SMTP_PORT) | 587;

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

// async function sendEmail(emailTo: string, subject: string, htmlMessage: string) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: hostname,
//     port: emailPort,
//     secure: true,
//     requireTLS: true,
//     auth: {
//       user: username,
//       pass: pswd
//     },
//     logger: true
//   });

//   await transporter.sendMail({
//     from: username,
//     to: [emailTo, 'thehubaubg@gmail.com'],
//     subject: subject,
//     text: '',
//     html: htmlMessage,
//   }).then((msg) => console.log(msg)).catch(err => console.log(err));

// }

// export const createSignUp = async (req: Request, res: Response) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   const signUpData = req.body;

//   const s = new SignUp(signUpData);
//   await s
//     .validate() // run validate
//     .then(async () => {
//       // if reached here, then validation was fine, attempt to save
//       SignUp.findOne({ email: signUpData.email }).exec((err, su) => {
//         // callback
//         // check if findOne failed
//         if (err) return res.status(500).json({ message: err });
//         // check if a signup was found
//         if (su) return res.status(409).json({ message: 'This email already exists' });

//         s.save((err) => {
//           // callback in case save fails, in which case log and return 500
//           if (err) return res.status(500).json({ message: err });
//         });

//         sendEmail(signUpData.email, 'Registration for HackAUBG 4.0', emailMessage);

//         return res.status(201).json({
//           // if reached here, then save was fine, return 201 CREATED
//           signup: s
//         });
//       });
//     })
//     .catch((err) => {
//       // catch the failed validate, which is a 400 Bad request
//       console.log(err);

//       return res.status(400).json({
//         message: err
//       });
//     });
// };