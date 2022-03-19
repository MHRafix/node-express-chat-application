// external imports are here
const express = require("express");
const router = express.Router();

// internal imports are here
const { getInbox } = require("../controllers/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login page
router.get("/inbox", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
