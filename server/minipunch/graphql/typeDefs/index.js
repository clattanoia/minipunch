import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type User {
    id: ID!
    name: String!
    age: Int
    sex: String!
  }

  type Mutation {
    createUser(id: ID!, name: String!, sex: String!, age: Int): User!
    updateUser(id: ID!, name: String, sex: String, age: Int): User!
    deleteUser(id: ID!): User!
  }

  subscription {
    users {
      id
      name
      sex
      age
    }
  }
`

export default typeDefs
