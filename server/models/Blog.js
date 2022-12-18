import BlogList from '../../src/components/BlogList';

const { model, Schema } = require('mongoose');

const blogSchema = new Schema({
    username: {
        type: String,
        required: true
      },
      savedBlogs: [BlogList]
    },
    {
      toJSON: {
        getters: true
      }
    }
);


const Blog = model('BlogList', blogSchema);

module.exports = Blog;