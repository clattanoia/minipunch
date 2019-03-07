import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNumber,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} from 'graphql'

import mongoose from 'mongoose'
const user = mongoose.model('User')

export let UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLNumber
    },
    sex: {
      type: GraphQLString
    }
  }
})

export const users = {
  type: new GraphQLList(UserType),
  args: {},
  resolve(root, params, options) {
    return User.find({}).exec()
  }
}

export const user = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    return User.findOne({
      _id: params.id
    }).exec()
  }
}
