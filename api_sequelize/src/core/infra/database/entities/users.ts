/* eslint-disable camelcase */
import Sequelize, { Model } from 'sequelize'
import connection from './index'
import { UserModel } from '../../../../signup/models/user.model'

class User extends Model implements UserModel {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  {
    underscored: true,
    tableName: 'users',
    sequelize: connection,
    freezeTableName: true
  }
)

export default User
