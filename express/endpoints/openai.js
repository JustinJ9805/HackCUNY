const { OpenAI } = require('openai')
const dotenv = require('dotenv');
dotenv.config();

const config = {
    apiKey: process.env.OPENAI_API_KEY
}
const openai = new OpenAI(config)

async function CoverLetter(req, res) {
    try {
        if (!req.body.message || typeof req.body.message !== 'string' || req.body.message.trim() === '') {
          return res.status(400).json({ success: false, error: 'Invalid or empty message' });
        }
    
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: req.body.message
            }
          ],
          max_tokens: 500
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
}

module.exports = {
    CoverLetter
};
