const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const persistency = require('./persistency')
const { createLoaders } = require('./loaders')

const typeDefs = gql`
  type Merchant {
    id: Int!
    name: String!
  }

  type Product {
    id: Int!
    title: String!
    price: Float!
    merchant: Merchant
  }

  type Query {
    products: [Product!]!
  }
`

const resolvers = {
  Product: {
    merchant: (parent, args, context) => {
      if (!parent.merchantId) {
        return
      }
      return context.loaders.merchants.load(parent.merchantId)
    }
  },
  Query: {
    products: () => {
      return persistency.products.getProducts()
    }
  },
}


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      loaders: createLoaders(),
    }
  }
})
const app = express()

apolloServer.applyMiddleware({ app })
app.get('/', (resquest, response) => {
  response.send('was the pizza good?')
})

app.listen(4002, () => {
  console.log('Server running on http://localhost:4002')
})