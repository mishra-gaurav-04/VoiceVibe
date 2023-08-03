const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    phone : {
        type : String,
        require : true,
        unique : true
    },
    userName : {
        type : String,
        require : true,
        unique : true
    },
    dateOfBirth : {
        type : Date,
        require : true
    }
});

module.exports = mongoose.model('User',userSchema);