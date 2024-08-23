const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");
const { handleUserSignup, handlerUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/", handleUserSignup);

router.post("/login", handlerUserLogin);

module.exports = router;
