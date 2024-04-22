import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import UsersModel from "../modules/Users/schema";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, callback) {
      // todo: agregar código para buscar el usuario en la BD
      console.log(profile);
      const email = profile.emails[0].value;

      try {
        const user = await UsersModel.findOne({ email });

        // si no hay un usuario registrado con ese email, tengo que crearlo
        if (!user) {
          
        }
      } catch (error) {
        return callback(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
