export const oktaConfig = {
    clientId: '0oa82rn9r3Lp9DP4D5d7',
    issuer: 'https://dev-21238995.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck:true,
}
