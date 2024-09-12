const userService = require("../services/userService.js");
const { create } = require("../services/userService.js");
const createNewUser = async (req, res) => {
  const data = req.body;
  await create(data);
  res.status(200).json(data);
};
module.exports = { createNewUser };
