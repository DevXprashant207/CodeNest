const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  code: String,
  language_id: Number,
  result: Object,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
