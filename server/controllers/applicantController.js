const { Applicant } = require("../models");

// // Controlador para obtener todos los solicitantes
// exports.getAllApplicants = async (req, res) => {
//   try {
//     const applicants = await Applicant.findAll();
//     res.json(applicants);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener solicitantes" });
//   }
// };

// // Controlador para obtener un solicitante por su ID (o curriculum, según tu comentario)
// exports.getApplicantById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Solicitante no encontrado" });
//     }
//     res.json(applicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener solicitante por ID" });
//   }
// };



// // Controlador para registrar un nuevo solicitante
// exports.createApplicant = async (req, res) => {
//   const applicantData = req.body;

//   try {
//     const newApplicant = await Applicant.create(applicantData);
//     res.status(201).json(newApplicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al registrar solicitante" });
//   }
// };


// // Controlador para actualizar un solicitante por su ID
// exports.updateApplicantById = async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Solicitante no encontrado" });
//     }
//     await applicant.update(updatedData);
//     res.json(applicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al actualizar solicitante por ID" });
//   }
// };

// // Controlador para eliminar un solicitante por su ID
// exports.deleteApplicantById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Solicitante no encontrado" });
//     }
//     await applicant.destroy();
//     res.json({ message: "Solicitante eliminado con éxito" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al eliminar solicitante por ID" });
//   }
// };


//==============================================================
// los controladores de abajo son los que se agregaron para poder ligar user y curriculum

// Controlador para crear un solicitante (currículum) protegido por autenticación(especifico)
// exports.createApplicant = async (req, res) => {
//   const userId = req.user.id;
//   const applicantData = req.body;

//   try {
//     // Verificar si el usuario ya tiene un currículum
//     const existingApplicant = await Applicant.findOne({ where: { utenteId: userId } });

//     if (existingApplicant) {
//       return res.status(400).json({ error: 'El usuario ya tiene un currículum.' });
//     }

//     // Si el usuario no tiene un currículum, crea uno
//     const newApplicant = await Applicant.create({ ...applicantData, utenteId: userId });
//     res.status(201).json(newApplicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al registrar curriculum" });
//   }
// }

exports.createApplicant = async (req, res) => {
  const userId = req.user.id;
  const applicantData = req.body;

  try {
    // Verificar si el usuario ya tiene un currículum
    const existingApplicant = await Applicant.findOne({ where: { utenteId: userId } });

    if (existingApplicant) {
      // El usuario ya tiene un currículum, actualízalo en lugar de crear uno nuevo
      await existingApplicant.update(applicantData);
      return res.status(200).json(existingApplicant);
    }

    // Si el usuario no tiene un currículum, crea uno
    const newApplicant = await Applicant.create({ ...applicantData, utenteId: userId });
    res.status(201).json(newApplicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar currículum" });
  }
};


// // Controlador para registrar un nuevo solicitante(original)
// exports.createApplicant = async (req, res) => {
//   const applicantData = req.body;

//   try {
//     const newApplicant = await Applicant.create(applicantData);
//     res.status(201).json(newApplicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al registrar solicitante" });
//   }
// };



// // Controlador para obtener un currículum por su ID(mas especifico)
// exports.getApplicantById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Currículum no encontrado" });
//     }

//     // Verifica que el usuario actual sea el propietario del currículum
//     if (applicant.utenteId !== req.utente.id) {
//       return res.status(403).json({ error: "Acceso no autorizado" });
//     }

//     res.json(applicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener currículum por ID" });
//   }
// }

// // Controlador para obtener un solicitante por su ID (o curriculum, original)
// exports.getApplicantById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Solicitante no encontrado" });
//     }
//     res.json(applicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener solicitante por ID" });
//   }
// };

// Controlador para obtener todos los solicitantes
exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.findAll();
    res.json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener solicitantes" });
  }
};

// // Controlador para actualizar un currículum por su ID
// exports.updateApplicantById = async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Currículum no encontrado" });
//     }

//     // Verifica que el usuario actual sea el propietario del currículum
//     if (applicant.utenteId !== req.utente.id) {
//       return res.status(403).json({ error: "Acceso no autorizado" });
//     }

//     await applicant.update(updatedData);
//     res.json(applicant);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al actualizar currículum por ID" });
//   }
// }


// // Controlador para eliminar un currículum por su ID
// exports.deleteApplicantById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const applicant = await Applicant.findByPk(id);
//     if (!applicant) {
//       return res.status(404).json({ error: "Currículum no encontrado" });
//     }

//     // Verifica que el usuario actual sea el propietario del currículum
//     if (applicant.utenteId !== req.utente.id) {
//       return res.status(403).json({ error: "Acceso no autorizado" });
//     }

//     await applicant.destroy();
//     res.json({ message: "Currículum eliminado con éxito" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al eliminar currículum por ID" });
//   }
// }

//obtene por id
exports.getApplicantById = async (req, res) => {
  const id = req.params.id;

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ error: "Currículum no encontrado" });
    }

    res.json(applicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener currículum por ID" });
  }
}

//Actualizar por id
exports.updateApplicantById = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ error: "Currículum no encontrado" });
    }

    await applicant.update(updatedData);
    res.json(applicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar currículum por ID" });
  }
}


// Controlador para eliminar un currículum por su ID
exports.deleteApplicantById = async (req, res) => {
  const id = req.params.id;

  try {
    // Valida el token de autenticación
    const token = req.headers.authorization;
    const userId = req.utente.id; // Asegúrate de que esta sea la forma correcta de obtener el ID del usuario

    const applicant = await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ error: "Currículum no encontrado" });
    }

    // Verifica que el usuario actual sea el propietario del currículum
    if (applicant.utenteId !== userId) {
      return res.status(403).json({ error: "Acceso no autorizado" });
    }

    await applicant.destroy();
    res.json({ message: "Currículum eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar currículum por ID" });
  }
}


// controllers/userController.js

exports.getUserWithCV = async (req, res) => {
  const userId = req.user.id; // O la forma en que identificas al usuario

  try {
    // Consulta el usuario
    const user = await Utente.findOne({ where: { id: userId } });

    // Consulta el currículum (Applicant) asociado al usuario
    const curriculum = await Applicant.findOne({ where: { utenteId: userId } });

    // Define un objeto que incluye el estado del usuario y los detalles del currículum.
    const response = {
      username: user.username,
      id: user.id,
      status: user.status,
      hasCV: !!curriculum, // Indicador de si tiene un currículum
      // curriculum: curriculum, // O puedes incluir más detalles aquí
    };

    if (curriculum) {
      // El usuario tiene un currículum
      console.log("Tienes un currículum asociado a tu cuenta:", curriculum);
    } else {
      // El usuario no tiene un currículum
      console.log("No tienes un currículum asociado a tu cuenta");
    }
    

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener información de usuario y currículum" });
  }
}
