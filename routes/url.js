const express = require('express');
const router = express.Router();
const {
    handlerCreateShortUrl,
    handlerGetAnalytics
} = require('../controllers/url')

router.post('/',handlerCreateShortUrl)

router.get('/analytics/shortId', handlerGetAnalytics)

module.exports = router