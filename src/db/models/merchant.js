const { Model } = require('objection')

export default class Merchant extends Model {
  static get tableName() {
    return 'merchants'
  }
}
