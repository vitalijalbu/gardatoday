import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/graphql/queries/categories";


const TopicsGrid = () => {
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
    <section className="another-news pt-50 pb-50 border-1 border-top brd-gray">
    <div className="container">
      <div className="content">
        <div className="row">
          <div className="col-lg-4">
            <p className="color-000 text-uppercase mb-30 ltspc-1">
              
              <a href="page-blog.html">Sport</a>
              <i className="la la-angle-right ms-1" />
            </p>
            <div className="row">
              <div className="col-12 border-1 border-end brd-gray">
                <div className="tc-post-grid-default">
                  <div className="item">
                    <div className="img img-cover th-250">
                      <img src="https://via.placeholder.com/800x533" alt="" />
                    </div>
                    <div className="content pt-20">
                      <a
                        href="#"
                        className="news-cat color-999 fsz-13px text-uppercase mb-10"
                      >
                        sport
                      </a>
                      <h4 className="title ltspc--1 mb-10">
                        <a href="page-single-post-creative.html">
                          America's track and field team won the 2022 olympics?
                        </a>
                      </h4>
                      <div className="text color-666">
                        Crime rates on trains and buses are up in some of the
                        nation’s biggest [...]
                      </div>
                      <div className="meta-bot lh-1 mt-20">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 7
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tc-post-list-style2">
                  <div className="items">
                    <a
                      href="page-single-post-creative.html"
                      className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 mt-15 brd-gray"
                    >
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src="https://via.placeholder.com/800x533" alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                              sport
                            </small>
                            <h5 className="title ltspc--1">
                              How’s Ameican Football Ball created out?
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="page-single-post-creative.html"
                      className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 brd-gray"
                    >
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src="https://via.placeholder.com/800x533" alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                              sport
                            </small>
                            <h5 className="title ltspc--1">
                              Daniel share experience ski on Everest
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="color-000 text-uppercase mb-30 ltspc-1">
              
              <a href="page-blog.html">Entertaiment</a>
              <i className="la la-angle-right ms-1" />
            </p>
            <div className="row">
              <div className="col-12 border-1 border-end brd-gray">
                <div className="tc-post-grid-default">
                  <div className="item">
                    <div className="img img-cover th-250">
                      <img src="https://via.placeholder.com/800x533" alt="" />
                    </div>
                    <div className="content pt-20">
                      <a
                        href="#"
                        className="news-cat color-999 fsz-13px text-uppercase mb-10"
                      >
                        Entertaiment
                      </a>
                      <h4 className="title ltspc--1 mb-10">
                        <a href="page-single-post-creative.html">
                          Logan Cee's Best Contemporary Art Works
                        </a>
                      </h4>
                      <div className="text color-666">
                        Crime rates on trains and buses are up in some of the
                        nation’s biggest [...]
                      </div>
                      <div className="meta-bot lh-1 mt-20">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 7
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tc-post-list-style2">
                  <div className="items">
                    <a
                      href="page-single-post-creative.html"
                      className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 mt-15 brd-gray"
                    >
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src="https://via.placeholder.com/800x533" alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                              entertaiment
                            </small>
                            <h5 className="title ltspc--1">
                              Netflix change their policy for package family
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="page-single-post-creative.html"
                      className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 brd-gray"
                    >
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src="https://via.placeholder.com/800x533" alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                              entertaiment
                            </small>
                            <h5 className="title ltspc--1">
                              Buy black vinyl record at Festival Oldschool market
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="color-000 text-uppercase mb-30 ltspc-1">
              
              <a href="page-blog.html">Travel</a>
              <i className="la la-angle-right ms-1" />
            </p>
            <div className="row">
              <div className="col-12">
                <div className="tc-post-grid-default">
                  <div className="item">
                    <div className="img img-cover th-250">
                      <img src="https://via.placeholder.com/800x533" alt="" />
                    </div>
                    <div className="content pt-20">
                      <a
                        href="#"
                        className="news-cat color-999 fsz-13px text-uppercase mb-10"
                      >
                        Travel
                      </a>
                      <h4 className="title ltspc--1 mb-10">
                        <a href="page-single-post-creative.html">
                          Top 10 Most beautiful hot springs in the world
                        </a>
                      </h4>
                      <div className="text color-666">
                        Crime rates on trains and buses are up in some of the
                        nation’s biggest [...]
                      </div>
                      <div className="meta-bot lh-1 mt-20">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#">
                              <i className="la la-calendar me-2" /> Dec 14, 2022
                            </a>
                          </li>
                          <li className="comment">
                            <a href="#">
                              <i className="la la-comment me-2" /> 7
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tc-post-list-style2">
                  <div className="items">
                    <a
                      href="page-single-post-creative.html"
                      className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 mt-15 brd-gray"
                    >
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src="https://via.placeholder.com/800x533" alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                              Travel
                            </small>
                            <h5 className="title ltspc--1">
                              Experience in applying for a visa card for newcomers
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="page-single-post-creative.html"
                      className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 brd-gray"
                    >
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src="https://via.placeholder.com/800x533" alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                              Travel
                            </small>
                            <h5 className="title ltspc--1">
                              Release yourself on the sea and get the vibe chill
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
export default TopicsGrid;
