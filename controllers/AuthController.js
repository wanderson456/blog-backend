const UserModel = require("../models/UserModel");
const MD5=require('crypto-js/md5');
class AuthController {
    async login(username, password) {
       
     const dados =  await UserModel.findAll({
        where:{
            password:MD5(password).toString(),
            username:username
            
            
        }
       })
       console.log(password);

      if( dados.length > 0 ){
        return dados[0];
      }
        return null;


    }
}

module.exports= AuthController;