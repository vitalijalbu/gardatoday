import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { viewJob } from "@/lib/graphql/queries/jobs";
import RelatedJobs from "@/shared/sections/related-jobs";
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
import ShareButtons from "@/shared/widgets/share-btn";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [entry, setEntry] = useState(null);
  const [related_entries, setRelatedEntries] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
   /* actions */ 
   const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    viewJob(id)
    .then((data) => {
      setEntry(data?.entry);
      setRelatedEntries(data?.related_entries);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, [id]);

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
                  <Link href="/lavoro">Offerte di lavoro</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{entry?.title}</BreadcrumbItem>
              </Breadcrumb>
              <div className="section-head">
                <h1 className="section-title">{entry?.title}</h1>
              </div>
              <section className="section-content">
              <div dangerouslySetInnerHTML={{ __html: entry?.body }}></div>
              </section>
            </Col>
            <Col md={5} xs={12}>
            <ShareButtons url="ciao"/>
            <Card>
                <CardHeader>
                  Dettagli offerta
                </CardHeader>
                <CardBody>
                <dl className="grid">
                     <dt>Inserzionista:</dt>
                     <dd>Carro Luigi</dd>
                     <dt>Sito web:</dt>
                     <dd><a href="https://carroluigi.it/" className="text-primary" target="_blank">Candidati ora</a></dd>
                     <dt>Data pubblicazione:</dt>
                     <dd><time datetime="10/03/2022">10/03/2022</time></dd>
                     <dt>Cntratto di lavoro:</dt>
                     <dd className="l-cluster with-link">
                        <ul className="list-inline">
                                                   </ul>
                     </dd>
                     <dt>Comune:</dt>
                     <dd className="l-cluster with-link">
                        <ul className="list-inline">
                                                   </ul>
                     </dd>
                  </dl>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <RelatedJobs entries={related_entries}/>
    </div>
  )
}

export default Page;
