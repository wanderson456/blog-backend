const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
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
        UserModel.create(body,{include: ProfileModel});
        return response.status(201).json({message: "Usuario cadastrado com sucesso"});
    }

}

module.exports = UserControler;