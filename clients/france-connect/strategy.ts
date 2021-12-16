import { Issuer, Strategy, generators, TokenSet } from 'openid-client';
import passport from 'passport';
import routes from '../routes';

const issuerUrl = process.env.FC_ISSUER as string;
const issuer = new Issuer({
  issuer: issuerUrl,
  authorization_endpoint: issuerUrl + routes.franceConnect.authorization,
  token_endpoint: issuerUrl + routes.franceConnect.token,
  userinfo_endpoint: issuerUrl + routes.franceConnect.userInfo,
  token_endpoint_auth_methods_supported: ['client_secret_post'],
});
const client = new issuer.Client({
  client_id: process.env.FC_CLIENT_ID as string,
  client_secret: process.env.FC_CLIENT_SECRET as string,
  redirect_uris: [process.env.FC_REDIRECT_URI as string],
  id_token_signed_response_alg: 'HS256',
});
passport.use(
  'franceConnect',
  new Strategy(
    {
      client,
      params: {
        nonce: generators.nonce(),
        state: generators.state(),
        acr_values: 'eidas1',
        scope: 'openid gender given_name family_name birthdate',
      },
      usePKCE: false,
    },
    (_token: TokenSet, userInfo: object, done: Function) => {
      console.log(userInfo);
      done(null, userInfo);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user as Express.User);
});
