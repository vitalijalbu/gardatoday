import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CityCard from "@/shared/snippets/city-card";
import { GET_AREAS } from "@/lib/graphql/entries/areas";
import graphQLClient from "@/lib/graphql/client";

export async function getStaticProps() {
  const data = await graphQLClient.request(GET_AREAS);

  return {
    props: { data },
  };
}

const Index = ({data}) => {



  return (
   <div className="page">
   <div className="page-content">
    <section className="uk-section uk-section-small">
  <Container>
  <Row>
    <Col>
      <h1 className="page-title">Comuni</h1>
    </Col>
    </Row>

    {Array.isArray(data.entries) ? (
         <Row> 
          {data.entries.map((item, i) => (
            <Col lg={4} xs={6} sm={6} className="mb-3">
            <CityCard data={item} key={i}/>
            </Col>
          ))}
        </Row>
      ) : (
        <p strong>Nessun dato</p>
      )}
  </Container>
</section>

   
    </div>
    </div>
    
  );
};

export default Index;
