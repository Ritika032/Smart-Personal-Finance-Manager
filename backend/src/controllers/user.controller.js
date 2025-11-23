const userService = require("../services/user.service");

exports.getProfile = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const profile = await userService.getProfile(req.user.id);

    if (!profile) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const updated = await userService.updateProfile(req.user.id, req.body);

    res.json({ message: "Profile updated", user: updated[0] });
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};
