var msal = require('@azure/msal-node');
require('dotenv').config()

const clientConfig = {
    auth: {
        clientId: process.env.TEST_CLIENT_ID,
        authority: "https://login.microsoftonline.com/" + process.env.TEST_TENANT,
        clientSecret: process.env.TEST_CLIENT_SECRET,
        knownAuthorities: ["login.microsoftonline.com"],
        protocolMode: "OIDC"
    }
};

const cca = new msal.ConfidentialClientApplication(clientConfig);

const clientCredentialRequest = {
    scopes: ["https://analysis.windows.net/powerbi/api/.default"]
};

cca.acquireTokenByClientCredential(clientCredentialRequest).then((response) => {
    console.log("Response: ", response);
}).catch((error) => {
    console.log(JSON.stringify(error));
});