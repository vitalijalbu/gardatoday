import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllTags = async () => {
  // Get all blogs
const QUERY = gql`
query {
  tags(level: 1, orderBy: "title ASC") {
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


export const viewCategory = async (id) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "jobs", id:"${id}") {
    id
    title
    postDate @formatDateTime(format: "d M Y")
    ... on jobs_default_Entry {
        careerCompany
        body
        area{
          title
        }
        area {
          id
          title
        }
        tag {
          id
          title
        }
      }
    }
    related_entries: entries(section: "jobs") {
      id
      title
      postDate @formatDateTime(format: "d M Y")
      ... on jobs_default_Entry {
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

export const getRelatedTags = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "jobs") {
    id
    title
    postDate @formatDateTime(format: "d M Y")
    ... on jobs_default_Entry {
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