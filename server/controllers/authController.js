const User = require('../model/User');
const validateAge = require('../utils/ageValidation');

exports.signup = async(req,res,next) => {
    try{
        const {firstname,lastname,username,email,phone,dateofbirth} = req.body;

        if(!firstname || !lastname || !username || !email || !phone || !dateofbirth){
            req.status(400).json({
                staus : 'Fail',
                message : 'Missing field'
            });
        }
        if(!validateAge(dateofbirth)){
            return res.status(400).json({
                status : 'Fail',
                message : 'Not Eligible to create account'
            });
        }
        
    
    }
    catch(err){
        res.status(500).json({
            staus : 'Fail',
            message : 'Internal Server Error'
        })
    }
}
exports.login = () => {}