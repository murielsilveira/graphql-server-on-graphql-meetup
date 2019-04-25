const Dataloader = require('dataloader')
const persistency = require('./persistency')

function createLoaders() {
  return {
    merchants: new Dataloader(async (ids) => {
      return persistency.merchants.getMerchantsByIds(ids)
    })
  }
}

module.exports = {
  createLoaders,
}