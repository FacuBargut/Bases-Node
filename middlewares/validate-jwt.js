const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
  //Read token
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.id = uid;
  } catch (error) {
    return res.status(401).json({
      msg: "Token no valido",
    });
  }

  next();
};

module.exports = {
  validateJWT,
};
