import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  //  roomNumbers: [{ number: String, unavailableDates: {type: [Date]}}],
  rooNumbers:[{number: String}]
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
