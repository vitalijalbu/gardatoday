import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/queries/regions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "reactstrap";
import { IconClockHour1 } from "@tabler/icons-react";


const FastHeader = ({ title }) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const params = { limit:6 };

    useEffect(() => {
      getEntries(params)
        .then((data) => {
          setArticles(data?.entries || []);
          console.log("🐝 API response", data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <section id="fast-header">
      <Container>
        <Row>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {articles.map((article, i) => (
              <SwiperSlide
                key={i}
                className="col-lg-6 col-md-6 col-12 mb-3 media story-item sm"
              >
                 <Link href={`/notizie/${article.slug}`} className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="https://via.placeholder.com/600" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          {article.title}
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <IconClockHour1 /> {article.postDate}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
        <hr/>
      </Container>
    </section>
  );
};
export default FastHeader;
