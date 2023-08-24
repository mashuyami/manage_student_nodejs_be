'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Student.belongsTo(models.Bed,{foreignKey:'maGiuong',targetKey:'maGiuong',as:'BedData'})
    }
  }
  Student.init({
    maSV: DataTypes.STRING,
    avatar: DataTypes.STRING,
    soDienThoai: DataTypes.STRING,
    email: DataTypes.STRING,
    hoTen: DataTypes.STRING,
    soCMND: DataTypes.STRING,
    ngaySinh: DataTypes.DATE,
    noiSinh: DataTypes.STRING,
    diaChiThuongTru: DataTypes.STRING,
    tenTruong: DataTypes.STRING,
    namVaoTruong: DataTypes.STRING,
    gioiTinh: DataTypes.STRING,
    trangThai: DataTypes.INTEGER,
    maGiuong: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};