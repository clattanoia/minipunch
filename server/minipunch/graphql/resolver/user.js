import {
  getUserById,
  getUsers,
  insertUser,
  updateUser,
  deleteUser
} from '../../controllers/user'

const resolver = {
  Query: {
    user: (parent, { id }, context, info) => getUserById(id),
    users: (parent, { first }, context, info) => getUsers(first)
  },
  Mutation: {
    createUser: (parent, { name, age, sex, hobby, sponsorId }, context, info) => {
      const newUser = { name, age, sex, hobby, sponsorId }

      return insertUser(newUser)
    },
    updateUser: (parent, { id, name, age, sex, hobby, sponsorId }, context, info) => {
      let newUser = { id, name, age, sex, hobby, sponsorId }

      return updateUser(newUser)
    },
    deleteUser: (parent, { id }, context, info) => deleteUser(id)
  }
}

module.exports = resolver
