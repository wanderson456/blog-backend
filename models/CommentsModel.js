const {  DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');
class CommentsModel extends Model {}

CommentsModel.init(
  
    { 
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
        content: { type: DataTypes.TEXT, allowNull: false }, 
        user_id: { type: DataTypes.INTEGER, references: { model: UserModel, key: 'id' } },
        post_id: { type: DataTypes.INTEGER, references: { model: PostModel, key: 'id' } },
        parent_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: CommentsModel, key: 'id' },
    
   
    
    
    }
},
  {
   timestamps:true,
   tableName:"comments",
    sequelize: connection,
    
    
  },

);

module.exports = CommentsModel;