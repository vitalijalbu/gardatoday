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
      <section className="features-posts pt-50 pb-50 bg-gray1">
      <Row>
        <Col><h1 className="page-title">{`Ultime notizie da ${entry?.title}`}</h1></Col>
      </Row>
      <MastheadHero entries={articles}/>
      </section>
      <Container>

      <Row>
        <Col md={8}>
          <h1 className="page-title">{`Ultime notizie da ${entry?.title}`}</h1>
          <div className="tc-post-list-style3">
              {articles.map((entry, i) => (
    <ArticleList data={entry} key={i} excerpt={true}/>
   ))}
   </div>
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
