module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    text: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 140],
    }
    complete: DataTypes.BOOLEAN,
  });
  return Todo;
};
