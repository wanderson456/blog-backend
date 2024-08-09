const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
const MD5 = require('crypto-js/md5');
class UserControler {
    constructor(){
        UserModel.associate({ProfileModel});
    }

    async listar(request,response){
       
        let users   = await UserModel.findAll({
            include: ProfileModel,
        });
       
        return response.json(users);
    }

    async criar(request,response){
        const body= request.body;
        
        const password = MD5(body.password).toString()
        body.password = password;
      
        UserModel.create(body,{include: ProfileModel});
        return response.status(201).json({message: "Usuario cadastrado com sucesso"});
    }

}

module.exports = UserControler;