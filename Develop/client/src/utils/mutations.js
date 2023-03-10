import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
        user {
        _id
        username
      }
    }
  }
`;

export const ADD_Book = gql`
  mutation addBook($userId: ID!, $book: String!) {
    addBook(userId: $userId, book: $book) {
      _id
      username
      books
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const REMOVE_Book = gql`
  mutation removeBook($book: String!) {
    removeBook(book: $book) {
      _id
      name
      books
    }
  }
`;

