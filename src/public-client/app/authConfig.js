const msalConfig = {
    auth: {
        clientId: "f6d4b406-0e6c-4c46-a47e-d2748da960d8",
        authority: "https://login.microsoftonline.com/consumers",
        redirectUri: "http://localhost:3000",
        knownAuthorities: ["login.microsoftonline.com"],
        protocolMode: "OIDC"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case msal.LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case msal.LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case msal.LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case msal.LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

const loginRequest = {
    scopes: ["Xboxlive.signin", "Xboxlive.offline_access"]
};

const tokenRequest = {
    scopes: ["Xboxlive.signin", "Xboxlive.offline_access"],
    forceRefresh: false
};