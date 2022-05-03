

module.exports = function(sequelize, Sequalize) {
  var tarotSchema =  sequelize.define(
    'Tarot',
    {
      id: {
        type: Sequalize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequalize.DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: Sequalize.DataTypes.TEXT,
        allowNull: false
      },
      image: {
        type: Sequalize.DataTypes.BLOB('long'),
        allowNull: false
      }
    }
  );
  return tarotSchema;
}