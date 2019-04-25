const products = [
  {
    id: 123,
    title: 'Product 123',
    price: 123.123,
    merchantId: 44,
  },
  {
    id: 456,
    title: 'Product 456',
    price: 456.456,
    merchantId: null,
  },
  {
    id: 789,
    title: 'Product 789',
    price: 789.789,
    merchantId: 55,
  },
]
const merchants = [
  {
    id: 44,
    name: 'Merchant 44',
  },
  {
    id: 55,
    name: 'Merchant 55',
  },
]

function getProducts() {
  console.log('SELECT * FROM products')
  return products
}

function getMerchantsByIds(ids) {
  console.log('SELECT * FORM merchants WHERE id IN (:ids)', ids)
  return ids.map(id =>  merchants.find(merchant => merchant.id === id))
}

module.exports = {
  products: {
    getProducts,
  },
  merchants: {
    getMerchantsByIds,
  }
}
