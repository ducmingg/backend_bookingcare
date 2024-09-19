const {
  create,
  findAll,
  edit,
  del,
  login,
} = require("../services/userService.js");
const { createToken } = require("../middleware/token.js");
const createNewUser = async (req, res) => {
  const data = req.body;
  const message = await create(data);
  if (message == "ok") {
    return res.status(200).json({ message: "Insert success" });
  } else {
    return res.status(500).json({ message: "Insert error" });
  }
};

const loginUser = async (req, res) => {
  const data = req.body;
  const message = await login(data);
  switch (message) {
    case "User is not found!":
      res.status(500).json({ message: "User is not found" });
      break;
    case "Password is wrong!":
      res.status(500).json({ message: "Password is wrong!" });
      break;
    default:
      const data = { id: message.id, roleId: message.roleId };
      const token = createToken(data);
      res
        .status(200)
        .json({ message: "Login success", users: message, token: token });
      break;
  }
};

const getAllUser = async (req, res) => {
  const users = await findAll();
  return res.status(200).json(users);
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const msg = await edit(id, data);
  if (msg == "ok") {
    return res.status(200).json({ message: "Edit success" });
  } else {
    return res.status(500).json({ message: "Edit error" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const msg = await del(id);
  console.log(msg);
  if (msg == "ok") {
    return res.status(200).json({ message: "Delete success" });
  } else {
    return res.status(500).json({ message: "Delete Error" });
  }
};

module.exports = { createNewUser, getAllUser, editUser, deleteUser, loginUser };
