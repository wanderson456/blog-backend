
const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
const PostTagsModel = require('../models/PostTagsModel');
const TagsModel = require('../models/TagsModel');
class PostControler {
    constructor(){
        UserModel.associate({ProfileModel})
        PostModel.associate({
            TagsModel,
            PostTagsModel,
            UserModel
        });
    }

    async listar(request,response){
      let query = request.query;
      query=query.fields.split(',');
       
        const dados   = await PostModel.findAll({
            attributes:query
        })
        return response.json(dados);
    }

    async criar(request,response){
        

        const {tags, ...body}= request.body;
        let post = await PostModel.create(body,{
            include:{
                through: PostTagsModel,
                model: TagsModel,
               
                
            }
          
        });
        //post.setTags(tags);
        return response.status(201).json({message: "Post cadastrado com sucesso"});
    }

    async atualizar(request,response){
        const id = request.params.id;
        const body= request.body;
        await PostModel.update(body,{where: {id}});
        return response.status(200).json({message: "Post atualizado com sucesso"});

    }

    async deletar(request,response){
        const id = request.params.id;
        await PostModel.destroy({where: {id}});
        return response.status(200).json({message: "Post deletado com sucesso"});
    }

}

module.exports = PostControler;