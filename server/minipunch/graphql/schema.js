import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { user, users } from './user'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      users,
      user
    }
  })
})
