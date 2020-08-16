import { Sequelize } from 'sequelize'
import config from '../config/config'

const sequelizeConnection = new Sequelize(
  {
    storage: config.development.storage,
    dialect: config.development.dialect as 'sqlite',
    logging: true
  }
)

const models = {

}

Object.assign(models, { sequelize: sequelizeConnection, Sequelize: Sequelize })

export default models
