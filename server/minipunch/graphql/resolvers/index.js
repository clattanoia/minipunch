import { getUserById, getUsers } from '../../controllers/user'

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => getUserById(id),
    users: (parent, args, context, info) => getUsers()
  }
}

export default resolvers
