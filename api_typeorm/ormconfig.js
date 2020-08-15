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
    'src/models/**/*.ts'
  ],
  migrations: [
    'src/migration/**/*.ts'
  ],
  subscribers: [
    'src/subscriber/**/*.ts'
  ]
}
