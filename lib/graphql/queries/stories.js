import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getEntries = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "news", limit: 10) {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on news_default_Entry {
      excerpt
      area{
        slug
        title
      }
      category{
        slug
        title
      }
      cover_image {
        url
      }
    }
  }
}
`
  const data = await graphQLClient.request(QUERY);
  return data;

}

