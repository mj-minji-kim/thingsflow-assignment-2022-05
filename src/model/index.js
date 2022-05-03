const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'tarot.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.tarots = require('./torots')(sequelize, Sequelize);

//Relations
// (no relations with only one table)

module.exports = db;