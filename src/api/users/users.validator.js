import { body } from "express-validator";

export const registerUserValidator = [
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
    body("fullName"),
    body("role").isIn(["super_admin", "admin", "user"]),
];

export const loginUserValidator = [
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
];