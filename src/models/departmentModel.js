const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const departmentSchema = sequelize.define('department', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
  deptName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  employee_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps: true});

module.exports = departmentSchema;