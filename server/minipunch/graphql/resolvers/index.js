let users = [
  { id: '1', name: 'John Doe', email: 'john@gmail.com', age: 22 },
  { id: '2', name: 'Jane Doe', email: 'jane@gmail.com', age: 23 }
]

const resolvers = {
  Query: {
    hello: () => 'Welcome to minipunch',
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id === id)
    },
    users: (parent, args, context, info) => {
      return users
    }
  }
}

export default resolvers
