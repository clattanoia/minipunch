import gql from 'graphql-tag'

export const UPDATE_USER = gql`
  mutation($id: ID!, $name: String!, $age: Int, $sex: String!) {
    updateUser(id: $id, name: $name, age: $age, sex: $sex) {
      id
      name
      age
      sex
    }
  }
`
