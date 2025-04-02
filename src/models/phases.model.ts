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
});

const Phase = mongoose.model("Phase", phaseSchema);
export default Phase;
