const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const employeeSchema = sequelize.define('employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  empName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dept_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  joining_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = employeeSchema;