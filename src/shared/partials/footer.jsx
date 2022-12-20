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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/politics"
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
                          href="/joomla/themes/paladin/politics/environment"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/health"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/education"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/economy"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/united-states"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/world"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/brexit"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/state-justice"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/politics/elections"
                          className="uk-link-heading"
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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/sports"
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
                          href="/joomla/themes/paladin/sports/martial-arts"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/motorsports"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/baseball"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/football"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/athletics"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/soccer"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/basketball"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/sports/winter-sports"
                          className="uk-link-heading"
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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/technology"
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
                          href="/joomla/themes/paladin/technology/multimedia"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/technology/transportation"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/technology/electronics"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/technology/innovation"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/technology/reviews"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/technology/security"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/technology/gaming"
                          className="uk-link-heading"
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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/science"
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
                          href="/joomla/themes/paladin/science/space-cosmos"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/science/animal-world"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/science/our-climate"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/science/human-health"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/science/physics-tech"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/science/environment"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/science/humanities"
                          className="uk-link-heading"
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
                      <a href="#" uk-scroll="">
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
                      <a href="#" uk-scroll="">
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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/entertainment"
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
                          href="/joomla/themes/paladin/entertainment/movies"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/tv-shows"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/podcasts"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/festivals"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/art-culture"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/music"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/celebrities"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/entertainment/books"
                          className="uk-link-heading"
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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/business"
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
                          href="/joomla/themes/paladin/business/economy"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/business/markets"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/business/companies"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/business/real-estate"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/business/banks-finance"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/business/energy"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/business/consumer-service"
                          className="uk-link-heading"
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
              <h3 className="uk-h6 uk-margin-small">
                {" "}
                <a
                  className="el-link uk-link-heading"
                  href="/joomla/themes/paladin/travel"
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
                          href="/joomla/themes/paladin/travel/destinations"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/travel/travel-report"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/travel/city-guide"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/travel/sustainability"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/travel/travel-advice"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/travel/weather"
                          className="uk-link-heading"
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
                          href="/joomla/themes/paladin/travel/route-planner"
                          className="uk-link-heading"
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
              <h3 className="uk-h6 uk-margin-small"> Tags </h3>
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
                        <a href="#" uk-scroll="" className="uk-link-heading">
                          Opinion
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="#" uk-scroll="" className="uk-link-heading">
                          Daily Brief
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="#" uk-scroll="" className="uk-link-heading">
                          In the News
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="#" uk-scroll="" className="uk-link-heading">
                          Video
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="#" uk-scroll="" className="uk-link-heading">
                          Gallery
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <div className="el-title uk-margin-top uk-margin-remove-bottom">
                        {" "}
                        <a href="#" uk-scroll="" className="uk-link-heading">
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
                      <a href="#" uk-scroll="">
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
                      <a href="#" uk-scroll="">
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
