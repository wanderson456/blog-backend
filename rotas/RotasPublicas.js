const express = require('express');
const AuthController = require('../controllers/AuthController');
var jwt = require('jsonwebtoken');
require('dotenv').config()
const RotasPublicas = express.Router();
RotasPublicas.post('/login', async (request,response )=>{
    const body= request.body;
    const auth = new AuthController();
    
    const dados = await auth.login(body.username,body.password);
    if(dados){
        const DataToken = {
            id:dados.id,
            username:dados.username,
            email:dados.email,
            exp:Math.floor(Date.now() / 1000) + (60*60)
        }
        
        const token =  jwt.sign(DataToken,process.env.APP_KEY_TOKEN)
    
        return response.json({
            data:DataToken,
            token: token
     })
   }
    return response.json({
        message:"login ou senha incorreto"
    })

})




module.exports= RotasPublicas;