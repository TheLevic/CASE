const Video = require("../models/VideoModel");
const mongoose = require("mongoose");

//Get all videos
const getAllVideos = async (req, res) => {
  try {
    //Getting all videos
    const videos = await Video.find({}).sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get a video
const getVideo = async (req, res) => {
  //Get a single video
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No video with id: ${id}`);
    const video = await Video.findById(id);
    if (!video) {
      res.status(404).json({ message: "Video not found" });
    } else {
      return res.status(200);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//POST a new video
const postVideo = async (req, res) => {
  const { title, date, category } = req.body;
  const newVideo = await Video.create({ title, date, category });
  res.status(201).json(newVideo);
};

//Delete a video
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No video with id: ${id}`);
    } else {
      await Video.findByIdAndRemove(id);
      res.json({ message: "Video deleted successfully." });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update a videos information
const updateVideo = async (req, res) => {};

module.exports = {
  getAllVideos,
  getVideo,
  postVideo,
  deleteVideo,
  updateVideo,
};
