import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleNum from "@/shared/snippets/article-num";
import ArticleCard from "@/shared/snippets/article-card";
import { getMastheadArticles } from "@/lib/graphql/queries/articles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import ArticleListSM from "../snippets/article-list-sm";

const MastHead = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setArticles] = useState([]);
  const [recent, setRecent] = useState([]);
  const [weekly, setWeekly] = useState([]);

  useEffect(() => {
    getMastheadArticles()
    .then((data) => {
      setArticles(data?.entries);
      setWeekly(data?.weekly);
      setRecent(data?.recent)
      //console.log('🐝 API response JOBS RELATED', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);


  return (
    <Container>
      <Row>
        <Col md={3} lg={3} xs={12}>
          {recent.map((article, i) => (
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
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {entries.map((article, i) => (
              <SwiperSlide key={i}>
                <ArticleCard data={article} key={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col md={3} lg={3} xs={12}>
          {weekly.map((article, i) => (
            <Col md={12}>
              <ArticleNum data={article} key={i} />
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default MastHead;
