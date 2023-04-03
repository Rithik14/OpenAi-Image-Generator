const express = require('express');
const { generateImage } = require('../controller/openaicontroller');
const router = express.Router();

router.post('/generateimage',generateImage);

module.exports = router;