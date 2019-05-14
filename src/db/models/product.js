const { Model } = require('objection')

// http://perkframework.com/v1/guides/database-migrations-knex.html
// https://github.com/Vincit/objection.js/blob/master/examples/express-es6/migrations/20150613161239_initial_schema.js

export default class Product extends Model {
  static get tableName() {
    return 'products'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'price'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'float' },
        lastName: { type: 'string', minLength: 1, maxLength: 255 },
      }
    }
  }
}
