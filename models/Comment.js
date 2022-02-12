// set up Model & DataTypes from sequelize
const { Model, DataTypes } = require('sequelize');
// set up sequelize from connection.js
const sequelize = require('../config/connection');
// define the Conversation class that extends Model
class Comment extends Model {}
// initialize the comment columns and options
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);
// modularize this script by exporting comment
module.exports = Comment;
