import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllEvents } from "@/lib/graphql/queries/events";
import EventCard from "@/shared/snippets/event-card";
import { Container, Row, Col } from "reactstrap";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [archived_events, setArchivedEvents] = useState([]);

  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data?.entries);
        setArchivedEvents(data?.archived);
        //console.log("🐝 API response EVENTS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <Container>
          <Row>
            <Col className="section-head">
              <h1 className="section-title">Eventi in programma</h1>
              <hr />
            </Col>

            {Array.isArray(events) ? (
              <Row>
                {events.map((entry) => (
                  <Col md={6} lg={3} xs={6} key={entry.id}>
                    <EventCard data={entry} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>Nessun dato</Row>
            )}
        </Row>
            <Row className="mt-3">
            <Col className="section-head">
              <h1 className="section-title">Eventi passati</h1>
              <hr/>
            </Col>
          
          
          {Array.isArray(archived_events) ? (
            <Row>
              {archived_events.map((archived) => (
                <Col md={6} lg={3} xs={6} key={archived.id}>
                  <EventCard data={archived} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row>Nessun dato</Row>
          )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Index;
