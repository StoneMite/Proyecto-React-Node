'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('RequestReplacements', 'yearsExperience', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // Puedes establecer un valor predeterminado si es necesario
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('RequestReplacements', 'yearsExperience');
  },
};
