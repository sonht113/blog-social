import { gql } from '@apollo/client';

export const GET_INFO = gql`
  query {
    getInfo {
      id
      username
      fullname
      desc
      avatar
      phoneNumber
      address
      email
      createdAt
      updatedAt
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    getCategories {
      id
      createdAt
      updatedAt
      name
      link
    }
  }
`;

export const UPLOAD_SINGLE_FILE = gql`
  mutation UploadSingleFiles($file: Upload!) {
    uploadSingleFiles(file: $file) {
      url
    }
  }
`;

export const UPLOAD_MULTIPLE_FILE = gql`
  mutation UploadMultipleFiles($files: [Upload!]!) {
    uploadMultiple(files: $files) {
      url
    }
  }
`;
