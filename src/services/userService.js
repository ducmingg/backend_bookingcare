const db = require("../models/index.js");

const create = async (data) => {
  try {
    await db.User.create({
      email: data.message.email,
      password: data.message.password,
      firstName: data.message.firstName,
      lastName: data.message.lastName,
      address: data.message.address,
      gender: data.message.gender === "1" ? true : false,
      roleId: data.message.roleId,
    });
    resolve("ok");
  } catch (error) {
    reject(error);
  }
};

const findAll = async () => {
  try {
    const users = await db.User.findAll();
    return users;
  } catch (error) {
    return null;
  }
};


module.exports = { create, findAll };
