import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleListSM from "@/shared/snippets/article-list-sm";
import graphQLClient from "@/lib/graphql/client";

import { Container, Row, Col } from "reactstrap";

const FastHeader = ({ title }) => {
  const FOCUS_QUERY = `query{
      entries(section: "news", limit:4, category: 82) {
        id
        title
        slug
        dateCreated
        postDate
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
    <section id="fast-header">
    <Container>
      <Row>
      <ul className="list-unstyled row">
        {data.entries.map((article, i) => (
            <li className="col-lg-6 col-md-6 col-12 mb-3 media story-item sm">
                <ArticleListSM data={article} key={i} />
            </li>
        ))}
      </ul>
      </Row>
    </Container>
    </section>
  );
};
export default FastHeader;
