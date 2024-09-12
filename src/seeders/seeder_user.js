module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "@1213",
        password: "DataTypes.STRING",
        firstName: "DataTypes.STRING",
        lastName: "DataTypes.STRING",
        address: "DataTypes.STRING",
        gender: true,
        roleId: 12,
        phonenumber: "DataTypes.STRING",
        positionId: 13,
        image: "DataTypes.STRING",
        createdAt: null,
        updatedAt: null,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
