const express = require('express');
const UsuariosRotas = require('./UserRotas')
const jwt = require('jsonwebtoken')
const PostRotas = require('./PostsRotas')
const TagsRotas = require('../rotas/TagsRotas')
const CommentsRotas = require('./CommentsRotas')
require('dotenv').config()
const RotasPrivatas = express.Router();
RotasPrivatas.use((request,response,next)=>{
    return next();
    let auth = false
    if(request.headers.token){
        const {token} = request.headers;
        try {
            jwt.verify(token,process.env.APP_KEY_TOKEN);
            auth = true;
        } catch (e) {
            return response.status(403).send(e)
            
            
        }
        

    }
    
 if(auth == false){
    return response.status(403).send("nao autorizado")

 }
 next();

});

RotasPrivatas.use(UsuariosRotas);
RotasPrivatas.use(PostRotas);
RotasPrivatas.use(TagsRotas);
RotasPrivatas.use(CommentsRotas);



module.exports= RotasPrivatas;