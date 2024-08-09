const express = require('express');
const UsuariosRotas = require('./UserRotas')
const jwt = require('jsonwebtoken')
const PostRotas = require('./PostsRotas')
const TagsRotas = require('../rotas/TagsRotas')
const CommentsRotas = require('./CommentsRotas')
require('dotenv').config()
const RotasPrivatas = express.Router();
RotasPrivatas.use((request,response,next)=>{
    // verificando autorizaçao 
    let logged = false;
    const token = request.headers.token;
    try {
        jwt.verify(token,process.env.APP_KEY_TOKEN);
        logged = true;
        
    } catch (JsonWebtokenerror) {
        logged = false;
        
    }
    if(logged === false){
        return response.status(403).send('Não autorizado')
    }
   
    next();
 

});

RotasPrivatas.use(UsuariosRotas);
RotasPrivatas.use(PostRotas);
RotasPrivatas.use(TagsRotas);
RotasPrivatas.use(CommentsRotas);



module.exports= RotasPrivatas;