import User from '../mongodb/schema/user'

// export const saveUser = async (ctx, next) => {
//   const opts = ctx.request.body

//   const user = new User(opts)
//   const saveUser = await user.save()

//   if (saveUser) {
//     ctx.body = {
//       success: true,
//       data: saveUser
//     }
//   } else {
//     ctx.body = {
//       success: false
//     }
//   }
// }

export const getUserById = async id => {
  let user
  try {
    user = await User.findById(id)
  } catch (e) {
    user = null
  }
  return user
}

export const getUsers = async () => {
  let users
  try {
    users = await User.find({})
  } catch (e) {
    users = []
  }
  return users
}
