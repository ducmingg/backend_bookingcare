"use strict";
const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      statusId: DataTypes.STRING,
      docterId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
