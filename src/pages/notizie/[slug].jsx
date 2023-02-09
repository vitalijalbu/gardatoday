import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { viewArticle } from "@/lib/graphql/queries/articles";
import RelatedArticles from "@/shared/sections/related-articles";
import { Container, Row, Col } from "reactstrap";
import ShareButtons from "@/shared/widgets/share-btn";
import WeeklySpotlight from "@/shared/sections/weekly-spotlight";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState(null);
  const [related_articles, setRelatedArticles] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
  /* actions */
  const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    viewArticle(slug)
      .then((data) => {
        setEntry(data.entry);
        setRelatedArticles(data?.related_articles);
        //console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div className="page">
      <div className="page-content">
        <Container>
          <Row className="g4">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 border-bottom">{entry?.title}</h3>
              <p className="pb-4 mb-4 border-bottom">{entry?.excerpt}</p>
              <section className="section-content">
                <div dangerouslySetInnerHTML={{ __html: entry?.body }}></div>
              </section>
            </div>
            <Col md={4}>
              <div className="p-4">
                <ShareButtons />
              </div>
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4">
                  <h4 className="">Archives</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <RelatedArticles entries={related_articles} />
      <WeeklySpotlight />
    </div>
  );
};

export default Page;
