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
import { viewArea } from "@/lib/graphql/queries/areas";
import MastheadHero from '@/shared/sections/masthead-hero';
import WidgetMeteo from "@/shared/widgets/meteo";
import ArticleList from "@/shared/snippets/article-list";

  const Page = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [entry, setEntry] = useState(null);
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      viewArea(slug).then((data) => {
        setEntry(data?.entry);
        setArticles(data?.articles);
        console.log('🐝 API response', data)
      }).catch((error) => {
        console.log(error);
      });
    }, [slug]);

    return (
      <div className="page">
       
      <div className="page-content">
      <Container>
      <Row>
        <Col><h1 className="page-title">{`Ultime notizie da ${entry?.title}`}</h1></Col>
      </Row>
      <MastheadHero entries={articles}/>
      <Row>
        <Col md={8}>
          <h1 className="page-title">{`Ultime notizie da ${entry?.title}`}</h1>
          <ul className="list-unstyled">
              {articles.map((entry, i) => (
    <ArticleList data={entry} key={i} excerpt={true}/>
   ))}
   </ul>
          </Col> 
          <Col md={4}>
          <WidgetMeteo title={entry?.title} slug={entry?.slug}/>
          </Col>
      </Row>
  </Container>

</div>


</div>
    )
}

export default Page;
