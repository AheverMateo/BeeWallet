import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get("/", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/callback",
  passport.authenticate("google", {
    //successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/api/auth/google/login/failed",
  }),
  (req, res) => {
    console.log(req.session);
    console.log(req.user);
    res.redirect(process.env.CLIENT_URL);
  }
);

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.redirect(process.env.CLIENT_URL);
  });
});

export default router;
