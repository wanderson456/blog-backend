const express = require('express');

const UserTypesController= require('../controllers/TagsController')
const UserTypeRotas =express.Router();
const userTypesController = new UserTypesController();



UserTypeRotas.get('/tags', userTypesController.listar)
UserTypeRotas.post('/tags', userTypesController.criar)


//UsuariosRotas.put('/users/:id',usuariosController.atualizar)
//UsuariosRotas.delete('/users/:id',usuariosController.deletar)


module.exports = UserTypeRotas;