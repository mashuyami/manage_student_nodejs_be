'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sinhVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sinhVien.init({
    maSV: DataTypes.STRING,
    avatar: DataTypes.STRING,
    soDienThoai: DataTypes.STRING,
    email: DataTypes.STRING,
    hoTen: DataTypes.STRING,
    soCMND: Data.STRING,
    ngaySinh: DataTypes.DATE,
    noiSinh: DataTypes.STRING,
    diaChiThuongTru: Data.STRING,
    tenTruong: DataTypes.STRING,
    namVaoTruong: DataTypes.STRING,
    gioiTinh: Data.STRING,
    trangThai: DataTypes.INTEGER,
    maGiuong: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'sinhVien',
  });
  return sinhVien;
};