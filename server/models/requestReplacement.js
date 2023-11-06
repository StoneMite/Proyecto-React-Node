module.exports = (sequelize, DataTypes) => {
    const RequestReplacement = sequelize.define("RequestReplacement", {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      funcionesCargo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      requerimientosCargo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sueldo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seniority: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duracionTrabajo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      seccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yearsExperience: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return RequestReplacement;
  };
  