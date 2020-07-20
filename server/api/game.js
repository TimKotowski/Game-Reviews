const router = require("express").Router();
// bring in models hear
const { Game, User, Review } = require("../db/models");
const { Op } = require("sequelize");

// search% find any values that start with that serach query
//  %search find any values that end with that search query
//  ' find any querys that have the %search%' query in any postion

// error handler
const gameNotFound = (next) => {
  const error = new Error("Game Not Found, please enter in the right fields");
  error.status = 404;
  next(error);
};

router.get("/", async (req, res, next) => {
  try {
    let filter = {};
    const search = req.query.search;
    if (search) {
      filter = {
        where: {
          name: {
            [Op.iLike]: `${search}%`,
          },
        },
      };
    }
    const gameReview = await Game.findAll(filter);
    if (!gameReview) {
      gameNotFound(next);
    } else {
      res.json(gameReview);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleGame = await Game.findByPk(id);

    if (!singleGame) {
      gameNotFound(next);
    } else {
      res.json(singleGame);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { rating, content, gameId, userId } = req.body;

    const review = await Review.create({
      rating,
      content,
      gameId,
      userId,
    });

    // await review.setGame(gameId)
    // await review.setUser(userId)
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const [userCount, affectedUser] = await Game.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    });

    if (!affectedUser) {
      gameNotFound(next);
    } else {
      res.json(affectedUser);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
