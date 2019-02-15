const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const validator = require('validator');
const xssFilters = require('xss-filters');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// const rejectFunctions = new Map([
//    ['email', v => !validator.isEmail(v)],
//    ['subject', v => v.length < 4],
//    ['message', v => v.length < 25]
// ]);

// const validateAndSanitize = function (key, value) {
//   // If map has key and function returns false, return sanitized input. Else, return false.
//   return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value);
// };

// const sendMail = (email, subject, message) => {
//   const transporter = nodemailer.createTransport({
//     sendmail: true,
//     newline: 'unix',
//     path: '/usr/sbin/sendmail'
//   })
//   transporter.sendMail({
//     from: email,
//     to: 'dylantkamauoha@gmail.com',
//     subject: subject,
//     text: message
//   })
// }

app.post('/', async (req, res) => {
  // const attributes = ['email', 'subject', 'message'];

  // // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  // const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]));

  // // True if some of the attributes new values are false -> validation failed
  // const someInvalid = sanitizedAttributes.some(r => !r)

  // if (someInvalid) {
  //   return res.status(422).json({"error": "All fields must be filled."})
  // }

  // sendMail(...sanitizedAttributes);
  // res.status(200).json({'message': 'Your message was sent!'})
  let account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
    }
  })

  let mailOptions = {
    from: req.body.email,
    to: 'dylantkamauoha@gmail.com',
    subject: req.body.subject,
    text: req.body.message,
  }

  let info = await transporter.sendMail(mailOptions);
  console.log('info: ',info)
  res.status(200).send('Awesome')
})

module.exports = {
  path: '/api/contact',
  handler: app
}