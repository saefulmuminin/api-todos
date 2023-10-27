"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Todos", "waktu", {
        type: Sequelize.DATE,
        allowNull: true,
      })
      .then(() => {
        return queryInterface.addColumn("Todos", "durasi", {
          type: Sequelize.INTEGER,
          allowNull: true,
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Todos", "waktu").then(() => {
      return queryInterface.removeColumn("Todos", "durasi");
    });
  },
};
