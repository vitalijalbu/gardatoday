import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <footer>
      <div className="uk-section-secondary uk-section">
        <div className="uk-container uk-container-xlarge">
          <div
            className="tm-grid-expand uk-grid-row-large uk-grid-margin-large uk-grid"
            uk-grid=""
          >
            <div className="uk-width-1-2@s uk-width-1-5@m uk-first-column">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Politics
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Environ&shy;ment
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Health
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Education
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Economy
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          United States
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          World
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Brexit
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          State &amp; Justice
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Elections
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-5@m">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Sports
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Martial Arts
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Motorsports
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Baseball
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Football
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Athletics
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Soccer
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Basketball
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Winter Sports
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-3@s uk-width-1-5@m">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Technology
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Multimedia
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Transportation
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Electronics
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Innovation
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Reviews
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Security
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Gaming
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-3@s uk-width-1-5@m">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Science
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Space &amp; Cosmos
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Animal World
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Our Climate
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Human &amp; Health
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Physics &amp; Tech
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Environment
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Humanities
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-3@s uk-width-1-5@m uk-visible@m">
              <div className="uk-divider-small uk-visible@m"></div>
              <h3 className="uk-h6 uk-visible@m uk-margin-small">
                {" "}
                Get the App{" "}
              </h3>
              <div className="uk-visible@m uk-margin">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid uk-grid-stack"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <a href="/sezioni/politica" uk-scroll="">
                        <img
                          src="/demo/paladin/images/badge-app-store.svg"
                          width="120"
                          height="40"
                          className="el-image"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <a href="/sezioni/politica" uk-scroll="">
                        <img
                          src="/demo/paladin/images/badge-google-play.svg"
                          width="135"
                          height="40"
                          className="el-image"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="uk-margin-remove-bottom tm-grid-expand uk-grid-row-large uk-margin-large uk-grid"
            uk-grid=""
          >
            <div className="uk-width-1-2@s uk-width-1-5@m uk-first-column">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Entertainment
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Movies
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          TV Shows
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Podcasts
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Festivals
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Art &amp; Culture
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Music
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Celebrities
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Books
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-5@m">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Business
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Economy
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Markets
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Companies
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Real Estate
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Banks &amp; Finance
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Energy
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Consumer &amp; Service
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-5@m">
              <div className="uk-divider-small"></div>
              <h3 className="section-title">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/sezioni/politica"
                >
                  Travel
                </a>{" "}
              </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Destinations
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Travel Report
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          City Guide
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Sustainability
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Travel Advice
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Weather
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a
                          href="/sezioni/politica"
                          
                        >
                          Route Planner
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-2@s uk-width-1-5@m">
              <div className="uk-divider-small"></div>
              <h3 className="section-title"> Tags </h3>
              <div className="uk-margin-medium">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {" "}
                  <div className="uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="/sezioni/politica" uk-scroll="" >
                          Opinion
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="/sezioni/politica" uk-scroll="" >
                          Daily Brief
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="/sezioni/politica" uk-scroll="" >
                          In the News
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="/sezioni/politica" uk-scroll="" >
                          Video
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="/sezioni/politica" uk-scroll="" >
                          Gallery
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="/sezioni/politica" uk-scroll="" >
                          Review
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-width-1-5@m"></div>
          </div>
          <div
            className="uk-hidden@m uk-margin-remove-top tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
            uk-grid=""
          >
            <div className="uk-width-1-1 uk-hidden@m">
              <div className="uk-divider-small uk-hidden@m"></div>
              <h2 className="uk-h6 uk-hidden@m uk-margin-small">
                {" "}
                Get the App{" "}
              </h2>
              <div className="uk-hidden@m uk-margin">
                <div
                  className="uk-child-width-auto uk-grid-small uk-grid-match uk-grid uk-grid-stack"
                  uk-grid=""
                >
                  {" "}
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <a href="/sezioni/politica" uk-scroll="">
                        <img
                          src="/demo/paladin/images/badge-app-store.svg"
                          width="120"
                          height="40"
                          className="el-image"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <a href="/sezioni/politica" uk-scroll="">
                        <img
                          src="/demo/paladin/images/badge-google-play.svg"
                          width="135"
                          height="40"
                          className="el-image"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
