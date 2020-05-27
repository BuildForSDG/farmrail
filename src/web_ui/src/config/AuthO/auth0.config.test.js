import Auth0 from './index';

it("should return Auth0 config object", () => {
    expect(Auth0).toEqual({
        domain: 'farmrail.auth0.com',
        clientId: process.env.REACT_APP_AUTH0_CLIENT_ID
    })
})