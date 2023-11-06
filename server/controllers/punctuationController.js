// punctuationController.js
//Un solo solcitantes
const { Punctuation, Applicant } = require('../models');

// Función para calcular la puntuación de un solicitante
const calculateScore = async (req, res) => {
  try {
    // Obtener los datos del solicitante
    const applicantId = req.params.applicantId; // Obtén el valor del parámetro desde la solicitud
    console.log(applicantId); // Para verificar que obtienes un número válido

    const applicant = await Applicant.findByPk(applicantId);
    if (!applicant) {
      return res.status(404).json({ error: "Solicitante no encontrado" });
    }

    // Calcular la puntuación (ajusta esta lógica según tus criterios)
    let totalScore = 0;

    // Calcular la puntuación de la educación y asignarla
    const educationScore = calculateEducationScore(applicant.education);
    totalScore += educationScore;

    // Calcular la puntuación de la experiencia laboral y asignarla
    const experienceScore = calculateExperienceScore(applicant.yearsExperience);
    totalScore += experienceScore;

    // Aquí puedes calcular y asignar puntuaciones para otros campos si es necesario

    // Actualizar la puntuación total en el modelo Punctuation
    await Punctuation.update(
      { totalScore: totalScore },
      { where: { applicantId: applicantId } }
    );

    return res.status(200).json({ totalScore });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al calcular la puntuación" });
  }
};

// Función para calcular la puntuación de la educación
const calculateEducationScore = (education) => {
  // Implementa la lógica para puntuar la educación aquí
  // Por ejemplo, si la educación es "Bachillerato", otorgar 10 puntos; si es "Licenciatura", otorgar 20 puntos; de lo contrario, otorgar 0 puntos.
  if (education === "Media") {
    return 10;
  } else if (education === "Universitario") {
    return 20;
  } else if (education === "Posgrado") {
    return 30;
  } else if (education === 0) {
    return 0;
  } else {
    return 0;
  }
};

// Función para calcular la puntuación de la experiencia laboral
const calculateExperienceScore = (yearsExperience) => {
  // Implementa la lógica para puntuar la experiencia laboral aquí
  // Por ejemplo, otorgar 20 puntos si hay más de 5 años de experiencia; de lo contrario, otorgar 0 puntos.
  if (yearsExperience > 5) {
    return 20;
  } else {
    return 5;
  }
};

module.exports = {
  calculateScore,
};

////////////////////////////////////////

// // // Función para calcular la puntuación de todos los solicitantes
// const calculateAllScores = async (req, res) => {
//   try {
//     const applicants = await Applicant.findAll();

//     const scores = await Promise.all(
//       applicants.map(async (applicant) => {
//         const totalScore = calculateTotalScore(applicant);
//         return { applicantId: applicant.id, totalScore };
//       })
//     );

//     // Ordenar la lista de puntuaciones de mayor a menor
//     scores.sort((a, b) => b.totalScore - a.totalScore);

//     return res.status(200).json(scores);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Error al calcular las puntuaciones" });
//   }
// };

// // Función para calcular la puntuación total de un solicitante (similar a la función calculateScore existente)
// const calculateTotalScore = (applicant) => {
//   let totalScore = 0;

//   // Lógica para calcular la puntuación total aquí (similar a la lógica en calculateScore).
//   // Puedes reutilizar la lógica de cálculo individual de cada solicitante.
  
//   // Calcular la puntuación de la educación y asignarla
//   const educationScore = calculateEducationScore(applicant.education);
//   totalScore += educationScore;

//   // Calcular la puntuación de la experiencia laboral y asignarla
//   const experienceScore = calculateExperienceScore(applicant.yearsExperience);
//   totalScore += experienceScore;

//   // Aquí puedes calcular y asignar puntuaciones para otros campos si es necesario

//   // No necesitas actualizar la puntuación total en la tabla Punctuation aquí,
//   // ya que esto es solo un cálculo temporal.

//   return totalScore;
// };

// module.exports = {
//   calculateAllScores, // Agregar la nueva función al export
// };
