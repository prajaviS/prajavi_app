const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use the provided Heroku PORT or 3000 locally

app.use(bodyParser.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
  const requestData = req.body.data;

  // Extract data from the JSON request
  const {
    is_success,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  } = processData(requestData);

  // Prepare the response JSON
  const response = {
    is_success,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  };

  res.status(200).json(response);
});

// Function to process the data
function processData(data) {
  // Extract and process data here as described in the request
  const user_id = 'prajavi_sharma_25122002';
  const email = 'ps5678@srmist.edu.in';
  const roll_number = 'RA2011003030222';

  const numbers = data.filter((item) => typeof item === 'number');
  const alphabets = data.filter((item) => typeof item === 'string' && item.length === 1);

  const highest_alphabet = alphabets.length > 0 ? [Math.max(...alphabets)] : [];

  return {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  };
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
