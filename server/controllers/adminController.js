import User from "../models/User.js";

export const resetSystem = async (req, res) => {
  try {
    await User.deleteMany({ role: { $ne: "admin" } });
    res.json({ message: "System reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error resetting system" });
  }
};

export const manageBosses = async (req, res) => {
  try {
    const { userId, action } = req.body;
    if (action === "promote") {
      await User.findByIdAndUpdate(userId, { role: "boss" });
    } else if (action === "demote") {
      await User.findByIdAndUpdate(userId, { role: "manager" });
    }
    res.json({ message: "Boss role updated" });
  } catch (error) {
    res.status(500).json({ message: "Error managing bosses" });
  }
};
