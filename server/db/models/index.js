const Game = require("./game");
const User = require("./user");
const Review = require("./review");
const db = require("../db");

User.hasMany(Review);
Review.belongsTo(User);

Game.hasMany(Review);
Review.belongsTo(Game);

module.exports = {
  Review,
  User,
  Game,
  db,
};
