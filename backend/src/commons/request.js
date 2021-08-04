'use strict'

const axios = require('axios').default


const get = (url) => axios.get(url)

module.exports = {
    get
}
