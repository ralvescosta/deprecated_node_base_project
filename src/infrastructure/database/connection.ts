
import { Sequelize } from 'sequelize'
import sequelizeConfig from './sequelize'

export const dbConnection = new Sequelize(
  {
    ...sequelizeConfig as any,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true,
      paranoid: true
    }
  }
)
