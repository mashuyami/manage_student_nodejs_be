'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maSV: {
        type: Sequelize.STRING
      },
      maGiuong: {
        type: Sequelize.STRING
      },
      hoTen: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      soDienThoai: {
        type: Sequelize.STRING
      },
      soCMND: {
        type: Sequelize.STRING
      },
      ngaySinh: {
        type: Sequelize.DATE
      },
      noiSinh: {
        type: Sequelize.STRING
      },
      diaChiThuongTru: {
        type: Sequelize.STRING
      },
      tenTruong: {
        type: Sequelize.STRING
      },
      namVaoTruong :{
        type: Sequelize.STRING
      },
      gioiTinh: {
        type: Sequelize.STRING
      },
      trangThai: {
        type: Sequelize.INTEGER,defaultValue:1
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
    await queryInterface.dropTable('Students');
  }
};