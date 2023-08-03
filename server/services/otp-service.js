const dotenv = require('dotenv');
const crypto = require('crypto');
const hashingService = require('./hashing-service');

dotenv.config();

class OtpService{
    async generateOtp(){
        const otp = await crypto.randomInt(1000,9999);
        return otp;
    }
}

module.exports = OtpService;