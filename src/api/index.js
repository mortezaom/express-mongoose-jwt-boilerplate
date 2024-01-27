import express from "express";
import users from "./users/users.routes.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use(users);

export default router;