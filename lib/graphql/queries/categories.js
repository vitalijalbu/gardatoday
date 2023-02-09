import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllCategories = async () => {
  // Get all blogs
const QUERY = gql`
query {
  categories(level: 1, orderBy: "title ASC") {
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
  const data = await graphQLClient.request(QUERY);
  return data;

}


export const viewCategory = async (slug) => {
  // Get all blogs
const QUERY = gql`
query {
  category(slug:"${slug}") {
    id
    title
  }
    articles: entries(section: "news", limit: 9) {
      id
      title
      slug
      postDate @formatDateTime(format: "d M Y")
      ... on news_default_Entry {
        excerpt
        cover_image {
          url
        }
        area {
          title
        }
         category {
          id,
          title
        }
      }
    }      
    spotlight: entries(section: "news", limit: 9) {
      id
      title
      slug
      postDate @formatDateTime(format: "d M Y")
      ... on news_default_Entry {
        area{
          title
        }
      }
    }  
}
`

  const data = await graphQLClient.request(QUERY);
  return data;

}

export const getRelatedCategories = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "news") {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on news_default_Entry {
      careerCompany
      area{
        title
      }
      area {
        id
        title
      }
    }
  }
}
`
  const data = await graphQLClient.request(QUERY);
  return data;

}