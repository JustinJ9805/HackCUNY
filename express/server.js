const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const Listings = require('./endpoints/listings');

dotenv.config();
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.get("/listings", Listings);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});