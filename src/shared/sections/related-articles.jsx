import React, { useState, useEffect } from "react";
import Link from "next/link";

import graphQLClient from "@/lib/graphql/client";
import { getRelatedJobs } from "@/lib/graphql/queries/jobs";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import ArticleCard from "@/shared/snippets/article-card";

const RelatedArticles = ({ entries }) => {
  if (!entries) return <p>Nessun dato</p>;

  return (
    <Container>
      <Col>
        <h1 className="section-title">Articoli simili</h1>
      </Col>
      <Row>
        {entries.map((entry) => (
          <Col md={6} lg={3} xs={6} key={entry.id}>
          <ArticleCard data={entry}/>
        </Col>
        ))}
      </Row>
    </Container>
  );
};
export default RelatedArticles;
