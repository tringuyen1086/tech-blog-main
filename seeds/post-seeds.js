const { Post } = require('../models');

const postData = [{
        title: 'Blog 1',
        content: 'Welcome to the Tech Blog.',
        user_id: 1

    },
    {
        title: 'Blog 2',
        content: 'Coding is all about passion.',
        user_id: 2
    },
    {
        title: 'Blog 3',
        content: 'Have you practiced coding today?.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;