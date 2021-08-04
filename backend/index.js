'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { config } = require('./src/config/config.js')
const app = express()
const { connectionDB } = require('./src/config/db/config.js')
// Routes
const routerLogin = require('./src/components/auth/index')
const routerUser = require('./src/components/users/index')
const routerCoin = require('./src/components/coins/index')

//Ref database
connectionDB();
require('./src/config/db/relationdb.js')
//middleware
app.use(bodyParser.json())
// Routes
app.use(cors())
app.use(routerLogin)
app.use(routerUser)
app.use(routerCoin)

app.listen(config.PORT, () =>
    console.log('Running Port:', config.PORT)
)