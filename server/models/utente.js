module.exports = (sequelize, DataTypes) => {
    const Utente = sequelize.define("Utente", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "utente", // Valor predeterminado como "user"
      },
    });
  
    return Utente;
  };
  