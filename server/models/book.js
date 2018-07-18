
export default (sequelize, DataTypes) => {
  const book = sequelize.define('books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  book.associate = (models) => {
    book.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    // associations can be defined here
  };
  return book;
};
