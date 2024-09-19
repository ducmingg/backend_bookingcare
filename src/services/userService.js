const { where } = require("sequelize");
const db = require("../models/index.js");
const bcrypt = require("bcrypt");

const create = async (data) => {
  try {
    const password = data.message.password;
    const passHash = await bcrypt.hash(password + "", 10);
    await db.User.create({
      email: data.message.email,
      password: passHash,
      firstName: data.message.firstName,
      lastName: data.message.lastName,
      address: data.message.address,
      gender: data.message.gender === "1" ? true : false,
      roleId: data.message.roleId,
    });
    return "ok";
  } catch (error) {
    console.log("error", error);

    return error;
  }
};

const login = async (data) => {
  const password = data.password + "";
  try {
    const users = await db.User.findAll({
      where: {
        email: data.username,
      },
    });
    if (users.length === 0) return "User is not found!";
    for (let user of users) {
      let passCompare = await bcrypt.compare(password, user.password);
      if (passCompare) {
        const userReturn = {
          id: user.id,
          roleId: user.roleId,
        };
        return userReturn;
      } else return "Password is wrong!";
    }
  } catch (error) {
    console.log(error);
    return error;
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
module.exports = { create, findAll, edit, del, login };
