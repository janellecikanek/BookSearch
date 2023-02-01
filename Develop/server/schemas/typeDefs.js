const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [String]!

  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: Boolean
    link: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    Users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(userId: ID!, book: String!): User
    removeUser: User
    removeBook(book: String!): User
  }
`;

module.exports = typeDefs;

