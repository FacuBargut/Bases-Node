/*
    Path: /api/user
*/

const { Router } = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {validateJWT} = require('../middlewares/validate-jwt')

const router = Router();

router.get("/",validateJWT, getUsers);
router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("surname", "El apellido es obligatorio").not().isEmpty(),
    check("mail", "El mail es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateFields,
  ],
  createUser
);
router.put(
  "/:id",
  [ validateJWT,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("surname", "El apellido es obligatorio").not().isEmpty(),
    check("mail", "El mail es obligatorio").isEmail(),
    validateFields,
  ],
  updateUser
);
router.delete("/:id", validateJWT, deleteUser);

module.exports = router;
