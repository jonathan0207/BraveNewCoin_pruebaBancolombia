'use strict'

const { User } = require("../../models/user");


const loginService = async (username) => {
    return User.findOne({ where: { username: username } });
}



module.exports = {
    loginService
}