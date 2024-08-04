
const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
const PostTagsModel = require('../models/PostTagsModel');
const TagsModel = require('../models/TagsModel');
class PostControler {
    

    async listar(request,response){
        PostModel.belongsToMany(TagsModel,{
            through: PostTagsModel,
            foreignKey: 'post_id',
            otherKey: 'tag_id'
        })
        PostModel.belongsTo(UserModel,{foreignKey:"user_id"});
        UserModel.hasOne(ProfileModel,{foreignKey:"user_id"});
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
        PostModel.belongsToMany(TagsModel,{
            through: PostTagsModel,
            foreignKey: 'post_id',
            otherKey: 'tag_id'
        })

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