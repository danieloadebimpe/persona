export const CONFIG = {
  auth0: {
    domainUrl: process.env.REACT_APP_AUTH0_DOMAIN_URL || "",
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN_URL}/api/v2/` || "",
    gitToken: localStorage.getItem("git_access_token") || "",
  },
};
