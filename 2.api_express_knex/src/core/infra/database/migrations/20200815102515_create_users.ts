import knex from 'knex'

export async function up (knex: knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary().unsigned()
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('password', 255).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.timestamp('deleted_at')
  })
}

export async function down (knex: knex) {
  return knex.schema
    .dropTable('users')
}
