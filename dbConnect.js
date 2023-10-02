const {Sequelize} =require('sequelize')
const dotEnv = require ('dotenv')

dotEnv.config();

const DATABASE_NAME = process.env.DATABASE_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const sequelize = new Sequelize(DATABASE_NAME, DB_USER, DB_PASSWORD, {
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize