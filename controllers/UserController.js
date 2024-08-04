const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
class UserControler {

    async listar(request,response){
        UserModel.hasOne(ProfileModel,{
            foreignKey: 'user_id',
          
        })
        let users   = await UserModel.findAll({
            include: ProfileModel,
        });
       
        return response.json(users);
    }

    async criar(request,response){
        UserModel.hasOne(ProfileModel,{foreignKey: "user_id"});
        const body= request.body;
        UserModel.create(body,{include: ProfileModel});
        return response.status(201).json({message: "Usuario cadastrado com sucesso"});
    }

}

module.exports = UserControler;