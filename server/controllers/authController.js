const User = require('../model/User');
const validateAge = require('../utils/ageValidation');
const otpService = require('../services/otp-service');
const hashService = require('../services/hashing-service');
const emailService = require('../services/email-service');

exports.signup = async(req,res,next) => {
    try{
        const {firstName,lastName,userName,email,phone,dateofbirth} = req.body;
        
        if(!firstName || !lastName || !userName || !email || !phone || !dateofbirth){
            return res.status(400).json({
                status : 'Fail',
                message : 'Missing field data'
            });
        }

        if(validateAge(dateofbirth) == false){
            return res.status(400).json({
                status : 'Fail',
                message : 'Invalid Age'
            })
        }
        const newUser = await User.create({
            firstName : firstName,
            lastName : lastName,
            userName : userName,
            email : email,
            phone : phone,
            dateofBirth : dateofbirth
        })

        // otp generation
        const ttl = 1000 * 60 * 2;
        const otp = await otpService.generateOTP();
        const expires = Date.now() + ttl;
        const data = `${email}.${otp}.${expires}`;
        const hashedOtp = await hashService.hashOtp(data);

        const options = {
            email : email,
            subject : 'OTP Verifications',
            message : `Your otp for VoiceVibes is ${otp}`
        }

        // await emailService.sendMail(options);

        res.status(201).json({
            status : 'Success',
            hashedOtp
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : 'Fail',
            message : 'Internal Server Error'
        });
    }
};

exports.loginByEmail = () => {};
exports.loginByPhone = () => {};
