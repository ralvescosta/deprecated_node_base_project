import { QueryInterface, DataTypes } from 'sequelize'

export async function up (queryInterface: QueryInterface, Sequelize: any) {
  await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  })
};

export async function down (queryInterface: QueryInterface, Sequelize: any) {
  await queryInterface.dropTable('users')
}
