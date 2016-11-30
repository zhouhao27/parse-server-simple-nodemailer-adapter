'use strict';

var nodemailer = require('nodemailer');

var SimpleNodemailerAdapter = nodemailerOptions => {
  if (!nodemailerOptions || !nodemailerOptions.user || !nodemailerOptions.password || !nodemailerOptions.fromAddress) {
    throw 'SimpleNodemailerAdapter requires an user name, password, and fromAddress.';
  }

  var sendMail = mail => {

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: nodemailerOptions.user,
          pass: nodemailerOptions.password
      },
      logger: false, // log to console
      debug: false // include SMTP traffic in the logs
    }, {
        from: nodemailerOptions.senderName + ' <' + nodemailerOptions.fromAddress + '>',
    });

    var message = {
      from: nodemailerOptions.senderName + ' <' + nodemailerOptions.fromAddress + '>',
      //to: mail.receiverName + ' <' + mail.to + '>',
      to: mail.to,
      subject: mail.subject,      
      text: mail.text
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) => {
        if (error) {
          reject(error);
        }
        resolve(info);
      });
    });
  }

  return Object.freeze({
    sendMail: sendMail
  });
}

module.exports = SimpleNodemailerAdapter
