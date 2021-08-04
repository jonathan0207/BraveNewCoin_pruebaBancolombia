const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const generarJWT = (userDB) => 
     jwt.sign({
        userDB,
    }, config.seed, { expiresIn: config.expireToken })


module.exports = generarJWT
