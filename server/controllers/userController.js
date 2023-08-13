const User = require('../model/User');

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

        res.status(200).json({
            status : 'Success',
            user
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