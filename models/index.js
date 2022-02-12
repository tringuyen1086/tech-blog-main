// import each Model
const User = require('./User');

const Post = require('./Post');

const Comment = require('./Comment');

// setup associations

// user has many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post belong to one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment belongs to one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment belongs to one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// user has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});


// setup Comment associations


// modularize this file by exporting an object containing each Model
module.exports = { User, Post , Comment };
