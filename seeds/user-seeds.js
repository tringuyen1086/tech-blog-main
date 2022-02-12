const { User } = require("../models");

const userData = [
  {
    username: "tring",
    password: "pass1234",
  },
  {
    username: "Future",
    password: "pass1234",
  },
  {
    username: "rose",
    password: "pass1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

// the password is not hashed by seed bulk. It has to be hashed via the update rout before the login route.
module.exports = seedUsers;
