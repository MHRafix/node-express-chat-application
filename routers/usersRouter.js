// external imports are here
const express = require("express");
const router = express.Router();

// internal imports are here
const { getUsers } = require("../controllers/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login page
router.get("/users", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
