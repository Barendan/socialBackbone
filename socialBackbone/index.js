const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')

const typeDefs = gql`
    type  Query{
        sayHi: String!
    }
`

const resolvers = {
    Query: {
        sayHi(){
            sayHi: () => 'Hello world!'
        }
    }
}