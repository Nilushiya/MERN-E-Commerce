const UserModel = require('../model/user')

class UserService{
    static async registerUser(email,password){
        try{
            const createrUser = new UserModel({email,password});
            return await createrUser.save();
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = UserService;