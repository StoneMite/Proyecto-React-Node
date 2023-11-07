module.exports = (sequelize, DataTypes) => {
    const ApplicantApplication = sequelize.define("ApplicantApplication", {
      applicationDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  
    // Asociaciones con otros modelos
    ApplicantApplication.associate = (models) => {
      // Asociación con Utente
      models.ApplicantApplication.belongsTo(models.Utente, {
        foreignKey: 'utenteId',
      });
  
      // Asociación con RequestReplacement
      models.ApplicantApplication.belongsTo(models.RequestReplacement, {
        foreignKey: 'requestId', // Asegúrate de que el nombre de la columna sea correcto
      });
  
      // Asociación con Applicant
      models.ApplicantApplication.belongsTo(models.Applicant, {
        foreignKey: 'applicantId',
      });
    };
  
    return ApplicantApplication;
  };
  