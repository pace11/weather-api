import { ApolloServer } from 'apollo-server'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import path from 'path'

const typesArray = loadFilesSync(path.join(__dirname, './schema'), {
  extensions: ['graphql'],
})
const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'), {
  extensions: ['ts', 'js'],
})

const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 4200 }).then(({ url }) => {
  console.log(`graphql running at ${url}`)
})
