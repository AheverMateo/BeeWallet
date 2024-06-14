import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import UsersModel from "../modules/Users/schema.js";
import { createWalletWhenUserRegister } from "../modules/Wallets/services.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, callback) {
      const email = profile.emails[0].value;

      try {
        let user = await UsersModel.findOne({ email });

        // si no hay un usuario registrado con ese email, tengo que crearlo
        if (!user) {
          const newUser = new UsersModel({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email,
            password: "SECRET",
            loginType: "google",
          });

          newUser.walletId = await createWalletWhenUserRegister(newUser._id);

          user = await newUser.save();
        }

        const sessionData = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          roles: user.roles,
        };

        callback(null, sessionData);
      } catch (error) {
        return callback(error);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
