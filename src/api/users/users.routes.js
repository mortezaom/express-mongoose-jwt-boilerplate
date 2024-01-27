import express from "express";
import { loginUser, registerUser, refreshToken, fetchUser } from "./users.handler.js";
import { validateRefreshToken, validateToken, catchValidationErrors } from "../middlewares.js";
import { loginUserValidator, registerUserValidator } from "./users.validator.js";

const router = express.Router();

router.post(
    "/register",
    registerUserValidator,
    catchValidationErrors,
    registerUser,
);
router.post(
    "/login",
    loginUserValidator,
    catchValidationErrors,
    loginUser,
);
router.get(
    "/me",
    validateToken,
    fetchUser,
);
router.post(
    "/refresh-token",
    validateRefreshToken,
    refreshToken,
);
export default router;