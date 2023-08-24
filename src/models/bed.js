'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bed.belongsTo(models.Room,{foreignKey:'maPhong',targetKey:'maPhong',as:'RoomData'})
    }
  }
  Bed.init({
    maGiuong: DataTypes.STRING,
   maPhong: DataTypes.STRING,
    viTriGiuong: DataTypes.INTEGER,
    trangThai: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bed',
  });
  return Bed;
};