const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot');
router.get('/', chatbotController.reactChat);

module.exports = router;