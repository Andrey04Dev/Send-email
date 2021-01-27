import 'dotenv/config'
import nodemailer from 'nodemailer'

//Connection with the service that will used
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pirulo12net@gmail.com', 
        pass: 'pirulo04041993'
    }
});

//The configuration that the other person will recive.
let mailOptions = {
    from: process.env.EMAIL, 
    to: 'pirulo12net@gmail.com',
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    html: '<h1>Hello World</h1>'
};

//Sending the email anda check if the email was sent or not
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return console.log('Error occurs', err);
    }
    return console.log('Email sent!!!');
});