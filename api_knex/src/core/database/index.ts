import knexfile from '../../../knexfile'
import knex from 'knex'

const Knex = knex(knexfile.development)

export default Knex
