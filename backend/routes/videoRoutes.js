const express = require("express");
const router = express.Router();
const {
  getAllVideos,
  getVideo,
  postVideo,
  deleteVideo,
  updateVideo,
} = require("../controllers/videoController");

//Get all videos
router.get("/", getAllVideos);

//Get a single video
router.get("/:id", getVideo);

//Post a new video
router.post("/", postVideo);

//Delete a video
router.delete("/:id", deleteVideo);

//Update a video
router.patch("/:id", updateVideo);

module.exports = router;
