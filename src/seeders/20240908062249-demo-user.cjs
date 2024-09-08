"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Histories", [
      {
        patientId: 1,
        docterId: 2,
        description: "DataTypes.TEXT",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Histories", null, {});
  },
};
