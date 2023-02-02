import { gql, request } from 'graphql-request';

export const VIEW_INDEX = gql`
{ entries { slug } }
`
export const VIEW_QUERY = gql`
query {
  entries(section: "news", limit: 4) {
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

export const FEED_QUERY = gql`
query {
  entries(section: "news", limit: 4) {
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