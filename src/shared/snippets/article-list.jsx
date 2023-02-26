import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleList = ({ data }) => {
  return (
<div className="item">
  <div className="row">
    <div className="col-lg-5">
      <div className="img th-230 img-cover overflow-hidden">
        <img src="assets/img/latest/148.png" alt="" />
      </div>
    </div>
    <div className="col-lg-7">
      <div className="content mt-20 mt-lg-0">
        <a href="#" className="color-999 fsz-13px text-uppercase mb-10">
          sport
        </a>
        <h4 className="title fw-bold">
          <a href="page-single-post-creative.html" className="hover-underline">
            {data.title}
          </a>
        </h4>
        <div className="text color-666 mt-20">
          {data.excerpt}
        </div>
        <div className="meta-bot fsz-13px color-666">
          <ul className="d-flex">
            <li className="date me-5">
              <a href="#">
                <i className="la la-calendar me-2" /> Aug 21, 2023
              </a>
            </li>
            <li className="author me-5">
              <a href="#">
                <i className="la la-user me-2" /> by{" "}
                <span className="color-000">Logan</span>{" "}
              </a>
            </li>
            <li className="comment">
              <a href="#">
                <i className="la la-comment me-2" /> 0 Comments
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
