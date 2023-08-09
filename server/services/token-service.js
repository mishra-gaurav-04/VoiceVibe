const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Token = require('../model/Token');

dotenv.config();

const AccessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const RefreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;


class TokenService{
    async generateToken(payload){
        const accessToken = await jwt.sign(payload,AccessTokenSecret,{
            expiresIn : process.env.ACCESS_TOKEN_EXPIRE_TIME
        });
        const refreshToken = await jwt.sign(payload,RefreshTokenSecret,{
            expiresIn : process.env.REFRESH_TOKEN_EXPIRE_TIME
        });

        return {
            accessToken,
            refreshToken
        }
    }
    async storeRefreshToken(token,userID){
        try{
            await Token.create({
                token,
                userId : userID
            })
        }
        catch(err){
            console.log(err);
        }
    }
};

module.exports = new TokenService();