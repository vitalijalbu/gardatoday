import { gql } from 'graphql-request';

export const BlogEntryQuery = gql`
query BlogEntryQuery {
    entry(id: "17") {
      id
      title
      description: title
      postDate
      slug
      status
      author {
        id
        fullName
      }
    }
  }
`