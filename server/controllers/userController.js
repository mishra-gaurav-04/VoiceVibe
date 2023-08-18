const User = require('../model/User');
const getDataUri = require('../utils/dataUri');
const cloudinary = require('cloudinary');

exports.getUserById = async(req,res,next) => {
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                status : 'Fail',
                message : 'User Not Found'
            })
        }

        const userData = {
            name : `${user.firstName} ${user.lastName}`,
            email : user.email,
            username : user.userName,
            dateofBirth : user.dateofBirth.toLocaleDateString()
        }
        res.status(200).json({
            status : 'Success',
            userData
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : 'Fail',
            message : 'Internal Server Error'
        });
    };
}; 

exports.updateUser = async(req,res,next) => {
    try{
        const userId = req.params.id;
        const {userName,country} = req.body;
        const user = await User.findById(userId);
        
        if(!user){
            return res.status(404).json({
                status : 'Fail',
                message : 'User Not Found'
            });
        }
        
        if(!userName || !country){
            return res.status(400).json({
                status : 'Fail',
                message : 'Invalid field data'
            })
        }
        const file = req.file;
        const fileUri = getDataUri(file);

        
        await user.save();

        res.status(200).json({
            status : 'Success',
            message : 'User Profile Updated Successfully',
            user
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : 'Fail',
            message : 'Internal Server Error'
        });
    }
}