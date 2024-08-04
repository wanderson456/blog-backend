const express = require('express');
const TagsRotas = express.Router();
let TagsController = require('../controllers/TagsController');

tagsController = new TagsController();

TagsRotas.get('/tags', tagsController.listar);
TagsRotas.post('/tags', tagsController.criar);


module.exports= TagsRotas;
