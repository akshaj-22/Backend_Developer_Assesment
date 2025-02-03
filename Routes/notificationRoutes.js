const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

// Get Notifications for User
router.get("/notifications/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching notifications" });
  }
});

module.exports = router;
