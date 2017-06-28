'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDo = sequelize.define('ToDo', {
    item: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDo;
};
