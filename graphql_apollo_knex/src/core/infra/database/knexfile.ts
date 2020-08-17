import path from 'path'
require('ts-node/register')

export = {
  dev: {
    client: 'sqlite',
    connection: {
      filename: path.resolve(__dirname, '..', '..', '..', '..', 'SQLite', 'sqlite.db')
    },
    migrations: {
      tableName: 'knex_migrations',
      filename: path.resolve(__dirname, 'migrations')
    },
    useNullAsDefault: true,
    timezone: 'UTC'
  }
}
