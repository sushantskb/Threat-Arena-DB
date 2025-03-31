import mongoose from "mongoose";
declare const Otp: mongoose.Model<{
    email: string;
    otp: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    otp: string;
}> & {
    email: string;
    otp: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    otp: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    otp: string;
}>> & mongoose.FlatRecord<{
    email: string;
    otp: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Otp;
