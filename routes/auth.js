/*
    Path: /api/auth
*/

const { Router } = require('express');
const { login } = require('../controllers/auth');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();


router.post('/login',
    [
        check('mail','El mail es obligatorio').isEmail(),
        check('password','La contraseña es obligatoria').not().isEmpty(),
        validateFields
    ]
    ,login);

module.exports = router;