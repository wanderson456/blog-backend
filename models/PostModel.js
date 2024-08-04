const {  DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserModel = require('./UserModel');

class PostModel extends Model {
  static associate({TagsModel,UserModel,PostTagsModel}){
      PostModel.belongsTo(UserModel,{foreignKey:"user_id"});
      PostModel.belongsToMany(TagsModel,{
      through: PostTagsModel,
      foreignKey: 'post_id',
      otherKey: 'tag_id'
  })

  }
}



PostModel.init(
  {
     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id:{
        type:DataTypes.INTEGER,
        references: { 
            model: UserModel,
             key: 'id' },
        
    },
   
    title:{
        type:DataTypes.STRING(45),
         allowNull: false,
    },
    slug:{
        type:DataTypes.STRING(45),
         allowNull: false,
    },
    image_path:{
        type:DataTypes.STRING(255),
        
    },
    
  },
  {
   tableName: 'posts',
    sequelize: connection,
    
    
  },
);

module.exports = PostModel ;