'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.changeColumn('RequestReplacements', 'duracionTrabajo', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    // En caso de necesitar una migración inversa
    return queryInterface.changeColumn('RequestReplacements', 'duracionTrabajo', {
      type: Sequelize.BOOLEAN,
    });
  }
};
