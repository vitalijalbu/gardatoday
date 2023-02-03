import { gql, request } from 'graphql-request';



export const GET_AREAS = gql`
query {
  entries(section: "areas", orderBy: "title ASC") {
    id
    title
    slug
    ... on areas_default_Entry {
      cover_image {
        url
      }
    }
  }
}
`
