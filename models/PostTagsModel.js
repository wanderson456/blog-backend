const {  DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const PostModel = require('../models/PostModel');
const TagsModel = require('../models/TagsModel');
class PostTagsModel extends Model {}

PostTagsModel.init(
  {
    post_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PostModel,
            key: 'id',
        },onDelete:"CASCADE"
    },
    tag_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TagsModel,
            key: 'id'
        },onDelete:"CASCADE"
    }
    
  },
  {
   timestamps:false,
   tableName:"post_tag",
    sequelize: connection,
    
    
  },
);

module.exports = PostTagsModel;