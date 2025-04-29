import mongoose from "mongoose";
declare const Section: mongoose.Model<{
    progress: mongoose.Types.DocumentArray<{
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    content: string;
    title: string;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    progress: mongoose.Types.DocumentArray<{
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    content: string;
    title: string;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}> & {
    progress: mongoose.Types.DocumentArray<{
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    content: string;
    title: string;
    courseId?: mongoose.Types.ObjectId | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    progress: mongoose.Types.DocumentArray<{
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    content: string;
    title: string;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    progress: mongoose.Types.DocumentArray<{
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    content: string;
    title: string;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    progress: mongoose.Types.DocumentArray<{
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    content: string;
    title: string;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Section;
