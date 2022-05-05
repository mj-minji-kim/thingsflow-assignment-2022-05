const { Sequelize, DataTypes } = require('sequelize');
const path = require('path')
;
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '/data.sqlite')
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.tarots = require('./torots')(sequelize, Sequelize);

//Relations
// (no relations with only one table)

module.exports = db;