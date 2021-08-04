const { User } = require('../../models/user.js')
const { Coin } = require('../../models/coin.js')

// Relations
User.hasOne(Coin, {as: 'userId', foreignKey: 'UserId'})
