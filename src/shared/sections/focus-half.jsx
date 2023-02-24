import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleCard from "@/shared/snippets/article-card";
import graphQLClient from "@/lib/graphql/client";

import { Container, Row, Col } from "reactstrap";

const FocusHalf = ({ title, topics, limit }) => {

  return (
<section className="tc-latest-news-style1">
  <div className="container">
    <div className="section-content pt-50 pb-50 border-bottom border-1 brd-gray">
      <p className="color-000 text-uppercase mb-30 ltspc-1">
        {" "}
        <a href="page-blog.html"> latest news </a>{" "}
        <i className="la la-angle-right ms-1" />
      </p>
      <div className="row">
        <div className="col-lg-5 border-end brd-gray border-1">
          <div className="tc-post-grid-default">
            <div className="item">
              <div className="img img-cover th-330">
                <img src="https://via.placeholder.com/600" alt="" />
                <a
                  href="https://youtu.be/pGbIOC83-So?t=21"
                  data-lity=""
                  className="video_icon icon-70"
                >
                  <i className="ion-play" />
                </a>
              </div>
              <div className="content pt-30">
                <a
                  href="page-blog.html"
                  className="news-cat color-999 fsz-13px text-uppercase mb-10"
                >
                  politics
                </a>
                <h2 className="title mb-20">
                  <a href="page-single-post-features.html">
                    Biden asks Congress for $33 billion to support Ukraine
                  </a>
                </h2>
                <div className="text color-666">
                  The social-media company is in discussions to sell itself to
                  Elon, a dramatic turn of events just 11 days after the [...]
                </div>
                <div className="meta-bot lh-1 mt-40">
                  <ul className="d-flex">
                    <li className="date me-5">
                      <a href="#">
                        <i className="la la-calendar me-2" /> Dec 14, 2022
                      </a>
                    </li>
                    <li className="author me-5">
                      <a href="#">
                        <i className="la la-user me-2" /> by Admin{" "}
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
        <div className="col-lg-4 border-end brd-gray border-1">
          <div className="tc-post-list-style2">
            <div className="items">
              <div className="item">
                <div className="row gx-3 align-items-center">
                  <div className="col-4">
                    <div className="img th-70 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="content">
                      <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                        politics
                      </div>
                      <h5 className="title ltspc--1">
                        <a
                          href="page-single-post-creative.html"
                          className="hover-underline"
                        >
                          Disputes in the South China Sea show no sign of ending
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row gx-3 align-items-center">
                  <div className="col-4">
                    <div className="img th-70 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="content">
                      <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                        sport
                        <b className="text-danger">
                          {" "}
                          <i className="icon-6 rounded-circle bg-danger ms-2 me-1 d-inline-block" />
                          live
                        </b>{" "}
                      </div>
                      <h5 className="title ltspc--1">
                        <a
                          href="page-single-post-creative.html"
                          className="hover-underline"
                        >
                          Live of MLB Baseball 2022: NY Yankees Vs NY Mets
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row gx-3 align-items-center">
                  <div className="col-4">
                    <div className="img th-70 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="content">
                      <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                        lifestyle
                      </div>
                      <h5 className="title ltspc--1">
                        <a
                          href="page-single-post-creative.html"
                          className="hover-underline"
                        >
                          Paddling in Miami Beach
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row gx-3 align-items-center">
                  <div className="col-4">
                    <div className="img th-70 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="content">
                      <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                        business
                      </div>
                      <h5 className="title ltspc--1">
                        <a
                          href="page-single-post-creative.html"
                          className="hover-underline"
                        >
                          Stock market in last week: "The strength of bulls"
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row gx-3 align-items-center">
                  <div className="col-4">
                    <div className="img th-70 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="content">
                      <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                        lifestyle
                      </div>
                      <h5 className="title ltspc--1">
                        <a
                          href="page-single-post-creative.html"
                          className="hover-underline"
                        >
                          Stock market in last week: "The strength of bulls"
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item border-0">
                <div className="row gx-3 align-items-center">
                  <div className="col-4">
                    <div className="img th-70 img-cover">
                      <img src="https://via.placeholder.com/600" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="content">
                      <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                        lifestyle
                      </div>
                      <h5 className="title ltspc--1">
                        <a
                          href="page-single-post-creative.html"
                          className="hover-underline"
                        >
                          Helm Extract Infuse cream, 1000mg Full spectrum
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="tc-post-grid-default border-1 border-bottom brd-gray pb-10">
            <div className="item">
              <div className="img img-cover th-200">
                <img src="https://via.placeholder.com/600" alt="" />
              </div>
              <div className="content pt-20">
                <a
                  href="#"
                  className="news-cat color-999 fsz-13px text-uppercase mb-10"
                >
                  travel
                </a>
                <h5 className="title ltspc--1 mb-10">
                  {" "}
                  <a href="page-single-post-creative.html">
                    Fact of Camel in Dubai
                  </a>{" "}
                </h5>
                <div className="text color-666">
                  Crime rates on trains and buses are up in some of the nation’s
                  biggest [...]
                </div>
                <div className="meta-bot lh-1 mt-20">
                  <ul className="d-flex">
                    <li className="date me-5">
                      <a href="#">
                        <i className="la la-calendar me-2" /> Dec 25, 2022
                      </a>
                    </li>
                    <li className="comment">
                      <a href="#">
                        <i className="la la-comment me-2" /> 8{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-15">
            <span className="fsz-12px color-999 text-capitalize fst-italic">
              Related Post
            </span>
            <a href="page-single-post-creative.html" className="d-flex my-3">
              <span className="icon-6 rounded-circle bg-dark me-3 flex-shrink-0 op-4 mt-10" />
              <h6 className="fsz-16px">
                Top 10 Destinations not to be missed this summer
              </h6>
            </a>
            <a href="page-single-post-creative.html" className="d-flex my-3">
              <span className="icon-6 rounded-circle bg-dark me-3 flex-shrink-0 op-4 mt-10" />
              <h6 className="fsz-16px">
                Travel experience Switzerland self-sufficient in 4D3N
              </h6>
            </a>
            <a href="page-single-post-creative.html" className="d-flex my-3">
              <span className="icon-6 rounded-circle bg-dark me-3 flex-shrink-0 op-4 mt-10" />
              <h6 className="fsz-16px">Discovery Devon island, Canada</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
export default FocusHalf;
