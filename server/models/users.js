// este archivo ya no se utiliza
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que el nombre de usuario sea único
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que el correo electrónico sea único
        validate: {
          isEmail: true, // Valida que el valor sea un correo electrónico válido
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };
  