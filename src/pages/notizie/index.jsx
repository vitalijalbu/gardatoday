import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllArticles } from "@/lib/graphql/queries/articles";
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
      
      
      <MastheadSmall articles={head_articles}/>
      <Container>
      <div className="row">
  <div className="col-8">
  <h1 className="page-title">Ultime notizie</h1>
  <ul className="list-unstyled">
              {articles.map((entry, i) => (
    <ArticleList data={entry} key={i} excerpt={true}/>
   ))}
   </ul>
   </div>
   <Col md={4}>
              <h1 className="page-title">I più letti</h1>
              <ul className="list-unstyled">
                {spotlight.map((article) => (
                  
                    <ArticleListSM data={article} key={article.id} />
                  
                ))}
              </ul>
            </Col>
</div>
</Container>
</div>
</div>


  )
}

export default Index;
