
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
      
       
        let dados   = await PostModel.findAll({
            include:[{
                model: UserModel,
                include: ProfileModel
            },
            {
                model: TagsModel,
                
            }]
        
        
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
        post.setTags(tags);
        return response.status(201).json({message: "Post cadastrado com sucesso"});
    }

}

module.exports = PostControler;