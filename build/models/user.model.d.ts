import mongoose from "mongoose";
declare const User: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    isVerfied: boolean;
    isRegistered: boolean;
    coins: number;
    accountType: string;
    googleId?: string | null | undefined;
    name?: string | null | undefined;
    password?: string | null | undefined;
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: string | null | undefined;
    role?: "student" | "tutor" | "admin" | null | undefined;
    subscription?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    isVerfied: boolean;
    isRegistered: boolean;
    coins: number;
    accountType: string;
    googleId?: string | null | undefined;
    name?: string | null | undefined;
    password?: string | null | undefined;
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: string | null | undefined;
    role?: "student" | "tutor" | "admin" | null | undefined;
    subscription?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    isVerfied: boolean;
    isRegistered: boolean;
    coins: number;
    accountType: string;
    googleId?: string | null | undefined;
    name?: string | null | undefined;
    password?: string | null | undefined;
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: string | null | undefined;
    role?: "student" | "tutor" | "admin" | null | undefined;
    subscription?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    isVerfied: boolean;
    isRegistered: boolean;
    coins: number;
    accountType: string;
    googleId?: string | null | undefined;
    name?: string | null | undefined;
    password?: string | null | undefined;
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: string | null | undefined;
    role?: "student" | "tutor" | "admin" | null | undefined;
    subscription?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    isVerfied: boolean;
    isRegistered: boolean;
    coins: number;
    accountType: string;
    googleId?: string | null | undefined;
    name?: string | null | undefined;
    password?: string | null | undefined;
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: string | null | undefined;
    role?: "student" | "tutor" | "admin" | null | undefined;
    subscription?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    isVerfied: boolean;
    isRegistered: boolean;
    coins: number;
    accountType: string;
    googleId?: string | null | undefined;
    name?: string | null | undefined;
    password?: string | null | undefined;
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: string | null | undefined;
    role?: "student" | "tutor" | "admin" | null | undefined;
    subscription?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
