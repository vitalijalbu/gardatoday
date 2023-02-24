import React, { useState } from "react";
import Link from "next/link";
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconBrandTiktok } from '@tabler/icons-react';
import { Container } from "reactstrap";

const Footer = () => {

  return (
    <>
    <section className="banner16 pt-70 pb-70">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <a href="#" className="img">
          <img src="https://via.placeholder.com/1024x120" alt="" />
        </a>
      </div>
    </div>
  </div>
</section>

    <footer className="footer-style1">
  <div className="container">
    <div className="tc-subscribe-style1">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4">
          <div className="sub-info">
            <h5>Ricevi le migliori storie del blog nella tua casella di posta</h5>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="sub-form">
            <div className="form-group">
              <span className="icon">
                <i className="la la-envelope" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              <button>subscribe</button>
            </div>
            <p className="mt-2 color-666 fsz-13px fst-italic">
              By subscribing, you accepted the our{" "}
              <Link
                href="#"
                className="text-decoration-underline fst-normal color-000"
              >
                Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="row gx-lg-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="foot-logo">
              <img
                src="/img/logo.svg"
                alt=""
                className="dark-none"
              />
              <img
                src="/img/logo.svg"
                alt=""
                className="light-none"
              />
            </div>
            <div className="data-info">
              <p>
                <b>Operated by : </b> ThemesCamp Company, Inc.
              </p>
              <p>
                <b> Tax Code: </b> 0514234567
              </p>
              <p>
                <b> Address: </b> 223 Thatcher Road St, Mahattan <br /> NY
                10632, United States
              </p>
              <p>
                <b> Email : </b> support@GardaToday.com
              </p>
              <p>
                <b> Phone : </b> (+051) 3235 68 69
              </p>
              <p>
                License No. 12/AB-BCDEF, Signed on <br /> January 29, 2022
              </p>
            </div>
            <div className="social-links">
              <Link href="#" target="_blank">
                <IconBrandInstagram/>
              </Link>
              <Link href="#" target="_blank">
                <IconBrandFacebook />
              </Link>
              <Link href="#" target="_blank">
                <IconBrandLinkedin />
              </Link>
              <Link href="#" target="_blank">
                <IconBrandTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="link-group">
            <div className="title">Business</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Startup
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Business Trends
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Work Culture
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Personal Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Leaders
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Stocks Market
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <div className="title">Politics</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Capital Journal
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  National Security
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Politics Video
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="link-group">
            <div className="title">Technology</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Personal Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Product Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Video Games
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Discover
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Knowledge
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <div className="title">Lifestyle</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Lifestyle Trends
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Family
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Psychology
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Foods
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Culture
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="link-group">
            <div className="title">Entertainment</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Music &amp; Podcasts
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Art &amp; Design
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Movies
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <div className="title">Sport</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Football
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Tennis
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  F-1 Racing Tour
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  NBA
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Basketball
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="link-group">
            <div className="title">Travel</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  Discovery
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Flight Tickets &amp; Hotel
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Tour
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Destination
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Experience &amp; Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <div className="title">Help Center</div>
            <ul>
              <li>
                <Link href="#" className="f-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Partners Programe
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="f-link">
                  Term &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="foot text-center py-4 border-1 border-top brd-gray">
      <p className="fsz-13px color-666">
        © 2023 Copyrights by{" "}
        <Link href="#" className="color-000">
          GardaToday
        </Link>
        . All Rights Reserved. Developed by{" "}
        <Link href="#" className="color-000 text-decoration-underline">
          ThemesCamp
        </Link>
      </p>
    </div>
  </div>
  {/* ====== start to top button ====== */}
  <Link href="#" className="to_top show">
    <i className="la la-angle-up" />
  </Link>
  {/* ====== end to top button ====== */}
</footer>

</>
  );
};
export default Footer;
