class UserDataEmail{
    _id;
    email;
    activated;
    createdAt;

    constructor(user){
        this._id = user._id;
        this.email = user.email;
        this.activated = user.activated;
        this.createdAt = user.createdAt
    }
    
}

module.exports = UserDataEmail;