const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  //Create timestamps for when video is created
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Video", videoSchema);
