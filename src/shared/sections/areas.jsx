import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllAreas } from "@/lib/graphql/queries/areas";
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
    getAllAreas()
      .then((data) => {
        setEntries(data?.entries);
        //console.log("🐝 API response CATEGORIES", data);
      })
      .catch((error) => {
        console.log(error);
      });
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
