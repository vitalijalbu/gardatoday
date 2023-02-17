import React, { useState, useEffect } from "react";
import Link from "next/link";

import graphQLClient from "@/lib/graphql/client";
import { getRelatedJobs } from "@/lib/graphql/queries/jobs";
import { Container, Row, Col } from "reactstrap";
import EventCard from "@/shared/snippets/event-card";

const RelatedEvents = ({ entries }) => {
  if (!entries) return <p>Nessun dato</p>;

  return (
    <Container>
      <Col>
        <h1 className="section-title">Altri eventi nella zona</h1>
      </Col>
      <Row>
        {entries.map((entry) => (
          <Col md={6} lg={3} xs={6} key={entry.id}>
          <EventCard data={entry}/>
        </Col>
        ))}
      </Row>
    </Container>
  );
};
export default RelatedEvents;
