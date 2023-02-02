import { gql } from 'graphql-request';


export const FEED_QUERY = gql`query {
  users(group: "hosts") {
    id
    fullName
  }
}
`