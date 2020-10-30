// import Sequelize, { Model } from 'sequelize'
// import connection from '../../../../core/infra/database'
// import { UserDatasource } from '../../../application/datasources/user.datasource'

// class UsersTable extends Model implements UserDatasource {
//   public id: number;
//   public name: string;
//   public email: string;
//   public password: string;
//   public readonly createdAt: Date;
//   public readonly updatedAt: Date;
//   public readonly deletedAt: Date;
// }

// UsersTable.init(
//   {
//     name: Sequelize.STRING,
//     email: Sequelize.STRING,
//     password: Sequelize.STRING,
//     createdAt: Sequelize.DATE,
//     updatedAt: Sequelize.DATE,
//     deletedAt: Sequelize.DATE
//   },
//   {
//     tableName: 'users',
//     sequelize: connection
//   }
// )

// export default UsersTable
