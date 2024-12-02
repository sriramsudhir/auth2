import { gql } from '@apollo/client';

export const ADMIN_LOGIN = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      token
      user {
        id
        email
        role
        lastLogin
      }
    }
  }
`;

export const GET_ADMIN_PROFILE = gql`
  query GetAdminProfile {
    adminProfile {
      id
      email
      role
      lastLogin
    }
  }
`;

export const GET_DASHBOARD_STATS = gql`
  query GetDashboardStats {
    users: users_aggregate {
      aggregate {
        count
      }
      nodes {
        credits
      }
    }
    images: images_aggregate {
      aggregate {
        count
      }
    }
    processing_stats: images_aggregate {
      nodes {
        status
      }
    }
  }
`;