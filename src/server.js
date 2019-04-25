const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    updateHelloPhrase(phrase: String!): String!
  }
`

let phrase = '🙈'
const resolvers = {
  Query: {
    hello: () => {
      return phrase
    }
  },
  Mutation: {
    updateHelloPhrase: (parent, args) => {
      phrase = args.phrase
      return phrase
    },
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