const { User } = require('../models');

const userData = [{
        username: 'Abys',
        password: 'pass1234'

    },
    {
        username: 'Barn',
        password: 'pass1234'
    },
    {
        username: 'Today',
        password: 'pass1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;