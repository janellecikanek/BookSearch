import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($userId: ID!) {
    user(userId: $userId) {
        _id
      username
      email
      bookCount
      savedBook
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
        _id
      username
      email
      bookCount
      savedBook
    }
  }
`;
