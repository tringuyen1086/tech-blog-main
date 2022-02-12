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

module.exports = seedUsers;
