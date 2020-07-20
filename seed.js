const { db, Game, User, Review } = require("./server/db/models");
const games = require("./pokemon_seed");

const seed = async () => {
  try {
    await db.sync({ force: true });
    await User.create({
      firstName: "Timmy",
      lastName: "Kotowski",
      email: "blablah@gmail.com",
    });
    await Review.sync();
    await Game.bulkCreate(games);
  } catch (error) {
    console.log(error.message);
  }
};
seed();
