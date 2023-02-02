import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleCard from "@/shared/snippets/article-card";
import graphQLClient from "@/lib/graphql/client";

import { Container, Row, Col } from "reactstrap";

const MastHead = ({ title, topics, limit }) => {
  const FOCUS_QUERY = `query{
      query entries(section: "news", limit: 10) {
        id
        title
        slug
        dateCreated
        ... on news_default_Entry {
          excerpt
          cover_image {
            id,
            url
          }
          author {
            id,
            fullName
          }
          area {
            id,
            title
          }
           category {
            id,
            title
          }
        }
      }
    }
    `;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  const firstArticle = data?.entries?.[0];
  const articles = data?.entries?.slice(1);

  async function getData() {
    try {
      const response = await graphQLClient.request(FOCUS_QUERY);
      if (response) {
        setData(response);
      }
    } catch (err) {
      console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <h1>Nessun dato</h1>;

  return (
    <Container>
      <Row className="list-unstyled">
        <Col md={6} lg={6} xs={12}>
            <ArticleCard data={firstArticle} key={0} />
          </Col>
        {articles.map((article, i) => (
          <Col md={6} lg={3} xs={6}>
            <ArticleCard data={article} key={i} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default MastHead;
