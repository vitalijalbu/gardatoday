import React from 'react';
import RelatedArticles from '@/shared/sections/related-articles';
import graphQLClient from "@/lib/graphql/client";
//import { VIEW_INDEX } from '@/lib/graphql/entries';
import { Container, Row, Col } from 'reactstrap';
import MastheadHero from '@/shared/sections/masthead-hero';

export async function getStaticPaths(context) {
  console.log('context', context)
  return {
    paths: ['/zone/brescia'],
    fallback: false
  };
}



export async function getStaticProps({ params }) {
  console.log('params2', params)
  const VIEW_QUERY = `query{
    entry(slug:"${params.slug}") {
      id
      title
    }
  }
`;
  const data = await graphQLClient.request(VIEW_QUERY);

  return {
    props: { data },
  };
}

  const View = ({ data }) => {
console.log('view-entry', data);

    return (
      <div className="page">
       
      <div className="page-content">
      <Container>
      <Row>
        <Col><h1 className="blog-post-title mb-1">{`Ultime notizie da ${data.entry.title}`}</h1></Col>
      </Row>
      <MastheadHero title={`Ultime notizie da ${data.entry.title}`}/>
  </Container>

</div>


</div>
    )
}

export default View;
