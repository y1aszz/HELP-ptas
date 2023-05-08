'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      { nome: 'John',
        idade: 13,
        sobrenome: 'Doe'
      },
      { nome: 'Jennie',
        idade: 20,
        sobrenome: 'Amaral'
      },
      { nome: 'Loira Básica',
        idade: 30,
        sobrenome: 'Swift'
      }  
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
