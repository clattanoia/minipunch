import mongoose from 'mongoose'

const User = mongoose.model('user')

export const saveUser = async (ctx, next) => {
  const opts = ctx.request.body

  const user = new User(opts)
  const saveUser = await user.save()
  console.log(saveUser)

  if (saveUser) {
    ctx.body = {
      success: true,
      data: saveUser
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

export const fetchUser = async (ctx, next) => {
  const users = await User.find({})

  if (users.length) {
    ctx.body = {
      success: true,
      data: users
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}
