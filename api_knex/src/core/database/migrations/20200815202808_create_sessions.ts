import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('sessions', (table) => {
    table.increments('id').primary().unsigned()
    table.string('user_id', 255).notNullable()
    table.string('user_agent', 255).notNullable()
    table.string('remote_address', 255).notNullable()
    table.string('remote_port', 255).notNullable()
    table.string('local_address', 255).notNullable()
    table.string('local_port', 255).notNullable()
    table.string('access_token', 255).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.timestamp('deleted_at')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('sessions')
}
