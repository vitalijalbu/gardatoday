import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllJobs = async () => {
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
      cover_image {
        id
        url
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


export const viewJob = async (id) => {
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
        category {
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

export const getRelatedJobs = async () => {
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