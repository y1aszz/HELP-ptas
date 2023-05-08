'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'John Doe'},
      { nome: 'Estevão Pereira'},
      { nome: 'Jennie'},
      { nome: 'Loira Básica'},
      { nome: 'Funko Pop'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
