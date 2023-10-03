// const { verify } = require("jsonwebtoken");

// const validateToken = (req, res, next) => {
//   const accessToken = req.header("accessToken");

//   if (!accessToken) return res.json({ error: "User not logged in!" });

//   try {
//     const validToken = verify(accessToken, "importantsecret");
//     req.user = validToken;

//     // Verificar el rol del usuario (por ejemplo, si se requiere un rol "admin" para acceder)
//     if (req.user.role !== "admin") {
//       return res.json({ error: "Access denied. You are not an admin." });
//     }
//     // Si el usuario tiene el rol adecuado, continúa
//     return next();
//   } catch (err) {
//     return res.json({ error: err });
//   }
// };

// module.exports = { validateToken };

const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    return next();
  } catch (err) {
    return res.json({ error: "Invalid token" });
  }
};

module.exports = { validateToken };
