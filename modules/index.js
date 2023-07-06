const { gql } = require('apollo-server-express')
const { GraphQLScalarType } = require('graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const schemas = require('./schema')

const typeDefs = gql`
  scalar Time

  type Query {
    getVersion: String!
  }

  type Mutation {
    version: String!
  }
`

const timeScalar = new GraphQLScalarType({
  name: 'Time',
  description: 'Time custom scalar type',
  serialize: (value) => value,
})

const resolvers = {
  Time: timeScalar,
  Query: {
    getVersion: () => `v1`,
  },
}

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, schemas.typeDefs],
  resolvers: [resolvers, schemas.resolvers],
})

module.exports = schema
