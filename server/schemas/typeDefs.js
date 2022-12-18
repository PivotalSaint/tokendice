const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    token: String
    blogs: [User]
  }

  input createUser {
    username: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Blog {
    _id: ID
    author: String
    title: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    blogs(username: String): [Blog]
    blogs(_id: ID!): Blog
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
