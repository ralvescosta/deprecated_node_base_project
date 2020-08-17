import knex from 'knex'
import config from './knexfile';

const databaseConnection = knex(config.dev)

export default databaseConnection