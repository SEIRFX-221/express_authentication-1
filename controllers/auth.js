const express = require('express');
const router = express.Router();
const passport = require('./config/ppConfig');

router.get("/signup", (req, res) => {
  return res.render("auth/signup");
});

router.get("/login", (req, res) => {
  return res.render("auth/login");
});

module.exports = router;

<form action="/auth/login" method="POST">
  <label for="auth-email">Email</label>
  <input id="auth-email" type="email" name="email" required>

    <label for="auth-password">Password</label>
    <input id="auth-password" type="password" name="password" required>

      <input type="submit" value="Log In">
      </form>