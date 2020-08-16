module.exports = {
  name: 'default',
  type: 'sqlite',
  host: 'localhost',
  username: 'test',
  password: 'test',
  database: './SQLite/sqlite.db',
  synchronize: true,
  logging: true,
  entities: [
    'src/core/infra/entities/*.entity.ts'
  ],
  migrations: [
    'src/core/infra/migration/**/*.ts'
  ],
  subscribers: [
    'src/core/infra/subscriber/**/*.ts'
  ]
}
