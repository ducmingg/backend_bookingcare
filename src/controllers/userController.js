import * as userService from "../services/userService.js";
export const createNewUser = async (req, res) => {
  const data = req.body;
  const message = await userService.createNewUser(data);
  res.status(200).json({ message: data });
};
