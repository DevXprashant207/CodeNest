const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  sampleInput: String,
  sampleOutput: String
});

module.exports = mongoose.model('Problem', problemSchema);
