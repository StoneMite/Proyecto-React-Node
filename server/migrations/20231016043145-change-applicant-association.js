'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Applicants', 'NewApplicants'); // Renombra temporalmente la tabla
    await queryInterface.addColumn('NewApplicants', 'UtenteId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Utente', // Asegúrate de que este sea el nombre correcto de la tabla de Utentes
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Define cómo deshacer los cambios si es necesario
    await queryInterface.removeColumn('NewApplicants', 'UtenteId');
    await queryInterface.renameTable('NewApplicants', 'Applicants'); // Restaura el nombre original de la tabla
  }
};


