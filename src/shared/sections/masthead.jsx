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
    <section className="tc-trends-news-style3 pt-50 pb-50">
  <div className="container">
    <div className="section-content">
      <div className="row gx-5">
        <div className="col-lg-9 border-1 border-end brd-gray">
          <div className="tc-trends-news-slider3 tc-slider-style2">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
              <div
                className="swiper-wrapper"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(-2577px, 0px, 0px)"
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                  data-swiper-slide-index={1}
                  style={{ width: 859 }}
                >
                  <div className="tc-post-overlay-style2">
                    <div className="img th-600 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                      <div className="tags tags-40">
                        <a href="#">Featured</a>
                        <a href="#">Restaurant</a>
                      </div>
                    </div>
                    <div className="content ps-40 pe-40 pb-40">
                      <h2 className="title mb-20">
                        <a href="page-single-post-creative.html">
                          Top 15 Bakery Store in Brooklyn <br /> with Vintage
                          style
                        </a>
                      </h2>
                      <div className="text mb-40">
                        To be perfectly honest, I’m not a big fan of alcoholic
                        beverages in summer. They make me <br /> sweat even
                        more; they make me [...]
                      </div>
                      <div className="meta-bot lh-1 fsz-13px text-white text-capitalize">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="author me-5">
                            <a href="#">
                              <i className="la la-user me-2" /> by logan
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 55 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  style={{ width: 859 }}
                >
                  <div className="tc-post-overlay-style2">
                    <div className="img th-600 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                      <div className="tags tags-40">
                        <a href="#">Featured</a>
                        <a href="#">Restaurant</a>
                      </div>
                    </div>
                    <div className="content ps-40 pe-40 pb-40">
                      <h2 className="title mb-20">
                        <a href="page-single-post-creative.html">
                          Top 15 Bakery Store in Brooklyn <br /> with Vintage
                          style
                        </a>
                      </h2>
                      <div className="text mb-40">
                        To be perfectly honest, I’m not a big fan of alcoholic
                        beverages in summer. They make me <br /> sweat even
                        more; they make me [...]
                      </div>
                      <div className="meta-bot lh-1 fsz-13px text-white text-capitalize">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="author me-5">
                            <a href="#">
                              <i className="la la-user me-2" /> by logan
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 55 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                  data-swiper-slide-index={1}
                  style={{ width: 859 }}
                >
                  <div className="tc-post-overlay-style2">
                    <div className="img th-600 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                      <div className="tags tags-40">
                        <a href="#">Featured</a>
                        <a href="#">Restaurant</a>
                      </div>
                    </div>
                    <div className="content ps-40 pe-40 pb-40">
                      <h2 className="title mb-20">
                        <a href="page-single-post-creative.html">
                          Top 15 Bakery Store in Brooklyn <br /> with Vintage
                          style
                        </a>
                      </h2>
                      <div className="text mb-40">
                        To be perfectly honest, I’m not a big fan of alcoholic
                        beverages in summer. They make me <br /> sweat even
                        more; they make me [...]
                      </div>
                      <div className="meta-bot lh-1 fsz-13px text-white text-capitalize">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="author me-5">
                            <a href="#">
                              <i className="la la-user me-2" /> by logan
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 55 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                  data-swiper-slide-index={0}
                  style={{ width: 859 }}
                >
                  <div className="tc-post-overlay-style2">
                    <div className="img th-600 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                      <div className="tags tags-40">
                        <a href="#">Featured</a>
                        <a href="#">Restaurant</a>
                      </div>
                    </div>
                    <div className="content ps-40 pe-40 pb-40">
                      <h2 className="title mb-20">
                        <a href="page-single-post-creative.html">
                          Top 15 Bakery Store in Brooklyn <br /> with Vintage
                          style
                        </a>
                      </h2>
                      <div className="text mb-40">
                        To be perfectly honest, I’m not a big fan of alcoholic
                        beverages in summer. They make me <br /> sweat even
                        more; they make me [...]
                      </div>
                      <div className="meta-bot lh-1 fsz-13px text-white text-capitalize">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="author me-5">
                            <a href="#">
                              <i className="la la-user me-2" /> by logan
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 55 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
            {/* arrows */}
            <div
              className="swiper-button-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            />
            <div
              className="swiper-button-prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="tc-post-list-style4">
            <p className="color-000 fw-bold text-uppercase mb-30 ltspc-1 lh-1">
              trending posts
            </p>
            <div className="tc-post-overlay-style2">
              <div className="img th-180 img-cover">
                <img src="https://via.placeholder.com/600" alt="" />
              </div>
              <div className="content ps-20 pe-20 pb-20 text-white">
                <h6 className="title">
                  <a href="page-single-post-creative.html">
                    Top 5 Street Tacos in Mahattan
                  </a>
                </h6>
                <a href="#" className="text-uppercase fsz-12px mt-10">
                  cuisine
                </a>
              </div>
            </div>
            <div className="items">
              <a href="page-single-post-creative.html" className="item">
                <h2 className="num">2</h2>
                <div className="content border-start border-1 brd-gray ms-15 ps-15">
                  <h6 className="title">
                    How to choose blueberries clean &amp; fresh
                  </h6>
                  <span className="fsz-10px color-666 text-uppercase mt-2">
                    receipes
                  </span>
                </div>
              </a>
              <a href="page-single-post-creative.html" className="item">
                <h2 className="num">3</h2>
                <div className="content border-start border-1 brd-gray ms-15 ps-15">
                  <h6 className="title">
                    Healthy breakfast just in 10 minutes everyday
                  </h6>
                  <span className="fsz-10px color-666 text-uppercase mt-2">
                    receipes, breakfast
                  </span>
                </div>
              </a>
              <a href="page-single-post-creative.html" className="item">
                <h2 className="num">4</h2>
                <div className="content border-start border-1 brd-gray ms-15 ps-15">
                  <h6 className="title">
                    Don’t need est calories everyday with Calo App
                  </h6>
                  <span className="fsz-10px color-666 text-uppercase mt-2">
                    cuisine, asia
                  </span>
                </div>
              </a>
              <a
                href="page-blog.html"
                className="fsz-13px color-000 text-uppercase pt-30"
              >
                See all posts <i className="la la-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};
export default MastHead;
