import { gql, request } from 'graphql-request';
import graphQLClient from '../client';


export const INDEX_QUERY = gql`
query MyQuery {
  categories(level: 1, show_in_menu: true) {
    title
    slug
    dateCreated
    ... on news_Category {
      id
      cover_image {
        id
        url
      }
    }
  }
}

`

/*
export const getEntries = async () => {
  // Get all blogs
const GET_BY_CATEGORY = gql`
query {
  entries(section: "news", limit: 10) {
    id
    title
    dateCreated
    ... on news_default_Entry {
      id
      cover_image {
        id,
        url
      }
      author {
        id,
        fullName
      }
      area {
        id,
        title
      }
       category {
        id,
        title
      }
    }
  }
}
`

  try {
    const response = await graphQLClient.request(GET_BY_CATEGORY);
    console.log('RESPONSE FROM GRAPHQL', response);
    if (response?.data) {
      return response.data || [];
    }
  }
  catch (err) {
    console.log('ERROR FROM GRAPHQL', err);
  }

};
*/