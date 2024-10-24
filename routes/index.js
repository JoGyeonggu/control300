var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("dashboard.html");
});

/* GET game creation page. */
router.get("/game", function (req, res, next) {
  res.render("game.html");
});

/* GET dashboard page. */
router.get("/player", function (req, res, next) {
  res.render("player.html");
});

/* GET dashboard page. */
router.get("/dashboard", function (req, res, next) {
  res.render("dashboard.html");
});

module.exports = router;
