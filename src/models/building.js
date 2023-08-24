
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Building.init({
    maToaNha: DataTypes.STRING,
    tenToaNha: DataTypes.STRING,
    soTang: DataTypes.INTEGER,
    trangThai: DataTypes.INTEGER,
  
  }, {
    sequelize,
    modelName: 'Building',
  });
  return Building;
};