const express = require("express");
const Group = require("../models/Group");
const Notification = require("../models/Notification");

const router = express.Router();

// Create Group
router.post("/groups", async (req, res) => {
  try {
    const { name, adminId } = req.body;
    const newGroup = new Group({ name, admin: adminId, members: [adminId] });
    await newGroup.save();
    res.status(201).json({ message: "Group created successfully", newGroup });
  } catch (error) {
    res.status(500).json({ error: "Error creating group" });
  }
});

// Add Member to Group
router.post("/groups/:groupId/add", async (req, res) => {
  try {
    const { groupId } = req.params;
    const { userId } = req.body;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ error: "Group not found" });

    if (group.members.includes(userId)) {
      return res.status(400).json({ error: "User already in group" });
    }

    group.members.push(userId);
    await group.save();

    // Send Notifications
    await Notification.create({ user: userId, message: `You were added to group: ${group.name}` });
    await Notification.create({ user: group.admin, message: `A new member was added to your group: ${group.name}` });

    res.json({ message: "Member added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding member to group" });
  }
});

module.exports = router;
