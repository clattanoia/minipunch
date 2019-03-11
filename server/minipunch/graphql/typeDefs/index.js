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
    createUser(name: String!, age: Int, sex: String!): User!
    updateUser(id: ID!, name: String, age: Int, sex: String): User!
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
