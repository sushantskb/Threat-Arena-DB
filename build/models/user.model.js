import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
    },
    avatar: {
        type: String,
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
        enum: ["student", "tutor", "admin"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isRegistered: {
        type: Boolean,
        default: false,
    },
    coins: {
        type: Number,
        default: 60,
    },
    vouchers: {
        type: Number,
    },
    accountType: {
        type: String,
        default: "free",
    },
    subscription: {
        type: String,
    },
}, {
    timestamps: true,
});
const User = mongoose.model("User", userSchema);
export default User;
