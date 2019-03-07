import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Query {
    hello: String
    users: [User!]!
    user(id: ID!): User!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Mutation {
    createUser(id: ID!, name: String!, email: String!, age: Int): User!
    updateUser(id: ID!, name: String, email: String, age: Int): User!
    deleteUser(id: ID!): User!
  }

  subscription {
    users {
      id
      name
      email
      age
    }
  }
`

export default typeDefs
