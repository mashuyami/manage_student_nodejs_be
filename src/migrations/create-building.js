
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maToaNha: {
        type: Sequelize.STRING
      },tenToaNha: {
        type: Sequelize.STRING
      },sotang: {
        type: Sequelize.INTEGER
      },trangThai: {
        type: Sequelize.INTEGER,defaultValue :0
      },
      createdAt: {
        allowNull: false,
        type:'TIMESTAMP',defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type:'TIMESTAMP',defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Buildings');
  }
};