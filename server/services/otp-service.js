const crypto = require('crypto');
const dotenv = require('dotenv');
const hashService = require('../services/hashing-service');

dotenv.config();

class OtpService{
    async generateOTP(){
        const otp = crypto.randomInt(1000,9999);
        return otp;
    }
    async verifyOTP(hashedOtp,data){
        let computedHash = await hashService.hashOtp(data);
        return hashedOtp === computedHash;
    }
};

module.exports = new OtpService();