'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Giuong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Giuong.init({
    maGiuong: DataTypes.STRING,
   maPhong: DataTypes.STRING,
    viTriGiuong: DataTypes.INTEGER,
    trangThai: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Giuong',
  });
  return Giuong;
};