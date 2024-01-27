import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['super_admin', 'admin', 'user'],
        default: 'user',
    },
});
userSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    },
});
const UserModel = model('users', userSchema);

export default UserModel;

export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
}

export async function comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
}

export async function generateToken(user) {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}
export async function generateRefreshToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
}