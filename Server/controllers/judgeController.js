const axios = require('axios');

exports.runCode = async (req, res) => {
  const { source_code, language_id } = req.body;
  try {
    const { data } = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
      { source_code, language_id },
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
