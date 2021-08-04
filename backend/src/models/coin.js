const { DataTypes } = require('sequelize')
const { ERR_NAME, ERR_PRICE, ERR_SYMBOL } = require('../commons/const')
const { db } = require('../config/db/config')

const Coin = db.define('Coin', {
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
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: ERR_PRICE
            }
        }
    },
    symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: ERR_SYMBOL
            }
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    }
})

module.exports = { Coin }