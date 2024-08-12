const { response } = require("express");

const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helper/jwt");
const login = async (req, res = response) => {
  const { mail, password } = req.body;

  try {
    const user = await User.findOne({ where: { mail: mail } });

    if (!user) {
      return res.status(404).json({
        msg: "Credenciales incorrectas",
      });
    }

    // Verify password
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Contraseña incorrecta",
      });
    }

    //TODO generate JWT
    const token = await generateJWT(user.id);

    return res.status(200).json({
      msg: "Logeado con exito",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error inesperado",
    });
  }
};

module.exports = {
  login,
};
