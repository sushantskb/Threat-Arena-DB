import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  phase: [
    {
      slno: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],

  userProgress: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      lastCompletedPhase: {
        type: Number,
        default: 0,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Phase = mongoose.model("Phase", phaseSchema);
export default Phase;
