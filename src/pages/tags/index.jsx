import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllTags } from "@/lib/graphql/queries/tags";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { IconBriefcase, IconArrowRight } from "@tabler/icons-react";


const Index = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getAllTags()
    .then((data) => {
      setTags(data?.tags);
      console.log('🐝 API response CATEGORIES', data)
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
                <h1 className="section-title">Sezioni</h1>
              </div>

                  {tags.map((tag) => (

                            <h5 className="card-title serif mb-0">
                              <Link
                                className="text-primary"
                                href={`/sezioni/${tag.id}`}
                                data-focus-mouse="false"
                              >
                                {tag.title}
                              </Link>
                            </h5>
                          
                  ))}
            </Col>
            <Col md={4} xs={12}>
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Index;
