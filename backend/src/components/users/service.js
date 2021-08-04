'use strict'
const bccrypt = require('bcrypt')
const { User } = require('../../models/user.js')


const createUserService = async (params) => {
    let user = {
        ...params,
        password: bccrypt.hashSync(params.password, 10),
    }
    return User.create(user);
}

module.exports = { createUserService }