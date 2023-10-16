'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addConstraint('applicants', {
    //   fields: ['requestId'],
    //   type: 'foreign key',
    //   name: 'custom_fkey_requestId',
    //   references: {
    //     table: 'RequestReplacements',
    //     field: 'id',
    //   },
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE',
    // });

    await queryInterface.addConstraint('applicants', {
      fields: ['utenteId'],
      type: 'foreign key',
      name: 'custom_fkey_utenteId',
      references: {
        table: 'utentes',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    // Asegúrate de que 'Users' sea el nombre correcto de la tabla de usuarios en tu base de datos.
    // Realiza cambios si es diferente.
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('applicants', 'custom_fkey_requestId');
    await queryInterface.removeConstraint('applicants', 'custom_fkey_utenteId');
  }
};

