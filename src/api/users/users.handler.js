import UserModel, { hashPassword, generateToken, comparePassword, generateRefreshToken } from './users.model.js';

export const registerUser = async (req, res) => {
    try {
        const body = req.body;
        const password = await hashPassword(body.password);
        const user = await UserModel.create({
            email: body.email,
            password,
            fullName: body.fullName,
            role: body.role,
        });
        const accessToken = await generateToken(user);
        const refreshToken = await generateRefreshToken(user);
        res.status(200).json({
            ...user.toObject(),
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            const isMatch = await comparePassword(password, user.password);
            if (isMatch) {
                const accessToken = await generateToken(user);
                const refreshToken = await generateRefreshToken(user);
                res.status(200).json({
                    ...user.toObject(),
                    accessToken,
                    refreshToken,
                });
            }
        }
        res.status(401).json({ error: 'Invalid username/password' });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export const refreshToken = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id);
        const accessToken = await generateToken(user);
        const refreshToken = await generateRefreshToken(user);
        res.status(200).json({
            ...user.toObject(),
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export const fetchUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}