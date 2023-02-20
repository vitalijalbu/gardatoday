import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getUpcomingEvents } from "@/lib/graphql/queries/events";
import EventCard from "@/shared/snippets/event-card";


import { Container, Row, Col } from "reactstrap";

const UpcomingEvents = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getUpcomingEvents().then((data) => {
      setEntries(data?.entries);
      console.log('🐝 API response EVENTS', data)
  }).catch((error) => {
    console.log(error);
  });
}, []);



  return (
    <Container>
      <Row>
      <Col>
        <h1 className="section-title">Eventi in programma</h1>
        </Col>
      </Row>
      {Array.isArray(entries) ? (
      <Row className="list-unstyled">
        {entries.map((entry, i) => (
          <Col md={6} lg={3} xs={6} key={entry.id}>
            <EventCard data={entry} />
          </Col>
        ))}
      </Row> 
      ) : (
                <Row>Nessun dato</Row>
              )}
    </Container>
  );
};
export default UpcomingEvents;
