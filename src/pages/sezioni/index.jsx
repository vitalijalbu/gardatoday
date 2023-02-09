import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/graphql/queries/categories";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { IconBriefcase, IconArrowRight } from "@tabler/icons-react";

const Index = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data?.categories);
        //console.log("🐝 API response CATEGORIES", data);
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
            <Col md={8} xs={12}>
              <div className="section-head">
                <h1 className="section-title">Sezioni</h1>
              </div>
              <div className="">
              <ul className="row">
              {categories.map((category) => (
                <li className="col-xs-12 col-sm-6 col-md-4 list-group-item">
                  <Link
                    className="text-primary"
                    href={`/sezioni/${category.slug}`}
                    data-focus-mouse="false"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
              </ul>
            </div>
            </Col>
            <Col md={4} xs={12}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Index;
