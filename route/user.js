const express  = require('express');
const {handleUserSignup,handleUserSignin} = require('../controller/user');
const router = express.Router();
router.post('/',handleUserSignup)
router.post('/signin',handleUserSignin)
module.exports = router;