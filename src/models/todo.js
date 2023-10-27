"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      waktu: DataTypes.DATE, // Kolom waktu
      durasi: DataTypes.INTEGER,
      // Kolom durasi (dalam menit)
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
