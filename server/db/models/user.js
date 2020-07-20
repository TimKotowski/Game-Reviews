const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Name must be required",
      },
      isAlpha: {
        args: true,
        msg: "name most only contain letters",
      },
      len: {
        args: [2, 15],
        msg: "Name must be between 2 and 15 cahracters",
      },
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Name must be required",
      },
      isAlpha: {
        args: true,
        msg: "name most only contain letters",
      },
      len: {
        args: [2, 15],
        msg: "Name must be between 2 and 15 cahracters",
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
  googleId: {
    type: Sequelize.STRING,
  },
});

module.exports = User;

// User.beforeCreate((user, options) => {
//   return bcrypt.hash(user.password, 10)
//       .then(hash => {
//           user.password = hash;
//       })
// });

User.beforeCreate((user, options) => {
  const firstName = user.firstName;
  const lastName = user.lastName;

  user.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  user.lastName = lastName[0].toUpperCase() + lastName.slice(1);
});
