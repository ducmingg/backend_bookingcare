const db = require("../models/index.js");

const create = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("data",data);
      await db.User.create({
        email: data.message.email,
        password: data.message.password,
        firstName: data.message.firstName,
        lastName: data.message.lastName,
        address: data.message.address,
        gender: data.message.gender === "1" ? true : false,
        roleId: data.message.roleId,
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { create };
