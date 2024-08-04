const express = require('express');
const PostsController = require('../controllers/PostsController')
const PostsRotas=express.Router();


const postsController = new PostsController();

PostsRotas.get('/posts', postsController.listar)

PostsRotas.post('/posts',postsController.criar)




module.exports = PostsRotas;