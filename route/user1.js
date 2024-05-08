const express = require('express');
const router = express.Router();
const URL = require("../models/user");

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/signin", (req, res) => {
  return res.render("signin");
});
module.exports = router