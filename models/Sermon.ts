import mongoose, { Schema, models } from "mongoose";

const SermonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    speaker: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: String,
      required: true,
    },

    scripture: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    videoUrl: {
      type: String,
      default: "",
    },

    audioUrl: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
  },
  {
    timestamps: true,
  }
);

const Sermon =
  models.Sermon || mongoose.model("Sermon", SermonSchema);

export default Sermon;