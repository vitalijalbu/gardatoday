import { gql } from 'graphql-request';

export const FEED_QUERY = gql`
query {
  entries(section: "news", orderBy: "postDate DESC") {
    id
    title
  }
}
`