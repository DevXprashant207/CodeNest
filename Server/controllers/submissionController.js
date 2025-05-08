const Submission = require('../models/Submission');

exports.getSubmissionsByUser = async (req, res) => {
  const submissions = await Submission.find({ user: req.user.userId });
  res.json(submissions);
};

exports.saveSubmission = async (req, res) => {
  const { problemId, code, language_id, result } = req.body;
  const submission = new Submission({
    user: req.user.userId,
    problem: problemId,
    code,
    language_id,
    result
  });
  await submission.save();
  res.json({ message: 'Submission saved' });
};
