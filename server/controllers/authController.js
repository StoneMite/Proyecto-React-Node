// authController.js
const { Utente } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await Utente.create({
      username: username,
      password: hashedPassword,
      role: role || "user",
    });
    res.json("SUCCESS");
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Utente.findOne({ where: { username: username } });
    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ error: "Wrong Username And Password Combination" });
    }

    const accessToken = sign(
      { username: user.username, id: user.id, role: user.role },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
