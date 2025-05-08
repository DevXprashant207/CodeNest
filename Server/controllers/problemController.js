const Problem = require('../models/Problem');

exports.getAllProblems = async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
};

exports.createProblem = async (req, res) => {
  const problem = new Problem(req.body);
  await problem.save();
  res.json({ message: 'Problem added' });
};
