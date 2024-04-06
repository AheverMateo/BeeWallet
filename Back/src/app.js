import express from "express";
import "dotenv/config";
import compression from "compression";
import { connectDb } from "./config/mongoConnect.js";
import { addLogger } from "./config/logger.js"; // Import logger and addLogger
import { logger } from "./config/logger.js";

import usersRouter from "./modules/Users/router.js";
import authRouter from "./modules/Users/Auth/router.js";
import walletRouter from "./modules/Wallet/router.js";

connectDb()

const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT, () => {
   console.log("listening on port: " + PORT);
});

// Middlewares //
app.use(express.static('public')); // serve public
app.use(addLogger); // general logging
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

app.use(compression({})); // Enable response compression

// Routers //
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/wallet", walletRouter);

// Error handlers //

//Bad JSON
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

