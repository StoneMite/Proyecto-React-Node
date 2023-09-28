module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Users.associate = (models) => {
    //   Users.hasMany(models.Posts, {
    //     onDelete: "cascade",
    //   });
    // };
    return Usuarios;
  };