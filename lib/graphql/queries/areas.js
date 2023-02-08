import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllAreas = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "requests") {
    id
    title
    dateCreated @formatDateTime(format: "d M Y")
    author{
      fullName
      id
    }
    ... on requests_default_Entry {
      message
      location{
          address
          parts {
            city
          }
      }
    }
  }
}
`

  const data = await graphQLClient.request(QUERY);
  return data;

}


export const viewArea = async (slug) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "areas", slug:"brescia") {
    id
    title
    ... on areas_default_Entry {
        cover_image {
          url
        }
      }
  }
  articles: entries(section:"news", limit: 8) {
    id
    title
    slug
    dateCreated
    ... on news_default_Entry {
      excerpt
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

  const data = await graphQLClient.request(QUERY);
  return data;

}