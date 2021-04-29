const express = require('express');
const router = express.Router();
const mainController = require('mainController');



router.get(['/home', '/', ''], mainController.index);

module.exports = router;