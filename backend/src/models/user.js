const { DataTypes } = require('sequelize')
const { ERR_LAST_NAME, ERR_NAME, ERR_USER_NAME, ERR_PASSWORD, ERR_MAX_PASSWORD } = require('../commons/const.js')
const { db } = require('../config/db/config.js')

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: ERR_NAME
            }
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: ERR_LAST_NAME
            }
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: ERR_USER_NAME
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        max: 8,
        validate: {
            notNull: {
                msg: ERR_PASSWORD
            }
        }
    },
    preferredCurrency: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    }
})

module.exports = { User }