const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vishalthakur4035@gmail.com',
        pass: 'xocg udno gpnv yfpi'
    }
});

const mailOptions = {
    from: 'vishalthakur4035@gmail.com',
    to: 'hr@ignitershub.com',
    subject: 'Challenge 3 Completed',
    text: `Hello,

    My name is Vishal Singh, and I am currently in my 7th semester of electronics and communication branch. My roll number is 210050102030.

    Please find attached the required image.

    Best regards,
    Vishal Singh`,

    attachments: [
        {
            filename: 'download.png',
            path: path.join(__dirname, 'download.png')
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
