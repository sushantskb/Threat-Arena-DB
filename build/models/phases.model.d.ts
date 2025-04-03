import mongoose from "mongoose";
declare const Phase: mongoose.Model<{
    phase: mongoose.Types.DocumentArray<{
        name: string;
        content: string;
        slno: number;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        content: string;
        slno: number;
    }> & {
        name: string;
        content: string;
        slno: number;
    }>;
    userProgress: mongoose.Types.DocumentArray<{
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    phase: mongoose.Types.DocumentArray<{
        name: string;
        content: string;
        slno: number;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        content: string;
        slno: number;
    }> & {
        name: string;
        content: string;
        slno: number;
    }>;
    userProgress: mongoose.Types.DocumentArray<{
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}> & {
    phase: mongoose.Types.DocumentArray<{
        name: string;
        content: string;
        slno: number;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        content: string;
        slno: number;
    }> & {
        name: string;
        content: string;
        slno: number;
    }>;
    userProgress: mongoose.Types.DocumentArray<{
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    courseId?: mongoose.Types.ObjectId | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    phase: mongoose.Types.DocumentArray<{
        name: string;
        content: string;
        slno: number;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        content: string;
        slno: number;
    }> & {
        name: string;
        content: string;
        slno: number;
    }>;
    userProgress: mongoose.Types.DocumentArray<{
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    phase: mongoose.Types.DocumentArray<{
        name: string;
        content: string;
        slno: number;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        content: string;
        slno: number;
    }> & {
        name: string;
        content: string;
        slno: number;
    }>;
    userProgress: mongoose.Types.DocumentArray<{
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    phase: mongoose.Types.DocumentArray<{
        name: string;
        content: string;
        slno: number;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        name: string;
        content: string;
        slno: number;
    }> & {
        name: string;
        content: string;
        slno: number;
    }>;
    userProgress: mongoose.Types.DocumentArray<{
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }> & {
        lastCompletedPhase: number;
        isCompleted: boolean;
        userId?: mongoose.Types.ObjectId | null | undefined;
    }>;
    courseId?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Phase;
