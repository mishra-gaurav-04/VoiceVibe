const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : [true,'First Name is required field']
    },
    lastName : {
        type : String,
        required : [true,'Last Name is required field']
    },
    userName : {
        type : String,
        required : [true,'User Name is required field']
    },
    email : {
        type : String,
        lowerCase : true,
        required : [true,'Email is required field'],
        unique : [true,'This email is already in use'],
        validate : [validator.isEmail,'Not a valid email address']
    },
    phone : {
        type : Number,
        maxlength : [10,'Phone number must be of 10 digits'],
        require : [true,'Phone number is required field'],
        unique : [true,'This phone numeber is already in use']
    },
    dateofBirth : {
        type : Date,
        required : [true,'Date of birth is requried field']
    }

});

module.exports = mongoose.model('User',userSchema);