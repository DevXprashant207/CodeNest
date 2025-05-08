const express = require('express');
const { getSubmissionsByUser, saveSubmission } = require('../controllers/submissionController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getSubmissionsByUser);
router.post('/', auth, saveSubmission);

module.exports = router;
