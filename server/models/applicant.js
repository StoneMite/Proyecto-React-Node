module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define("Applicant", {
      // Campos para la información de experiencia laboral.
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      // Otros campos para la descripción de tareas, logros, etc.
      description: {
        type: DataTypes.TEXT,
      },
      // Campos para habilidades y educación.
      skills: {
        type: DataTypes.TEXT,
      },
      education: {
        type: DataTypes.TEXT,
      },

      // Asociación con el modelo de usuario.
    });
  
    // Asociación con el modelo de usuario (cada currículum pertenece a un usuario).
    Applicant.associate = (models) => {
      models.Applicant.belongsTo(models.User);
    };
  
    return Applicant;
  };