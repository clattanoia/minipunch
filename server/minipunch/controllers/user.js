import User from '../mongodb/schema/user'

export const getUserById = async id => {
  let user
  try {
    user = await User.findById(id)
  } catch (e) {
    user = null
    console.error(e)
  }
  return user
}

export const getUsers = async (first) => {
  let users
  try {
    users = await User.find({}).limit(first)
  } catch (e) {
    users = []
    console.error(e)
  }
  return users
}

export const insertUser = async user => {
  let saveUser
  const newUser = new User(user)
  try {
    saveUser = await newUser.save()
  } catch (e) {
    saveUser = null
    console.error(e)
  }
  return saveUser
}

export const updateUser = async ({ id, name, age, sex, hobby, sponsorId }) => {
  let newUser
  try {
    newUser = await User.findOneAndUpdate({ _id: id }, { name, age, sex, hobby, sponsorId })
  } catch (e) {
    newUser = null
    console.error(e)
  }
  return newUser
}

export const deleteUser = async id => {
  let removeUser
  try {
    removeUser = await User.findOneAndDelete({ _id: id })
  } catch (e) {
    removeUser = null
    console.error(e)
  }
  return removeUser
}
