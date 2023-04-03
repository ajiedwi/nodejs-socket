const express = require('./express')
const database = require('./database')
require('./socket')

module.exports = {
    app: express.app,
    http: express.http,
    dbConnection: database.dbConnection,
}