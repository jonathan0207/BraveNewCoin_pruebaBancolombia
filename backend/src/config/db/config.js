const { Sequelize } = require('sequelize')
const { config } = require('../config')


const db = new Sequelize(
    config.DB.database,
    config.DB.dbusername,
    config.DB.password,
    {
        host: config.DB.host,
        dialect: config.DB.dialect,
        logging: true
    }
)

const connectionDB = async () => {
    try {
        await db.sync({ force: false });
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}


module.exports = {
    db,
    connectionDB
}