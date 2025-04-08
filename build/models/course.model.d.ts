import mongoose from "mongoose";
declare const Course: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "General" | "Offensive" | "Deffensive" | "Purple" | "Red";
    hours: number;
    courseImg: string;
    title: string;
    content: string;
    level: "Fundamental" | "Easy" | "Medium" | "Hard" | "Expert";
    tier: number;
    enrolled: mongoose.Types.DocumentArray<{
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    phases?: mongoose.Types.ObjectId | null | undefined;
    sections?: mongoose.Types.ObjectId | null | undefined;
    exercises?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "General" | "Offensive" | "Deffensive" | "Purple" | "Red";
    hours: number;
    courseImg: string;
    title: string;
    content: string;
    level: "Fundamental" | "Easy" | "Medium" | "Hard" | "Expert";
    tier: number;
    enrolled: mongoose.Types.DocumentArray<{
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    phases?: mongoose.Types.ObjectId | null | undefined;
    sections?: mongoose.Types.ObjectId | null | undefined;
    exercises?: mongoose.Types.ObjectId | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "General" | "Offensive" | "Deffensive" | "Purple" | "Red";
    hours: number;
    courseImg: string;
    title: string;
    content: string;
    level: "Fundamental" | "Easy" | "Medium" | "Hard" | "Expert";
    tier: number;
    enrolled: mongoose.Types.DocumentArray<{
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    phases?: mongoose.Types.ObjectId | null | undefined;
    sections?: mongoose.Types.ObjectId | null | undefined;
    exercises?: mongoose.Types.ObjectId | null | undefined;
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
    type: "General" | "Offensive" | "Deffensive" | "Purple" | "Red";
    hours: number;
    courseImg: string;
    title: string;
    content: string;
    level: "Fundamental" | "Easy" | "Medium" | "Hard" | "Expert";
    tier: number;
    enrolled: mongoose.Types.DocumentArray<{
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    phases?: mongoose.Types.ObjectId | null | undefined;
    sections?: mongoose.Types.ObjectId | null | undefined;
    exercises?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "General" | "Offensive" | "Deffensive" | "Purple" | "Red";
    hours: number;
    courseImg: string;
    title: string;
    content: string;
    level: "Fundamental" | "Easy" | "Medium" | "Hard" | "Expert";
    tier: number;
    enrolled: mongoose.Types.DocumentArray<{
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    phases?: mongoose.Types.ObjectId | null | undefined;
    sections?: mongoose.Types.ObjectId | null | undefined;
    exercises?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "General" | "Offensive" | "Deffensive" | "Purple" | "Red";
    hours: number;
    courseImg: string;
    title: string;
    content: string;
    level: "Fundamental" | "Easy" | "Medium" | "Hard" | "Expert";
    tier: number;
    enrolled: mongoose.Types.DocumentArray<{
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        progress: number;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    phases?: mongoose.Types.ObjectId | null | undefined;
    sections?: mongoose.Types.ObjectId | null | undefined;
    exercises?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Course;
