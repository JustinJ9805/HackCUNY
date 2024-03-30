const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const textract = require('textract');
const fileUpload = require('express-fileupload');

const {Listings, CreateListings} = require('./endpoints/listings');
const { CoverLetter, ResumeHandler } = require('./endpoints/openai');
const { ResumeUpload } = require('./endpoints/uploads');
const {LoginUser, RedirectUser } = require('./endpoints/auth');
const expressSession = require('express-session');


const app = express();
const port = process.env.PORT || 3002;
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use(expressSession({
    secret: '1234567asdfghjkl', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
    }
}));

//listings endpoints
app.get("/listings", Listings);
app.post("/createListings", CreateListings);

//openai chat endpoints
app.post("/clCreation", CoverLetter);
app.post("/constructResumeSections", ResumeHandler);

//document processing endpoints
app.post('/resumeUpload',ResumeUpload);

//auth
app.get('/auth', LoginUser);
app.get('/user', RedirectUser);
app.get('/session', (req, res) => {
    if(req.session){
        res.send({
            session: req.session,
            user: req.session.user,
            accessToken: req.session.accessToken
        });
    }
}); 
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});