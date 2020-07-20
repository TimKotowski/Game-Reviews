const router = require("express").Router();
const { User } = require("../db/models");

// error handler
const userNotFound = (next) => {
  const error = new Error("No user was found");
  error.stack = 404;
  next(error);
};

router.get("/me", async (req, res, next) => {
  try {
    if (!req.session.userId) {
      if (req.user) {
        res.json(req.user);
      } else {
        userNotFound(next);
      }
    } else {
      const user = await User.findByPk(req.session.userId);
      if (!user) {
        userNotFound(next);
      } else {
        res.json(user);
      }
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    if (user) {
      res.json(user);
    } else {
      userNotFound(next);
    }
  } catch (error) {
    console.log(error);
  }
});

// when user logs in findHim
router.put("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(JSON.stringify(req.body));
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      userNotFound(next);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/logout", (req, res, next) => {
  try {
    req.session.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
