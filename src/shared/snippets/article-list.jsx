import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleList = ({ data }) => {
  return (
    <div className="item border-0 bg-gray1 p-3 mt-30">
    <div className="row">
      <div className="col-lg-4">
        <div className="img th-200 img-cover">
          <img src="https://via.placeholder.com/600"ssets/img/technology/3.png" alt="" />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="content">
          <div className="news-cat color-999 fsz-13px text-uppercase mb-3">
            <a href="#" className="text-danger">
              Sponsored Content
            </a>
          </div>
          <h3 className="title ltspc--1">
            <a href="page-single-post-creative.html">
              {" "}
              Oppoturnity become Lead of Backend Developer at Google Studio{" "}
            </a>
          </h3>
          <div className="meta-bot lh-1 mt-80">
            <ul className="d-flex">
              <li className="comment">
                <a href="#">
                  {" "}
                  totalworks.com{" "}
                  <i className="las la-external-link-square-alt ms-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ArticleList;
