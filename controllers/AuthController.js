const UsuarioModel = require("../models/UserModel");

class AuthController {
    login(login,senha){
        const dados =UsuarioModel.authenticate(login,senha);
        return dados;


    }
}

module.exports= AuthController;