const { create, findAll } = require("../services/userService.js");
const createNewUser = async (req, res) => {
  const data = req.body;
  const message = await create(data);
  if (message == "ok") {
    return res.status(200).json({ message: "Insert success" });
  } else {
    return res.status(500).json({ message: "Insert error" });
  }
};

const getAllUser = async (req, res) => {
  const users = await findAll();
  return res.status(200).json(users);
};

const editUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
};

module.exports = { createNewUser, getAllUser, editUser };
