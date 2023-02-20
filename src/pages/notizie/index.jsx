import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllArticles } from "@/lib/graphql/queries/articles";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Button,
  CardHeader,
} from "reactstrap";
import MastheadSmall from "@/shared/sections/masthead-hero-lg";
import ArticleList from "@/shared/snippets/article-list";
import ArticleListSM from "@/shared/snippets/article-list-sm";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [spotlight, setSpotlight] = useState([]);
  const head_articles = articles.slice(0,8);

  useEffect(() => {
    getAllArticles()
    .then((data) => {
      setArticles(data?.entries);
      setSpotlight(data?.spotlight);
      console.log('🐝 API response JOBS RELATED', data)
  }).catch((error) => {
    console.log(error);
  });
}, []);
  




  return (
    
    <div className="page">
    <div className="page-content">
      
      
      <MastheadSmall entries={head_articles}/>
      <Container>
      <Row>
  <Col lg={8} sm={12}>
  <h1 className="page-title">Ultime notizie</h1>
  <ul className="list-unstyled">
              {articles.map((entry, i) => (
    <ArticleList data={entry} key={i} excerpt={true}/>
   ))}
   </ul>
   </Col>
   <Col md={4}>
              <h1 className="page-title">I più letti</h1>
              <ul className="list-unstyled">
                {spotlight.map((article) => (
                  
                    <ArticleListSM data={article} key={article.id} />
                  
                ))}
              </ul>
            </Col>
</Row>
<Pagination>
  <PaginationItem>
    <PaginationLink
      first
      href="#"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>
</Container>
</div>
</div>


  )
}

export default Index;
