import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllJobs } from "@/lib/graphql/queries/jobs";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { IconBriefcase, IconArrowRight } from "@tabler/icons-react";


const Index = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getAllJobs().then((data) => {
      setEntries(data?.entries);
      console.log('🐝 API response JOBS RELATED', data)
  }).catch((error) => {
    console.log(error);
  });
}, []);

  return (
    <div className="page">
      <div className="page-content">
        <Container>
          <Row>
            <Col md={8} xs={12}>
              <div className="section-head">
                <h1>Offerte di lavoro</h1>
              </div>

              <table className="table">
                <tbody>
                  {entries.map((entry) => (
                    <tr key={entry.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <div className="icon-lg bg-light rounded-circle flex-shrink-0">
                            <IconBriefcase />
                          </div>
                          <div className="ms-2">
                            <h5 className="card-title serif mb-0">
                              <Link
                                className="text-primary"
                                href={`/lavoro/${entry.id}`}
                                data-focus-mouse="false"
                              >
                                {entry.title}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </th>
                      <td>
                        <Link className="text-primary" href={`/lavoro/${entry.id}`}>
                          <h5>{entry.careerCompany}</h5>
                        </Link>
                      </td>
                      <td>
                        {entry?.area?.title}
                      </td>
                      <td>
                        <Link
                          className="btn btn-outline-primary"
                          href={`/lavoro/${entry.id}`}
                        >
                          Vedi l'offerta <IconArrowRight/>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <Col md={4} xs={12}>
              <Card>
                <CardBody className="text-center">
                  <h3>Hai un'offerta di lavoro da pubblicare?</h3>
                </CardBody>
                <CardBody>
                  <Button color="dark">Pubblica qui</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Index;
