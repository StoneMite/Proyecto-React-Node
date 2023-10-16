'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // return queryInterface.addColumn('Applicants', 'languageSkills', {
    //   type: Sequelize.STRING,
    // })
    // // .then(() => {
    // //   return queryInterface.addColumn('Applicants', 'languageSkills', {
    //     // type: Sequelize.STRING,
    // //   });
    // // })
    // .then(() => {
    //   return queryInterface.addColumn('Applicants', 'certifications', {
    //     type: Sequelize.TEXT,
    //   });
    // })
    // .then(() => {
    //   return queryInterface.addColumn('Applicants', 'technicalSkills', {
    //     type: Sequelize.TEXT,
    //   });
    // });
  },

  async down (queryInterface, Sequelize) {
    // Define cómo deshacer los cambios si es necesario
    return queryInterface.removeColumn('Applicants', 'startDate')
    .then(() => {
      return queryInterface.removeColumn('Applicants', 'endDate');
    })
    .then(() => {
      return queryInterface.removeColumn('Applicants', 'skills');
    });
  }
};
