const express = require('express');
const { getAllProblems, createProblem } = require('../controllers/problemController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllProblems);
router.post('/', auth, createProblem); // Only authenticated users can create

module.exports = router;
