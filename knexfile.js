module.exports = {
  development: {
    client: 'mysql2',
    version: '5.7',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'objection_test',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations'
    },
  },
}
