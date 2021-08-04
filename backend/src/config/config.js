'use strict'

const config = {
    PORT: process.env.PORT || 3000,
    DB: {
        database: process.env.database || 'bPNsb88hVw',
        dbusername: process.env.dbusername || 'bPNsb88hVw',
        password: process.env.password || '3C4ny7i6Gz',
        host: process.env.host || 'remotemysql.com',
        dialect: process.env.dialect || 'mysql'
    },
    cryptocoinUrl: process.env.CRYPTOCOIN_URL || 'https://api.coingecko.com/api/v3',
    expireToken: process.env.EXPIRE_TOKEN || 60 * 60,
    seed: process.env.SEED || 'secret-dev',
}

module.exports = {
    config
}