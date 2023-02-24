import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleListSM from "@/shared/snippets/article-list-sm";
import graphQLClient from "@/lib/graphql/client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "reactstrap";

const FastHeader = ({ title }) => {

  return (
    <section className="tc-breaking-news-style1 pt-50 pb-50">
    <div className="container">
      <p className="color-999 text-uppercase mb-30 ltspc-1">breaking news</p>
      <div className="tc-post-grid-default">
        <div className="tc-slider-style1">
          <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
            <div
              className="swiper-wrapper"
              style={{
                transform: "translate3d(-2846.67px, 0px, 0px)",
                transitionDuration: "0ms"
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={1}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/4.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Economic policy between England &amp; Scotland
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 3 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={2}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/5.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title"> Make Poetry, Not War! </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 15 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index={3}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/4.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Economic policy between England &amp; Scotland
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 3 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-active"
                data-swiper-slide-index={0}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/3.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Discover the secret in Sahara desert
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 24 Minutes ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-next"
                data-swiper-slide-index={1}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/4.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Economic policy between England &amp; Scotland
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 3 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={2}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/5.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title"> Make Poetry, Not War! </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 15 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                data-swiper-slide-index={3}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/4.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Economic policy between England &amp; Scotland
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 3 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                data-swiper-slide-index={0}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/3.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Discover the secret in Sahara desert
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 24 Minutes ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                data-swiper-slide-index={1}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/4.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title">
                          Economic policy between England &amp; Scotland
                        </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 3 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={2}
                style={{ width: "356.667px", marginRight: 50 }}
              >
                <a href="page-single-post-creative.html" className="item d-block">
                  <div className="row gx-4 align-items-center">
                    <div className="col-4">
                      <div className="img th-70 img-cover">
                        <img src="assets/img/latest/5.png" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <h5 className="title"> Make Poetry, Not War! </h5>
                        <div className="meta-bot mt-10">
                          <ul>
                            <li className="date">
                              {" "}
                              <i className="la la-clock" /> 15 Hours ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
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
    </div>
  </section>
  
  );
};
export default FastHeader;
