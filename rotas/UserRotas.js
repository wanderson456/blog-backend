const express = require('express');

const UserController= require('../controllers/UserController')
const UsuariosRotas=express.Router();
const userController = new UserController();



UsuariosRotas.get('/users', userController.listar)
UsuariosRotas.post('/users', userController.criar)
//UsuariosRotas.put('/users/:id',userControllerr)
//UsuariosRotas.delete('/users/:id',usuariosController.deletar)


module.exports = UsuariosRotas;