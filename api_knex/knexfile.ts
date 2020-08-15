require('ts-node/register')

export = {
  development: {
    client: 'sqlite',
    connection: {
      filename: './SQLite/sqlite.db'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/core/database/migrations'
    },
    useNullAsDefault: true,
    timezone: 'UTC'
  }
}
