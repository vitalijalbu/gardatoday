import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import RelatedEvents from "@/shared/sections/related-events";
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
import { viewEvent } from "@/lib/graphql/queries/events";
import ShareButtons from "@/shared/widgets/share-btn";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [entry, setEntry] = useState(null);
  const [related_events, setRelatedEntries] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
   /* actions */ 
   const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    viewEvent(slug)
    .then((data) => {
      setEntry(data?.entry);
      setRelatedEntries(data?.related_events);
      //console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, [slug]);

  return (
    <div className="page">
      <div className="page-content">
        <Container>
          <Row>
            <Col md={7} xs={12}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link href="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link href="/eventi">Eventi</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{entry?.title}</BreadcrumbItem>
              </Breadcrumb>
              <h1 className="pb-4 serif mb-2">{entry?.title}</h1>
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
            <Col md={5} xs={12}>
            <ShareButtons title={true}/>
            <Card>
                <CardHeader>
                  Dettagli evento
                </CardHeader>
                <CardBody>
                <dl className="grid">
  <dt>Creato il:</dt>
  <dd>
    <time dateTime="14-08-2022">14 agosto 2022</time>
  </dd>
  <dt>Data inizio:</dt>
  <dd>
    <time dateTime="24-09-2022" className="text-primary">
      24 settembre 2022
    </time>
  </dd>
  <dt>Data fine:</dt>
  <dd>
    <time dateTime="25-09-2022" className="text-primary">
      25 settembre 2022
    </time>
  </dd>
  <dt className="with-link">Zona:</dt>
  <dd className="l-cluster with-link">
    <ul className="list-unstyled">
      <li>
        {" "}
        <a href="https://gardatoday.it/comuni/peschiera-del-garda">
          <div className="chip chip-simple chip-primary">
            <span className="chip-label">Peschiera del Garda</span>
          </div>
        </a>
      </li>
    </ul>
  </dd>
</dl>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <RelatedEvents entries={related_events}/>
    </div>
  )
}

export default Page;
