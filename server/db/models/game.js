const db = require("../db");
const Sequelize = require("sequelize");

const Game = db.define("game", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Name cannot be blank",
      },
    },
  },
  logo: {
    type: Sequelize.STRING,
    defaultValue: "no-image-found.png",
  },
  bio: {
    type: Sequelize.TEXT,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "company must be shown",
      },
    },
  },
});

Game.beforeCreate((game) => {
  const firstName = game.name;
  game.name = firstName[0].toUpperCase() + firstName.slice(1);
});

module.exports = Game;
