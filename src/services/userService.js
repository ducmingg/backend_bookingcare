const { where } = require("sequelize");
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

const edit = async (id, data) => {
  console.log(id, data.password, data.role, data.phonenumber);
  try {
    const user = await db.User.update(
      {
        password: data.password,
        roleId: data.role,
        phonenumber: data.phonenumber,
        positionId: data.positionId,
        image: data.image,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return "ok";
  } catch (error) {
    return null;
  }
};
const del = async (data) => {
  const id = data;
  try {
    const result = await db.User.destroy({
      where: {
        id: id,
      },
    });
    return result != 0 ? "ok" : null;
  } catch (error) {
    return null;
  }
};
module.exports = { create, findAll, edit, del };
