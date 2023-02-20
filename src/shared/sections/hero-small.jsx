import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import ArticleListSM from "@/snippets/article-list-sm";

const HeroSmall = ({ entries }) => {

  if (!entries) return <p>Nessun dato</p>;

  const first_article = entries[0];
  const top_articles = entries.slice(1,6);
  const bottom_articles = entries.slice(5);
  

  return(
    <Container>
      <Row>
      <Col md={6} lg={6} xs={12}>
      <div className="card-wrapper article-item">
      <div className="card card-img no-after">
        <Link href={`/notizie/${first_article?.slug}`} aria-label={first_article?.title}>
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <figure className="img-wrapper">
                <source
                  srcSet={first_article?.cover_image ? first_article.cover_image[0]?.url : '/images/placeholder.svg'}
                  media="(min-width: 62.5em)"
                />
                <img
                   srcSet={first_article?.cover_image ? first_article.cover_image[0]?.url : '/images/placeholder.svg'}
                  className="p-card__image"
                  alt={first_article?.title}
                />
              </figure>
            </div>
          </div>
        </Link>
      </div>

      <div className="card-body">
        <a href="https://gardatoday.it/notizie/tremosine-morto-agricoltore-ribaltatosi-con-trattore"></a>
        <div className="category-top">
          <a href="https://gardatoday.it/notizie/tremosine-morto-agricoltore-ribaltatosi-con-trattore"></a>
          <a
            className="category"
            href="https://gardatoday.it/comuni/tremosine-sul-garda"
          >
            Tremosine sul Garda
          </a>
          <span className="data">{first_article?.postDate}</span>
        </div>
        <Link href={`/notizie/${first_article?.slug}`} >
          <h5 className="card-title serif underline">{first_article?.title}</h5>
        </Link>

        <p className="card-text d-md-block d-none">{first_article?.excerpt}</p>
      </div>
    </div>
          </Col>
          <Col md={4} lg={4} xs={12}>
          <ul className="list-unstyled">
            {top_articles.map((article) => ( 
                <ArticleListSM data={article} key={article.id} />
            ))}
          </ul>
          </Col>
          <Col md={4} lg={4} xs={12}>
          <ul className="list-unstyled">
            {bottom_articles.map((article) => ( 
                <ArticleListSM data={article} key={article.id} />
            ))}
          </ul>
          </Col>
      </Row> 
      <hr className="hr-divider"/>
    </Container>
)
}
export default HeroSmall;