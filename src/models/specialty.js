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
      id: DataTypes.INTERGER,
      docterId: DataTypes.INTERGER,
      clinicId: DataTypes.INTERGER,
      specialty: DataTypes.INTERGER,
    },
    {
      sequelize,
      modelName: "Docter_Clinic_Specialty",
    }
  );
  return Docter_Clinic_Specialty;
};
