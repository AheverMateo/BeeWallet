import express from "express";
import "dotenv/config";
import session from "express-session";
import compression from "compression";
import { connectDb } from "./config/mongoConnect.js";
import { addLogger, logger } from "./config/logger.js"; // Import logger and addLogger
import MongoStore from "connect-mongo";
import passport from "passport";
import cors from "cors";

import usersRouter from "./modules/Users/router.js";
import authRouter from "./modules/Users/Auth/router.js";
import walletsRouter from "./modules/Wallets/router.js";
import transactionsRouter from "./modules/Transactions/router.js";
import investmentRouter from "./modules/Investments/router.js";
import creditsRouter from "./modules/Credits/router.js";
import googleAuthRouter from "./modules/Users/GoogleAuth/router.js";
import "./config/passport.google.js";

connectDb();

const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});

// Middlewares //
app.use(express.static("public")); // serve public
app.use(addLogger); // general logging
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
  }),
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      dbName: "beewalletdb",
    }),
    cookie: {
      httpOnly: true,
      secure: "auto",
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      sameSite: "None",
    },
  }),
);
app.use(compression({})); // Enable response compression

//  Middlewares OAuth Google
app.use(passport.initialize());
app.use(passport.session());

// Routers //
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/wallets", walletsRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/investments", investmentRouter);
app.use("/api/credits", creditsRouter);
app.use("/api/auth/google", googleAuthRouter);

// Error handlers //

// Bad JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    res.status(400).json({ error: "Invalid JSON" });
  } else {
    next(err);
  }
});

// Catch all //
app.use((err, req, res, next) => {
  logger.error(`${err.stack}`);
  res.status(500).json({ error: "Internal Server Error (Catch all   )" });
});
