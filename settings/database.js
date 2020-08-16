const Sequelize = require('sequelize');

const DB_NAME = 'node-mysql';
const DB_PASS = '5335293AVp!';
const DB_USER = 'root';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize;