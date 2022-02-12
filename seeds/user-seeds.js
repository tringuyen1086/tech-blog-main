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

// The password will not be hashed by seed bulk create. It has to be hashed via the update route before the login route
// sign up new and use the new login is recommended.
module.exports = seedUsers;
