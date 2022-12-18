const { AuthenticationError } = require('apollo-server');
const { User, Blog } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('savedBlogs');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBlogs');
    },
    blogs: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Blog.find(params).sort({ createdAt: -1 });
    },
    blog: async (parent, { blogId }) => {
      return Blog.findOne({ _id: blogId });
    },
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);
    return { token, user };
  },
  addUser: async (parent, args) => {
    const user = await User.create(args);
  
    return user;
  }

  };
  
  module.exports = resolvers;