const db = require("../db");
const Sequelize = require("sequelize");

const Review = db.define("review", {
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 5,
    },
    defaultValue: 0,
  },
  content: {
    type: Sequelize.TEXT,
  },
});

module.exports = Review;
