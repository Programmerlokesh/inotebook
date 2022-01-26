import mongoose from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
    unique: true,
  },

  tag: {
    type: String,
    default: "General",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", NoteSchema);
