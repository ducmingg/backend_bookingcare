"use strict";
const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Docter_Clinic_Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Docter_Clinic_Specialty.init(
    {
      docterId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      specialty: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Docter_Clinic_Specialty",
    }
  );
  return Docter_Clinic_Specialty;
};
