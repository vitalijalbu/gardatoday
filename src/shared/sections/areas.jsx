import React, { useState, useEffect } from "react";
import Link from "next/link";
//import { getCategories } from "@/lib/graphql/articles/";
import { request, gql } from 'graphql-request'
import { INDEX_QUERY } from "@/lib/graphql/articles/categories";
import CityCard from "@/shared/snippets/city-card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "reactstrap";


// import required modules
import { Pagination } from "swiper";


const Areas = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  console.log('✅ received-articles', categories)

useEffect(() => {
  request('https://gardatoday.it/api/v1', INDEX_QUERY).then((data) => setCategories(data?.categories || []))
}, [])

  return(
    <section className="section-content" id="areas">
  <Container>
  <div className="uk-container uk-container-xlarge">
    <div
      className="tm-grid-expand uk-grid-column-small uk-grid-divider uk-grid-margin uk-grid"
      uk-grid=""
    >
      <div className="uk-width-1-5@m uk-first-column">
        <div className="uk-divider-small uk-margin-large uk-margin-remove-bottom" />
        <h2 className="uk-margin">Sezioni</h2>
      </div>
      <div className="uk-width-4-5@m" id="page#1">
        <div
          uk-slider=""
          className="uk-margin uk-text-center uk-slider uk-slider-container"
        >
          <div className="uk-position-relative uk-visible-toggle" tabIndex={-1}>
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
         {categories.map((category, i) => (<SwiperSlide key={i}><CityCard data={category}/></SwiperSlide>))}

      </Swiper>
          
            <div className="uk-visible@s uk-hidden-hover uk-hidden-touch uk-light">
              
              <a
                className="el-slidenav uk-position-small uk-position-center-left uk-icon uk-slidenav-previous uk-slidenav"
                href="#"
                uk-slidenav-previous=""
                uk-slider-item="previous"
                aria-label="Previous slide"
              >
                <svg
                  width={8}
                  height={11}
                  viewBox="0 0 8 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    points="6,0.5 1,5.5 6,10.5"
                  />
                </svg>
              </a>
              <a
                className="el-slidenav uk-position-small uk-position-center-right uk-icon uk-slidenav-next uk-slidenav"
                href="#"
                uk-slidenav-next=""
                uk-slider-item="next"
                aria-label="Next slide"
              >
                <svg
                  width={8}
                  height={11}
                  viewBox="0 0 8 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    points="2,10.5 7,5.5 2,0.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>
</section>
)
}
export default Areas;