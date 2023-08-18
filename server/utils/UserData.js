class UserDataEmail{
    _id;
    email;
    activated;
    createdAt;
    img_url;

    constructor(user){
        this._id = user._id;
        this.email = user.email;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
        this.img_url = user.image.url;
    }
    
}

module.exports = UserDataEmail;