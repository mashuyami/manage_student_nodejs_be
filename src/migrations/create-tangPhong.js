'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TangPhong', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maPhong: {
        type: Sequelize.STRING
      },
      maToaNha: {
        type: Sequelize.STRING
      },
      tenPhong: {
        type: Sequelize.STRING
      },
      viTriTang: {
        type: Sequelize.INTEGER
      },
      soNguoiToiDa: {
        type: Sequelize.INTEGER
      },
      gioiTinhSV: {
        type: Sequelize.STRING
      },hinhThucThanhToan: {
        type: Sequelize.STRING
      },
      donGia: {
        type: Sequelize.FLOAT
      },
      trangThai: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TangPhong');
  }
};