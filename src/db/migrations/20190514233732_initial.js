exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary()
      table.string('email')
      table.string('firstName')
      table.string('lastName')
    })
}

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('users')
}
