const { User } = require("../models");

const userData = [
  {
    username: "Abys",
    password: "pass1234",
  },
  {
    username: "Barn",
    password: "pass1234",
  },
  {
    username: "Today",
    password: "pass1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

// the password is not hashed by seed bulk. It has to be hashed via the update rout before the login route.
module.exports = seedUsers;
