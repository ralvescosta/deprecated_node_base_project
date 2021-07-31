const dotEnv = require('dotenv')
const nodeEnv = process.env.NODE_ENV || 'development'
dotEnv.config({ path: `.env.${nodeEnv}` })

const DB_HOST = process.env.DB_HOST || '127.0.0.1'
const DB_PORT = parseInt(process.env.DB_PORT, 10) || 5432
const DB_USERNAME = process.env.DB_USERNAME || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || '12345'
const DB_DIALECT = process.env.DB_DIALECT || 'postgres'
const DB_DATABASE = process.env.DB_DATABASE || 'default'
const DB_SEQUELIZE_LOG = process.env.DB_SEQUELIZE_LOG === 'true'

module.exports = {
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: DB_DIALECT,
  database: DB_DATABASE,
  logging: () => DB_SEQUELIZE_LOG
}
