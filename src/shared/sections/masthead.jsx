import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleCard from "@/shared/snippets/article-card";
import graphQLClient from "@/lib/graphql/client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col, Dropdown , DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from "reactstrap";
// import required modules
import { Pagination } from "swiper";
import ArticleListSM from "../snippets/article-list-sm";



const MastHead = ({ title, topics, limit }) => {
  const FOCUS_QUERY = `query{
      query entries(section: "news", limit: 3) {
        id
        title
        slug
        dateCreated
        ... on news_default_Entry {
          excerpt
          cover_image {
            id,
            url
          }
          author {
            id,
            fullName
          }
          area {
            id,
            title
          }
           category {
            id,
            title
          }
        }
      }
    }
    `;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);


  async function getData() {
    try {
      const response = await graphQLClient.request(FOCUS_QUERY);
      if (response) {
        setData(response);
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

  if (!data) return <p>Nessun dato</p>;

  return (
    <Container>
      <Row>
      <Col md={3} lg={3} xs={12}>
      { data?.entries.map((article, i) => (
          <Col md={12}>
            <ArticleListSM data={article} key={i} />
          </Col>
        ))}
          </Col>
        <Col md={6} lg={6} xs={12}>
        <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
               { data?.entries.map((article, i) => (
                <SwiperSlide key={i}>
                 <ArticleCard data={article} key={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={3} lg={3} xs={12}>
          <Row className="list-unstyled">
        { data?.entries.map((article, i) => (
          <Col md={12}>
            <ArticleCard data={article} key={i} />
          </Col>
        ))}
        </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default MastHead;
