const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return '🙈'
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