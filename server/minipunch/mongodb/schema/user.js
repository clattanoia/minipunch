import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  name: String,
  age: Number,
  sex: String
})

UserSchema.pre('save', function(next) {
  // pre_save

  next()
})

const User = mongoose.model('user', UserSchema)

export default User
