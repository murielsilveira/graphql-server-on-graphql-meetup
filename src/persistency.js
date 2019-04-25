const products = [
  {
    id: 123,
    title: 'Product 123',
    price: 123.123
  },
  {
    id: 456,
    title: 'Product 456',
    price: 456.456
  },
]

function getProducts() {
  // console.log('SELECT * FROM products')
  return products
}

module.exports = {
  products: {
    getProducts,
  },
}
