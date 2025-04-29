import mongoose from "mongoose";
const sectionSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    progress: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            isCompleted: {
                type: Boolean,
                required: true,
                default: false,
            },
        },
    ],
});
const Section = mongoose.model("Section", sectionSchema);
export default Section;
