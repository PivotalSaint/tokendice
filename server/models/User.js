const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { default: BlogList } = require('../../src/components/BlogList');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
      savedBlogs: [BlogList],
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  userSchema.virtual('blogCount').get(function () {
    return this.savedBlogs.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;
  