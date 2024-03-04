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

module.exports = Listings;
