import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  name: String,
  age: Number,
  sex: String
})

UserSchema.pre('save', function(next) {
  // if (this.isNew) {
  //   this.meta.createdAt = this.meta.updatedAt = Date.now()
  // } else {
  //   this.meta.updatedAt = Date.now()
  // }

  next()
})

mongoose.model('user', UserSchema)
