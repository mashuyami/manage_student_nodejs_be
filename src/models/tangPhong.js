'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tangPhong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
 tangPhong.init({
    maPhong: DataTypes.STRING,
    maToaNha: DataTypes.STRING,
    tenPhong: DataTypes.STRING,
    viTriTang: DataTypes.INTEGER,
    soNguoiToiDa: DataTypes.INTEGER,
    gioiTinhSV: DataTypes.STRING,
   hinhThucThanhToan: DataTypes.STRING,
   donGia: DataTypes.FLOAT,
    trangThai: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tangPhong',
  });
  return tangPhong;
};