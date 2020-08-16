import Sequelize, { Model } from 'sequelize'
import connection from './index'

interface UserModel {
  id: number
  name: string
  email: string
  password: string
}

class User extends Model implements UserModel {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deleteAt!: Date;
}

User.init(
  {
    id: Sequelize.NUMBER,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deleteAt: Sequelize.DATE
  },
  {
    sequelize: connection,
    freezeTableName: true
  }
)

export default User
