const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Welcome to the Tech Blog",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Thank you for sharing!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Great! Thanks!",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

// The password will not be hashed by seed bulk create. It has to be hashed via the update route before the login route
// sign up new and use the new login is recommended.
module.exports = seedComments;
