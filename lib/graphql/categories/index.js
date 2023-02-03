import { gql } from 'graphql-request';


export const GET_CATEGORIES = gql`{
  categories(group: "news", show_in_menu: true) {
    id
    title
    slug
    ... on news_Category {
      cover_image {
        url
      }
    }
  }
}

`