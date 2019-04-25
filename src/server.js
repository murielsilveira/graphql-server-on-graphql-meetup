const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const persistency = require('./persistency')

const typeDefs = gql`
  type Product {
    id: Int!
    title: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
  }
`

const resolvers = {
  Query: {
    products: () => {
      return persistency.products.getProducts()
    }
  },
}


const apolloServer = new ApolloServer({ typeDefs, resolvers })
const app = express()

apolloServer.applyMiddleware({ app })
app.get('/', (resquest, response) => {
  response.send('was the pizza good?')
})

app.listen(4002, () => {
  console.log('Server running on http://localhost:4002')
})