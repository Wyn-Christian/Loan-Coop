var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "This is the loan coop index" });
});

module.exports = router;
