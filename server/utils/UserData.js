class UserDataEmail{
    _id;
    email;
    activated;
    createdAt;
    imageUrl;

    constructor(user){
        this._id = user._id;
        this.email = user.email;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
        this.imageUrl = user.image.url;
    }
    
}

module.exports = UserDataEmail;