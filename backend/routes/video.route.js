const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controller.js');

router.get('/', videoController.getVideos);
router.post('/progress', videoController.updateProgress);

module.exports = router;
