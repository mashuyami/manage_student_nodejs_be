'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toaNha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  toaNha.init({
   maToaNha: DataTypes.STRING,
    tenToaNha: DataTypes.STRING,
    soTang: DataTypes.STRING,
    trangThai: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'toaNha',
  });
  return toaNha;
};