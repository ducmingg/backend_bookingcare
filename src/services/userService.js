const db = require("../models/index.js");

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.create({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createNewUser };
