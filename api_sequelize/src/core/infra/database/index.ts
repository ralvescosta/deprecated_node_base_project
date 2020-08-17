import { Sequelize } from 'sequelize'
import config from './config/config'

const sequelizeConnection = new Sequelize(
  {
    storage: config.development.storage,
    dialect: config.development.dialect as 'sqlite',
    logging: () => true,
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  }
)

export default sequelizeConnection
