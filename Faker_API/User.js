class User {

    constructor(_id, password, email, phoneNumber, lastName, firstName){
        this._id=_id;
        this.password=password;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.lastName=lastName;
        this.firstName=firstName;
    }
}
module.exports=User;