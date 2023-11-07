
  

// const { Punctuation, Applicant } = require('../models');

// // Función para calcular la puntuación de la educación
// const calculateEducationScore = (education) => {
//   // Implementa la lógica para puntuar la educación aquí
//   // Por ejemplo, si la educación es "Bachillerato", otorgar 10 puntos; si es "Licenciatura", otorgar 20 puntos; de lo contrario, otorgar 0 puntos.
//   if (education === "Media") {
//     return 10;
//   } else if (education === "Universitario") {
//     return 20;
//   } else if (education === "Posgrado") {
//     return 30;
//   } else {
//     return 0;
//   }
// };

// // Función para calcular la puntuación de la experiencia laboral
// const calculateExperienceScore = (yearsExperience) => {
//   // Implementa la lógica para puntuar la experiencia laboral aquí
//   // Por ejemplo, otorgar 20 puntos si hay más de 5 años de experiencia; de lo contrario, otorgar 5 puntos.
//   if (yearsExperience > 5) {
//     return 20;
//   } else {
//     return 5;
//   }
// };

// // Función para calcular la puntuación total de un solicitante
// const calculateTotalScore = (applicant) => {
//   // Implementa la lógica para calcular la puntuación total del solicitante aquí
//   let totalScore = 0;

//   // Calcular la puntuación de la educación y asignarla
//   totalScore += calculateEducationScore(applicant.education);

//   // Calcular la puntuación de la experiencia laboral y asignarla
//   totalScore += calculateExperienceScore(applicant.yearsExperience);

//   // Aquí puedes calcular y asignar puntuaciones para otros campos si es necesario

//   return totalScore;
// };

// const calculateAllScores = async (req, res) => {
//   console.log('Recibida solicitud de cálculo de puntuaciones');
//   try {
//     const applicants = await Applicant.findAll();

//     await Promise.all(
//       applicants.map(async (applicant) => {
//         const totalScore = calculateTotalScore(applicant);
//         // Actualizar o crear un registro en la tabla Punctuation
//         const punctuation = await Punctuation.findOne({ where: { applicantId: applicant.id } });
//         if (punctuation) {
//           // Si el registro ya existe, actualiza el totalScore
//           await punctuation.update({ totalScore });
//         } else {
//           // Si no existe, crea un nuevo registro
//           await Punctuation.create({ applicantId: applicant.id, totalScore });
//         }
//       })
//     );

//     // Ordenar la lista de puntuaciones de mayor a menor
//     const scores = await Punctuation.findAll({
//       order: [['totalScore', 'DESC']],
//     });

//     return res.status(200).json(scores);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Error al calcular las puntuaciones" });
//   }
// };

// module.exports = {
//   calculateAllScores,
// };

/////////////////////////////////////////////////
// const { Punctuation, Applicant, RequestReplacement } = require('../models');

// // Función para calcular la puntuación total de un solicitante
// const calculateTotalScore = (applicant, solicitudReemplazo) => {
//   let totalScore = 0;

//   // Comparar el título del solicitante con el título requerido en la solicitud
//   if (applicant.jobTitle === solicitudReemplazo.titulo) {
//     totalScore += 10; // Asignar 10 puntos si el título coincide.
//   }else{
//     totalScore = 0;
//   }

//   // Comparar el jobTitle del solicitante con el requerido en la solicitud
//   if (applicant.jobTitle === solicitudReemplazo.titulo) {
//     totalScore += 10; // Asignar 10 puntos si el jobTitle coincide.
//   }

//   // Comparar "yearsExperience" del solicitante con el de la solicitud de reemplazo
//   if (applicant.yearsExperience < solicitudReemplazo.yearsExperience) {
//     totalScore += 5; // Otorgar 5 puntos si los años de experiencia son menores.
//   } else {
//     totalScore += 10; // Otorgar 10 puntos si los años de experiencia son mayores o iguales.
//   }

//   return totalScore;
// };

// const calculateAllScores = async (req, res) => {
//   console.log('Recibida solicitud de cálculo de puntuaciones');
//   try {
//     const applicants = await Applicant.findAll();
//     const solicitudReemplazo = await RequestReplacement.findOne(); // Obtener la solicitud de reemplazo activa

//     await Promise.all(
//       applicants.map(async (applicant) => {
//         const totalScore = calculateTotalScore(applicant, solicitudReemplazo);
//         // Actualizar o crear un registro en la tabla Punctuation
//         const punctuation = await Punctuation.findOne({ where: { applicantId: applicant.id } });
//         if (punctuation) {
//           // Si el registro ya existe, actualiza el totalScore
//           await punctuation.update({ totalScore });
//         } else {
//           // Si no existe, crea un nuevo registro
//           await Punctuation.create({ applicantId: applicant.id, totalScore });
//         }
//       })
//     );

//     // Ordenar la lista de puntuaciones de mayor a menor
//     const scores = await Punctuation.findAll({
//       order: [['totalScore', 'DESC']],
//     });

//     return res.status(200).json(scores);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Error al calcular las puntuaciones" });
//   }
// };

// module.exports = {
//   calculateAllScores,
// };

// punctuationController.js

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
  } else {
    return 0;
  }
};

// Función para calcular la puntuación de la experiencia laboral
const calculateExperienceScore = (yearsExperience) => {
  // Implementa la lógica para puntuar la experiencia laboral aquí
  // Por ejemplo, otorgar 20 puntos si hay más de 5 años de experiencia; de lo contrario, otorgar 5 puntos.
  if (yearsExperience > 5) {
    return 20;
  } else {
    return 5;
  }
};

// Función para calcular las puntuaciones de todos los currículums
const calculateAllScores = async (req, res) => {
  try {
    const applicants = await Applicant.findAll(); // Obtén todos los currículums

    const curriculumList = applicants.map((applicant) => {
      // Realiza el cálculo de puntuación para cada solicitante
      const educationScore = calculateEducationScore(applicant.education);
      const experienceScore = calculateExperienceScore(applicant.yearsExperience);
      
      // Suma las puntuaciones
      const totalScore = educationScore + experienceScore;
      
      return {
        applicant: applicant,
        totalScore: totalScore
      };
    });

    return res.status(200).json(curriculumList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al calcular las puntuaciones" });
  }
};

module.exports = {
  calculateScore,
  calculateAllScores, // Agrega esta función al objeto exportado
};
