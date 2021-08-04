'use strict'

const service = require('./service')
const bcrypt = require('bcrypt')
const {
    BAD_REQUEST_ERR,
    INTERNAL_SERVER_ERR,
    ERR_INCORRE_PASSWORD,
    ERR_USER_UNKNOWN,
    ERR_GENERAL
} = require('../../commons/const')
const generarJWT = require('../../commons/operations')

const loginController = async (req, res = response) => {

    const { username, password } = req.body

    try {
        const dataValues = await service.loginService(username)
        // Verificar si el email existe
        if (!dataValues) {
            return res.status(BAD_REQUEST_ERR).json({
                error: ERR_USER_UNKNOWN
            });
        }

        // Verificar la contraseña
        if (!bcrypt.compareSync(password, dataValues.password)) {
            return res.status(BAD_REQUEST_ERR).json({
                error: ERR_INCORRE_PASSWORD
            })
        }

        // Generar el JWT
        const token = await generarJWT(dataValues.id);

        res.json({
            usuario: dataValues,
            token
        })

    } catch (error) {
        res.status(INTERNAL_SERVER_ERR).json({
            error: ERR_GENERAL
        })
    }

}

module.exports = {
    loginController
}