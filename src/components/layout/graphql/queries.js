import { gql } from "@apollo/client";

const GET_PRODUCTS_INFO = gql`
  query {
    posts {
      model {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_MODELS_INFO = gql`
  query {
    models {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_MODEL_INFO = gql`
  query getModelInfo($slug: String!) {
    model(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      model {
        avatar {
          url
        }
        name
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
    GET_PRODUCTS_INFO,
    GET_MODELS_INFO,
    GET_MODEL_INFO,
    GET_POST_INFO,
    GET_POST_COMMENTS,
};
