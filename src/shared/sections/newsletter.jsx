import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Newsletter = ({ title, topics, limit }) => {


  return (
    <section className="py-4">
      <div className="container">
<div className="tc-subscribe-style9 mt-50">
  <div className="row justify-content-around align-items-center">
    <div className="col-lg-4">
      <div className="sub-info">
        <h5 className="mb-10">Our Newsletter</h5>
        <p className="fsz-13px color-666">
          Subscribe our newsletter to get latest news &amp; promotion
        </p>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="sub-form mt-4 mt-lg-0">
        <div className="form-group">
          <span className="icon">
            <i className="la la-envelope" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
          />
          <button>Iscriviti</button>
        </div>
        <p className="mt-2 color-666 fsz-13px fst-italic">
          By subscribing, you accepted the our{" "}
          <a
            href="#"
            className="text-decoration-underline fst-normal color-000"
          >
            Policy
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</section>
  )
}
export default Newsletter;
