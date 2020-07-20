const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { User } = require("../db/models");
module.exports = router;

const verificationCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    console.log("step 1");
    const [user] = await User.findOrCreate({
      where: {
        googleId: profile.id,
      },
      defaults: {
        email: profile.emails.value,
      },
    });
    done(null, user);
  } catch (error) {
    done(error);
  }
};

// utlimately gets triggered by the `done` of verification callback, happens ONCE when the user logs in via google
passport.serializeUser((user, done) => {
  // store the user.id on the session (somewhere)
  done(null, user.id);
});

// gets triggered by our passport session middleware for EVERY request
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    // will mean that `req.user` is equal to the user we just found
    done(null, user);
  } catch (error) {
    done(error);
  }
});

const strategy = new GoogleStrategy(
  {
    clientID:
      "340973571656-nbeegfi75bo395s6dod1hm8j7a27arc5.apps.googleusercontent.com",
    clientSecret: "hX_wuv6ChiLlMdu-JVTPvFD-",
    callbackURL: "/api/google/callback",
  },
  verificationCallback
);

passport.use(strategy);

router.get(
  "/",
  passport.authenticate("google", {
    scope: "email",
  })
);

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/games",
  })
);
