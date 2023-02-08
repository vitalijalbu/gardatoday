import React, { useEffect, useState } from 'react';
import RelatedArticles from '@/shared/sections/related-articles';
import graphQLClient from "@/lib/graphql/client";
//import { VIEW_INDEX } from '@/lib/graphql/entries';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import ShareButtons from '@/shared/widgets/share-btn';


  const View = () => {
    const router = useRouter();
    const {slug}  = router.query;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});


    async function getData() {
      const VIEW_QUERY = `query{
        entry(slug:"${slug}") {
          id
          title
          postDate @formatDateTime (format: "Y-m-d")
          author{
            fullName
            username
          }
          ... on news_default_Entry {
            body
            category {
              slug
              id
              title
            }
             area {
              slug
              id
              title
            }
          }
        }
      }
    `;
      try {
        const response = await graphQLClient.request(VIEW_QUERY);
        if (response) {
          setData(response?.entry);
        }
      } catch (err) {
        console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  

    return (
      <div className="page">
       
      <div className="page-content">
      <Container>
      <div className="row g-5">
  <div className="col-md-8">
  <h3 className="pb-4 mb-4  border-bottom">{data.title}</h3>
    <h3 className="pb-4 mb-4  border-bottom">{data.excerpt}</h3>
    <section className="section-content">
              <div dangerouslySetInnerHTML={{ __html: data?.body }}></div>
              </section>
  

  </div>
  <div className="col-md-4">
  <div className="p-4">
      <ShareButtons/>
      </div>
    <div className="position-sticky" style={{ top: "2rem" }}>
      <div className="p-4">
        <h4 className="">Archives</h4>
        <ol className="list-unstyled mb-0">
          <li>
            <a href="#">March 2021</a>
          </li>
          <li>
            <a href="#">February 2021</a>
          </li>
          <li>
            <a href="#">January 2021</a>
          </li>
          <li>
            <a href="#">December 2020</a>
          </li>
          <li>
            <a href="#">November 2020</a>
          </li>
          <li>
            <a href="#">October 2020</a>
          </li>
          <li>
            <a href="#">September 2020</a>
          </li>
          <li>
            <a href="#">August 2020</a>
          </li>
          <li>
            <a href="#">July 2020</a>
          </li>
          <li>
            <a href="#">June 2020</a>
          </li>
          <li>
            <a href="#">May 2020</a>
          </li>
          <li>
            <a href="#">April 2020</a>
          </li>
        </ol>
      </div>

    </div>
  </div>
</div>

  </Container>

</div>
<RelatedArticles limit={4}/>

</div>
    )
}

export default View;
