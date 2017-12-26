import nodemailer from "nodemailer";

export default nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rebus.kenya@gmail.com',
        pass: 'rebuspass'
    }
});



