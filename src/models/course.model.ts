import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseImg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    sections: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
    exercises: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
    },
    level: {
      type: String,
      required: true,
      enum: ["Fundamental", "Easy", "Medium", "Hard", "Expert"],
      default: "Fundamental",
    },
    type: {
      type: String,
      required: true,
      enum: ["General", "Offensive", "Deffensive", "Purple", "Red"],
      default: "Free",
    },
    tier: {
      type: Number,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
    coins: {
      type: Number,
      default: 0
    },
    enrolled: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        progress: {
          type: Number,
          default: 0,
        },
      },
    ],  
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
