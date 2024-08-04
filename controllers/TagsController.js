
const TagsModel = require('../models/TagsModel');
class TagsController {

    async listar(request,response){
        let dados = await TagsModel.findAll();
        return response.json(dados);
        

    }


    async criar(request,response){
        let body = request.body;
        await TagsModel.create(body);
            
       response.status(201).json({
        message: "Tag cadastrada com sucesso"
       });
    }

}

module.exports = TagsController;