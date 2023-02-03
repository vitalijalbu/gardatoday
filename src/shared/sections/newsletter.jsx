import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Newsletter = ({ title, topics, limit }) => {


  return (
    <section className="py-4">
<div className="site-newsletter">
  <div className="container">
    <div className="text-center">
      <h3 className="h4 mb-2">Iscirviti alla newsletter</h3>
      <p className="text-muted">
        Join our monthly newsletter and never miss out on new stories and
        promotions.
      </p>
      <div className="row">
        <div className="col-xs-12 col-sm-9 col-md-7 col-lg-5 ms-auto me-auto">
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email address"
              aria-label="Email address"
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">
                Iscirviti
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}
export default Newsletter;
