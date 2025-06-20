const sequelize = require("../connection/Sequelize");
const { DataTypes } = require("sequelize");

const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("To Do", "In Progress", "Done"),
    defaultValue: "To Do",
  },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Todo model synced successfully");
//   })
//   .catch((error) => {
//     console.error("Error syncing Todo model:", error);
//   });

module.exports = Todo;