const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const knexConfig = require('./knexfile');
const Knex = require('knex');

dotenv.config();
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const connectToDB = async (req, res, callback) => {
  const knex = Knex(knexConfig.development);
  try {
    await callback(knex, req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    knex.destroy();
  }
};

app.get('/listings', async (req, res) => {
  console.log("endpoint hit")
  await connectToDB(req, res, async (knex, req, res) => {
    const listings = await knex('listings').select('*');
    res.json(listings);
  });
});
