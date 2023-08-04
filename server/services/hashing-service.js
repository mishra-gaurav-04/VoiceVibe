const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

class HashingService{
    async hashOtp(data){
        return await crypto.createHmac('sha256',process.env.HASH_SECRET).update(''+data).digest('hex');
    }
};

module.exports = new HashingService();