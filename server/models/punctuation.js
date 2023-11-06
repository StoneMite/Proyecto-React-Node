module.exports = (sequelize, DataTypes) => {
  const Punctuation = sequelize.define("Punctuation", {
    totalScore: {
      type: DataTypes.FLOAT,
    },
    // Otros campos necesarios para el cálculo de puntuación
  });

  Punctuation.associate = (models) => {
    // Asociación con Applicant
    Punctuation.belongsTo(models.Applicant, {
      foreignKey: 'applicantId',
    });

    // Asociación con User
    Punctuation.belongsTo(models.Utente, {
      foreignKey: 'utenteId',
    });

    // Asociación con RequestReplacement
    Punctuation.belongsTo(models.RequestReplacement, {
      foreignKey: 'requestId',
    });
  };

  return Punctuation;
};

  