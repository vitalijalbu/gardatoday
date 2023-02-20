import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/queries/stories";
import StoryCard from "@/shared/snippets/story-card";
import { Container, Row, Col } from "reactstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

const Stories = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    getEntries()
    .then((data) => {
      setEntries(data?.entries);
  }).catch((error) => {
    console.log(error);
  });
}, []);
  

  return (
    <section className="section-content" id="entries">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Storie 24h</h2>
          </Col>
          </Row>
          <Row>
          <Col lg={12}>
            <Swiper
              slidesPerView={5}
              spaceBetween={24}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {entries.map((entry, i) => (
                <SwiperSlide key={i}>
                  <StoryCard data={entry} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Stories;
