const connectToDB = require("../connectToDB");

async function Listings(req, res) {
    try {
        console.log("Endpoint hit: /listings");
        const db = await connectToDB();
        const listings = await db('listings').select('*');
        res.json(listings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function CreateListings(req,res){
    if(!req.body || !req.body.title || !req.body.subtitle || !req.body.tags || !req.body.description){
        return res.status(400).json({message: "Invalid request"});
    }
    try {
        console.log("Endpoint hit: /createListings");
        const db = await connectToDB();
        const listings = await db('listings').insert(req.body);
        res.json(listings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    Listings,
    CreateListings
};
