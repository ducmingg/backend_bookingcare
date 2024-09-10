const userService = require("../services/userService.js");
const createNewUser = async (req, res) => {
  const data = req.body;
  const message = await userService.createNewUser(data);
  res.status(200).json({ message: data });
};
module.exports = { createNewUser };
