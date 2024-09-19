const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;


const createToken = (data) => {
  const token = jwt.sign(data, jwtSecretKey);
  return token;
};

module.exports = { createToken };
