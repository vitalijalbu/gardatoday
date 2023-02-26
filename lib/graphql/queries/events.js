import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getUpcomingEvents = async () => {
    // Get all blogs
  const QUERY = gql`
  query {
  entries(section: "events", limit: 6) {
      id
      title
      slug
      postDate @formatDateTime(format: "d M Y")
      author{
        fullName
        id
      }
      ... on events_default_Entry {
        excerpt
        cover_image {
          url
        }
        area{
          title
          slug
        }
      }
    }
  }
  `
  
    const data = await graphQLClient.request(QUERY);
    return data;
  
  }

export const getAllEvents = async () => {
  // Get all blogs
const QUERY = gql`
{
  entries(section: "events", dateEnd: ">= now") {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on events_default_Entry {
      excerpt
      dateEnd
      dateStart
      cover_image {
        url
      }
      area{
        title
        slug
      }
    }
  }
  archived: entries(section: "events", dateEnd: "<= now") {
    id
    title
    slug
    postDate @formatDateTime(format: "d M Y")
    ... on events_default_Entry {
      excerpt
      dateEnd
      dateStart
      cover_image {
        url
      }
      area{
        title
        slug
      }
    }
  }
}

`

  const data = await graphQLClient.request(QUERY);
  return data;

}


export const viewEvent = async (slug) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "events", slug:"${slug}") {
    id
    slug
    title
    ... on events_default_Entry {
      excerpt
      body
        cover_image {
          url
        }
      }
  }
  related_events: entries(section:"events", limit: 8) {
    id
    title
    slug
    dateCreated
    ... on news_default_Entry {
      excerpt
      cover_image {
        id,
        url
      }
      author {
        id,
        fullName
      }
      area {
        id,
        title
      }
       category {
        id,
        title
      }
    }
}
}
`

  const data = await graphQLClient.request(QUERY);
  return data;

}