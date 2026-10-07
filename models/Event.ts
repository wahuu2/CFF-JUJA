import mongoose, { Schema, models } from "mongoose";

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
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

const Event = models.Event || mongoose.model("Event", EventSchema);

export default Event;