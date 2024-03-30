const msal = require('@azure/msal-node');
const dotenv = require('dotenv');

dotenv.config();

const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority: process.env.AUTHORITY,
        clientSecret: process.env.CLIENT_SECRET,
    }
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

async function getToken() {
    var request = {
        scopes: ["https://graph.microsoft.com/.default"],
    };
    let response = await cca.acquireTokenByClientCredential(request);
    console.dir(response.accessToken);
    return response.accessToken;
}

async function LoginUser(req, res) {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:3001/user/",
    };
    const response = await cca.getAuthCodeUrl(authCodeUrlParameters);
    res.redirect(response);
}

async function RedirectUser(req, res) {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:3001/user/",
    };

    try {
        const response = await cca.acquireTokenByCode(tokenRequest);
        console.log("\nResponse: \n:", response);
        const accessToken = response.accessToken;
        const user = {
            id: response.account.homeAccountId.split('.')[0],
            username: response.account.username,
        };
        console.log("user", user);
        console.log("accessToken", accessToken);
        req.session.user = user;
        req.session.accessToken = accessToken;

        // Save the session before redirecting
        await req.session.save(err => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.redirect('http://localhost:3000');
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
module.exports = { 
    LoginUser, 
    RedirectUser 
};