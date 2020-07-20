const router = require("express").Router();
const { Review } = require("../db/models");

const reviewsNotFound = (next) => {
  const error = new Error("no review found");
  error.stack = 404;
  next(error);
};

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    if (!reviews) {
      reviewsNotFound(next);
    } else {
      res.json(reviews);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
