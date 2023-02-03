import React, { useState, useEffect } from "react";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";
import { GET_AREAS } from "@/lib/graphql/entries/areas";
import CityCard from "@/shared/snippets/city-card";
import { Container, Row, Col } from "reactstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

const Areas = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    graphQLClient
      .request(GET_AREAS)
      .then((data) => setEntries(data?.entries || []));
  }, []);

  return (
    <section className="section-content" id="entries">
      <Container>
        <Row>
          <Col lg={3}>
            <h2 className="section-title">Comuni</h2>
            <Link href="/zone">Vedi tutte le zone</Link>
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
              {entries.map((entry, i) => (
                <SwiperSlide key={i}>
                  <CityCard data={entry} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Areas;
