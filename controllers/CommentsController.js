const CommentsModel = require('../models/CommentsModel');
const comments = require('../models/CommentsModel')

CommentsModel.hasOne(CommentsModel,{
    foreignKey:'parent_id', 
    as:'children'})

    CommentsModel.belongsTo(CommentsModel,{
        foreignKey: 'parent_id',
        as: 'parents'
    })
class CommentsController {

    async listar(request,response){
       
        const dados = await CommentsModel.findAll({
            include: [
                {
                    model: CommentsModel,
                    as: 'children',
                
                },
                {
                    model: CommentsModel,
                    as: 'parents',
                
                }
        ]
        });
            
        return response.json(dados);
    }

    async criar(request,response){
        const body = request.body;
        CommentsModel.create(body);
        return response.status(201).json({message: "Comentario cadastrado com sucesso"});
    }

}

module.exports = CommentsController;