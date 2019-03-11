import {
  getUserById,
  getUsers,
  insertUser,
  updateUser,
  deleteUser
} from '../../controllers/user'

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => getUserById(id),
    users: (parent, args, context, info) => getUsers()
  },
  Mutation: {
    createUser: (parent, { name, age, sex }, context, info) => {
      const newUser = { name, age, sex }

      return insertUser(newUser)
    },
    updateUser: (parent, { id, name, age, sex }, context, info) => {
      let newUser = { id, name, age, sex }

      return updateUser(newUser)
    },
    deleteUser: (parent, { id }, context, info) => deleteUser(id)
  }
}

export default resolvers
