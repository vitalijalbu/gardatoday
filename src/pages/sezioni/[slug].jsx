import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Button,
  CardHeader,
} from "reactstrap";
import { viewCategory } from "@/lib/graphql/queries/categories";
import MastheadHero from "@/shared/sections/masthead-hero";
import ArticleNum from "@/shared/snippets/article-num";
import ArticleList from "@/shared/snippets/article-list";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [category, setEntry] = useState(null);
  const [articles, setArticles] = useState([]);
  const [spotlight, setSpotlight] = useState([]);

  useEffect(() => {
    viewCategory(slug)
      .then((data) => {
        setEntry(data?.category);
        setArticles(data?.articles);
        setSpotlight(data?.spotlight);
        console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div className="page">
      <div className="page-content">
        <Container>
          <Row>
            <Col>
              <h1 className="page-title">{category?.title}</h1>
            </Col>
          </Row>
          <MastheadHero entries={articles} />

          <Row>
            <hr />
            <Col md={8}>
              <h1 className="page-title">Ultime notizie</h1>
              <ul className="list-unstyled">
              {articles.map((entry, i) => (
    <ArticleList data={entry} key={i}/>
   ))}
   </ul>
            </Col>
            <Col md={4}>
              <h1 className="page-title">I più letti</h1>
              <ul className="list-unstyled">
                {spotlight.map((article) => (
                  
                    <ArticleNum data={article} key={article.id} />
                  
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Page;
