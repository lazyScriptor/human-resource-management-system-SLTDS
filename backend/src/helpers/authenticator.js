import express from "express";
const app = express();
const authRouter = express.Router();

// predicate the router with a check and bail out when needed
authRouter.use((req, res, next) => {
  if (true) return next("router");
  next();
});

export default authRouter;
