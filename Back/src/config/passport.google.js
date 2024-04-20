import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      // todo: agregar código para buscar el usuario en la BD
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
