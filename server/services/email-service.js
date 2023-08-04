const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

class EmailService{
    async sendMail(options){
        const transporter = nodemailer.createTransport({
            host : process.env.NODEMAILER_HOST,
            port : process.env.NODEMAILER_PORT,
            auth : {
                user : process.env.NODEMAILER_USER,
                pass : process.env.NODEMAILER_PASS
            }
        });

        const mailOptions = {
            from : 'VoiceVibes <yashmishra.drab@gmail.com>',
            to : options.email,
            subject : options.subject,
            text : options.message
        }

        await transporter.sendMail(mailOptions);
    }
};

module.exports = new EmailService();