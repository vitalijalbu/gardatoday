import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllArticles = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "news", limit: 30) {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on news_default_Entry {
      area{
        title
      }
      cover_image {
        url
      }
    }
  }
  spotlight: entries(section: "news", limit: 8) {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on news_default_Entry {
      area{
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


export const viewArticle = async (slug) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "news", slug:"${slug}") {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on news_default_Entry {
      excerpt
        body
        area{
          title
        }
        area {
          title
        }
        category {
          id
          title
        }
      }
    }
    related_articles: entries(section: "news" limit: 4) {
      id
      title
      slug
      postDate @formatDateTime(format: "d M Y")
      ... on news_default_Entry {
        excerpt
        area{
          title
        }
        area {
          title
        }
      }
    }  
}
`

  const data = await graphQLClient.request(QUERY);
  return data;

}

export const getRelatedArticles = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "news") {
    id
    title
    postDate @formatDateTime(format: "d M Y")
    ... on news_default_Entry {
      excerpt
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