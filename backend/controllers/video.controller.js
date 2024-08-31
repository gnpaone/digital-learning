const Video = require('../models/video.model.js');
const mongoose = require('mongoose');

exports.getVideos = async (req, res) => {
  try {
      const videos = await Video.find().sort({ order: 1 });
      res.json(videos);
  } catch (err) {
      res.status(500).json({ error: 'Server error' });
  }
};

exports.updateProgress = async (req, res) => {
  const { videoId, progress } = req.body;

  try {
      const session = await mongoose.startSession();
      session.startTransaction();

      await Video.updateOne({ _id: videoId }, { $set: { progress } }, { session });

      await session.commitTransaction();
      session.endSession();

      res.json({ success: true, progress });
  } catch (err) {
      res.status(500).json({ error: 'Server error' });
  }
};