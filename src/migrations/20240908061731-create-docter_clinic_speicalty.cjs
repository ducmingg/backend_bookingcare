"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Docter_Clinic_Speicalty", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      docterId: {
        type: Sequelize.INTEGER,
      },
      clinicId: {
        type: Sequelize.INTEGER,
      },
      specialty: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Docter_Clinic_Speicalty");
  },
};
