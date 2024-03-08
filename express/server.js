const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const {Listings, CreateListings} = require('./endpoints/listings');
const { CoverLetter } = require('./endpoints/openai');

const app = express();
const port = process.env.PORT || 3002;
dotenv.config();
app.use(express.json());
app.use(cors());



//listings endpoints
app.get("/listings", Listings);
app.post("/createListings", CreateListings);

//openai chat endpoints
app.post("/clCreation", CoverLetter);



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});