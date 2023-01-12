import { gql } from 'graphql-request';

export const BlogEntryQuery = gql`
query MyQuery {
  entries(orderBy: "postDate", section: "listings") {
    id
    title
    postDate
    slug
    status
    ... on listings_hotel_Entry {
      badge
      typeHandle
      address {
        lat
        lng
        zoom
        distance
        address
        parts {
          number
          address
          city
          postcode
          county
          state
          country
        }
      }
    }
  }
}

`