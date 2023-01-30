const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url.controller');

router.get('/getAllElements', urlController.getAllElements);
router.post('/shorten', urlController.createShortUrl);
router.get('/:id', urlController.getOriginalUrl);

module.exports = router;
