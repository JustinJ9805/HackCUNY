const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const {Listings, CreateListings} = require('./endpoints/listings');
const { OpenAI } = require('openai')

dotenv.config();
const app = express();
const config = {
    apiKey: process.env.OPENAI_API_KEY
}
const openai = new OpenAI(config)

const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

//listings endpoints
app.get("/listings", Listings);
app.post("/createListings", CreateListings);

//openai chat endpoints
app.post("/clCreation", async (req, res) => {
  try {
    if (!req.body.message || typeof req.body.message !== 'string' || req.body.message.trim() === '') {
      return res.status(400).json({ success: false, error: 'Invalid or empty message' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: req.body.message
        }
      ],
      max_tokens: 300
    });
    console.log(response); 

    if (!response.choices || response.choices.length === 0) {
      return res.status(500).json({ success: false, error: 'Unexpected response format' });
    }

    return res.status(200).json({
      success: true,
      data: response.choices[0].message.content
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});