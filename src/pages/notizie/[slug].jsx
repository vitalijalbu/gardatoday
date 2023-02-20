import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { viewArticle } from "@/lib/graphql/queries/articles";
import RelatedArticles from "@/shared/sections/related-articles";
import { Container, Row, Col, BreadcrumbItem, Breadcrumb } from "reactstrap";
import ShareButtons from "@/shared/widgets/share-btn";
import WeeklySpotlight from "@/shared/sections/weekly-spotlight";
import ArticleListSM from "@/shared/snippets/article-list-sm";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState(null);
  const [related_articles, setRelatedArticles] = useState([]);
  const [weekly_articles, setWeeklyArticles] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
  /* actions */
  const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    viewArticle(slug)
      .then((data) => {
        setEntry(data.entry);
        setRelatedArticles(data?.related_articles);
        setWeeklyArticles(data?.weekly_articles);
        //console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div className="page">
      <div className="page-content pt-5">
        <Container>
          <Row className="g4">
            <Col md={2}>
            <div className="text-center widgets-aside position-sticky" style={{ top: "2rem" }}>
  {/* Author info */}
  <div className="position-relative">
    <div className="avatar avatar-xl">
      <img
        className="avatar-img rounded-circle"
        src={'/images/placeholder.svg'}
        alt="avatar"
      />
    </div>
    <a href="#" className="h5 stretched-link mt-2 mb-0 d-block">
      {entry?.author?.fullName}
    </a>
  </div>
  <hr className="d-none d-lg-block" />
  {/* Card info */}
  <ul className="list-inline list-unstyled">
    <li className="list-inline-item d-lg-block my-lg-2">Nov 15, 2022</li>
    <li className="list-inline-item d-lg-block my-lg-2">5 min read</li>
  </ul>
  {/* Tags */}
  <ul className="list-inline text-primary-hover mt-0 mt-lg-3">
    <li className="list-inline-item">
      <a className="text-body" href="#">
        #agency
      </a>
    </li>
    <li className="list-inline-item">
      <a className="text-body" href="#">
        #business
      </a>
    </li>
    <li className="list-inline-item">
      <a className="text-body" href="#">
        #theme
      </a>
    </li>
    <li className="list-inline-item">
      <a className="text-body" href="#">
        #bootstrap
      </a>
    </li>
    <li className="list-inline-item">
      <a className="text-body" href="#">
        #marketing
      </a>
    </li>
  </ul>

<div className="py-2">
                <ShareButtons />
              </div>
              <hr/>
              </div>
              </Col>
            <Col md={7}>
              <h1 className="pb-4 serif mb-4 border-bottom">{entry?.title}</h1>
              <p className="pb-4 mb-4 border-bottom">{entry?.excerpt}</p>
              <section className="section-content article-body">
              <figure class="figure">
              <picture>
            <source
              srcSet={
                entry?.cover_image
                  ? entry.cover_image[0].url
                  : "/images/placeholder.svg"
              }
              media="(min-width: 62.5em)"
            />
            <img
              srcSet={
                entry?.cover_image
                  ? entry.cover_image[0].url
                  : "/images/placeholder.svg"
              }
              alt={entry?.title}
            />
          </picture>
  <figcaption class="figure-caption">Una didascalia per l'immagine sopra.</figcaption>
</figure>

                <div dangerouslySetInnerHTML={{ __html: entry?.body }}></div>
              </section>
            </Col>
            <Col md={3}>
              <div className="widgets-aside position-sticky" style={{ top: "2rem" }}>
  

                <div className="widget">
                <h3 className="widget-title">Leggi anche</h3>
              <ul className="list-unstyled">
                {related_articles.map((article) => (
                  
                    <ArticleListSM data={article} key={article.id} />
                  
                ))}
              </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
      <RelatedArticles entries={related_articles} />
      <WeeklySpotlight entries={weekly_articles}/>
    </div>
  );
};

export default Page;
