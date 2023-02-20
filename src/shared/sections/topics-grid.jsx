import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/graphql/queries/categories";
import TopicCard from "@/shared/snippets/topic-card";
import { Container, Row, Col } from "reactstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

const Topics = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data?.categories);
        //console.log("🐝 API response CATEGORIES", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="section-content" id="categories">
      <Container>
        <Row>
          <Col lg={3}>
            <h2 className="section-title">Sezioni</h2>
            <Link href="/sezioni">Vedi tutti</Link>
          </Col>
          <Col lg={9}>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <TopicCard data={category} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Topics;
