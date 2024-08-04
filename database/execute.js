const UserModel = require('../models/UserModel');
const ProfileModel= require('../models/ProfileModel');

async function execute(){
    let user = await UserModel.create({
        is_active: 0,
        email: 'joao@teste.com',
        username: 'joao',
        password: 1234
    });

    let profile = await ProfileModel.create({
        user_id: user.id,
        firstname: 'joao',
        surname: 'silva',
    });
    console.log(profile);
}

execute();