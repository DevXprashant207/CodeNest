const express = require('express');
const { runCode } = require('../controllers/judgeController');
const router = express.Router();

router.post('/run', runCode);
module.exports = router;
