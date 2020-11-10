const { NODE_ENV } = require("../config");

module.exports = {
    DB_URL: process.env.DB_URL,
    NODE_ENV:process.env.NODE_ENV || 'development',
    PORT: Process.env.PORT || 8000
}