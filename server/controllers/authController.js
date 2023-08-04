const User = require('../model/User');
const validateAge = require('../utils/ageValidation');

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

        res.status(201).json({
            status : 'Success',
            newUser
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
exports.login = () => {};
