'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Punctuation', 'requestId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'RequestReplacements', // Asegúrate de que este sea el nombre de tu tabla de solicitudes de reemplazo
        key: 'id', // Asegúrate de que este sea el nombre de la columna de clave primaria en la tabla de solicitudes de reemplazo
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // Puedes ajustar esto según tus necesidades
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Punctuation', 'requestId');
  }
};
