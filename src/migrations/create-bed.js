'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     maGiuong: {
        type: Sequelize.STRING
      },
      maPhong: {
        type: Sequelize.STRING
      },viTriGiuong: {
        type: Sequelize.INTEGER
      },
      trangThai: {
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
    await queryInterface.dropTable('Beds');
  }
};