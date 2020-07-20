const router = require("express").Router();
module.exports = router;

router.use("/game", require("./game"));
router.use("/user", require("./user"));
router.use("/review", require("./review"));
router.use("/google", require("./oauth"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
