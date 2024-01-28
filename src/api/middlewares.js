import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export async function validateToken(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({
                error: "JWT token has expired, please login to obtain a new one"
            });
        }
        req.user = decoded;
        next();
    } catch (err) {
        next(err);
    }
}

export async function validateRefreshToken(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        if (decoded.exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({
                error: "JWT token has expired, please login to obtain a new one"
            });
        }
        req.user = decoded;
        next();
    } catch (err) {
        next(err);
    }
}

export function catchValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    } else {
        next();
    }
}
