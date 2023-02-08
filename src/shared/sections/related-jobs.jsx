import React, { useState, useEffect } from "react";
import Link from "next/link";

import graphQLClient from "@/lib/graphql/client";
import { getRelatedJobs } from "@/lib/graphql/queries/jobs";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { IconBriefcase } from "@tabler/icons-react";

const RelatedJobs = ({ entries }) => {
  if (!entries) return <h1>Nessun dato</h1>;

  return (
    <Container>
      <Col>
        <h1 className="section-title">Altre offerte di lavoro</h1>
      </Col>
      <Row>
        {entries.map((entry) => (
          <Col md={6} lg={3} xs={6} key={entry.id}>
            <Card className="mb-3">
              <CardBody>
                <div className="avatar avatar-xl mb-2">
                  <IconBriefcase />
                </div>
              </CardBody>

              <CardBody>
                <Link
                  href={`/lavoro/${entry?.id}`}
                  className="uk-link-heading"
                >
                  <span>{entry?.area?.title}</span>
                

                <h5 className="card-title">{entry?.title}</h5>
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default RelatedJobs;
