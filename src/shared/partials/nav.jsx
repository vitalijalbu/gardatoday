import React, { useRef } from "react";
import Link from "next/link";
;

const Nav = () => {
  const ref = React.useRef();

  return (
    <div id="Nav">
    <div>
<div className="tm-header uk-visible@l tm-header-overlay" uk-header="">
  <div className="tm-headerbar tm-headerbar-top uk-dark">
    <div className="uk-container uk-container-xlarge">
      <div className="uk-position-relative uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-position-center-left tm-position-z-index-high">
          <div
            className="uk-grid-medium uk-child-width-auto uk-flex-middle uk-grid"
            data-uk-grid=""
          >
            <div className="uk-first-column">
              <div className="uk-panel" id="module-106">
                <a
                  className="uk-search-toggle uk-display-block uk-icon uk-search-icon"
                  href="/sezioni/politica"
                  uk-search-icon=""
                  uk-toggle=""
                  aria-expanded="false"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      cx={9}
                      cy={9}
                      r={7}
                    />
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      d="M14,14 L18,18 L14,14 Z"
                    />
                  </svg>
                </a>
                <div
                  id="search-106-modal"
                  className="uk-modal-full uk-modal"
                  uk-modal="container: true"
                >
                  <div
                    className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
                    uk-height-viewport=""
                  >
                    <button
                      className="uk-modal-close-full uk-close-large uk-icon uk-close"
                      type="button"
                      uk-close=""
                      uk-toggle="cls: uk-modal-close-full uk-close-large uk-modal-close-default; mode: media; media: @s"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.4"
                          x1={1}
                          y1={1}
                          x2={19}
                          y2={19}
                        />
                        <line
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.4"
                          x1={19}
                          y1={1}
                          x2={1}
                          y2={19}
                        />
                      </svg>
                    </button>
                    <div className="uk-search uk-search-large">
                      <form
                        id="search-106"
                        action="/joomla/themes/paladin/"
                        method="post"
                        role="search"
                        className="uk-search uk-search-large"
                      >
                        <input
                          name="searchword"
                          placeholder="Search"
                          minLength={3}
                          aria-label="Search"
                          type="search"
                          className="uk-search-input uk-text-center"
                        />
                        <input
                          type="hidden"
                          name="task"
                          defaultValue="search"
                        />
                        <input
                          type="hidden"
                          name="option"
                          defaultValue="com_search"
                        />
                        <input type="hidden" name="Itemid" defaultValue={101} />
                      </form>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-panel" id="module-96">
                <div className="uk-margin-remove-last-child custom">
                  <time
                    className="uk-text-small uk-text-emphasis"
                    dateTime="2022-12-05T12:56:46.542Z"
                  >
                    Monday, 5 December 2022
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/"
          aria-label="Back to home"
          className="uk-logo"
        >
          <img
            alt="GardaToday"
            loading="eager"
            width={300}
            height={50}
            uk-svg=""
            src="https://gardatoday.it/assets/images/logo_vertical.svg"
            hidden=""
          />
        </a>
        <div className="uk-position-center-right tm-position-z-index-high">
          <div className="uk-panel" id="module-103">
            <div
              className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-width-1-1 uk-first-column">
                <div className="uk-margin">
                  <div
                    className="uk-flex-middle uk-grid-small uk-child-width-auto uk-grid"
                    uk-grid=""
                  >
                    <div className="el-item uk-first-column">
                      <a
                        className="el-content uk-button uk-button-default"
                        href="/sezioni/politica"
                        uk-scroll=""
                      >
                        Subscribe
                      </a>
                    </div>
                    <div className="el-item">
                      <a
                        className="el-content uk-button uk-button-default"
                        href="/sezioni/politica"
                        uk-scroll=""
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    uk-sticky=""
    media="@l"
    cls-active="uk-navbar-sticky"
    sel-target=".uk-navbar-container"
    className="uk-sticky"
  >
    <div className="uk-navbar-container uk-navbar-transparent uk-dark">
      <div className="uk-container uk-container-xlarge">
        <nav
          className="uk-navbar"
          uk-navbar='{"align":"left","container":".tm-header > [uk-sticky]","boundary":".tm-header .uk-navbar-container"}'
        >
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li className="item-101 uk-active">
                <a href="/sezioni/politica" className="uk-preserve-width">
                  <span uk-icon="icon: home;" className="uk-icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65" />
                      <polygon points="15 4 18 4 18 7 17 7 17 5 15 5" />
                      <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19" />
                    </svg>
                  </span>{" "}
                </a>
              </li>
              <li className="item-108 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Politics
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-108\\#3 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Environment
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Health
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Education
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Economy
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              United States
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              World
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Brexit
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              State &amp; Justice
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Elections
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-108#3" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="The voter turnout shows the importance of this year’s election"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/f0/politics-post-voter-turnout-shows-importance-of-elections-f04cf242.webp 340w, /joomla/templates/yootheme/cache/87/politics-post-voter-turnout-shows-importance-of-elections-872d3349.webp 679w, /joomla/templates/yootheme/cache/36/politics-post-voter-turnout-shows-importance-of-elections-365e05cf.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/96/politics-post-voter-turnout-shows-importance-of-elections-96d632ba.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Nationwide elections
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  The voter turnout shows the importance of this
                                  year’s election
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Opposing camps clashed in heated dispute during today’s rally"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/36/politics-post-opposing-camps-at-rally-3611bd19.webp 340w, /joomla/templates/yootheme/cache/a7/politics-post-opposing-camps-at-rally-a7d3ded3.webp 679w, /joomla/templates/yootheme/cache/16/politics-post-opposing-camps-at-rally-16a0e855.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/df/politics-post-opposing-camps-at-rally-df230e10.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                At California rally
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Opposing camps clashed in heated dispute
                                  during today’s rally
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Sea te hinc legimus omnesque, per et dicat
                                scaevola omittantur, saepe possim quaes...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="The current crisis reveals the staggering problems in our national healthcare system"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/e7/politics-post-crisis-national-healthcare-system-e702084a.webp 340w, /joomla/templates/yootheme/cache/19/politics-post-crisis-national-healthcare-system-19c8a8ba.webp 679w, /joomla/templates/yootheme/cache/a8/politics-post-crisis-national-healthcare-system-a8bb9e3c.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/30/politics-post-crisis-national-healthcare-system-300a8f71.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Low healthcare funds
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  The current crisis reveals the staggering
                                  problems in our national healthcare system
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Tempor integre sit cu, alia iuvaret atomorum his
                                cu, error omnium at nam. Ei decor...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="What we have learned 30 years after the fall of the Berlin Wall"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/2b/politics-post-30-years-after-fall-of-berlin-wall-2b269d23.webp 340w, /joomla/templates/yootheme/cache/b4/politics-post-30-years-after-fall-of-berlin-wall-b48df9c9.webp 679w, /joomla/templates/yootheme/cache/05/politics-post-30-years-after-fall-of-berlin-wall-05fecf4f.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/11/politics-post-30-years-after-fall-of-berlin-wall-116dd15a.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Lessons from the Iron Curtain
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  What we have learned 30 years after the fall
                                  of the Berlin Wall
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor inc...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-109 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Sports
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-109\\#4 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Martial Arts
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Motorsports
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Baseball
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Football
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Athletics
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Soccer
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Basketball
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Winter Sports
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-109#4" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Nicola Aebi is poised to set a new world record again"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/eb/sports-post-nicola-aebli-poised-to-set-new-world-record-eb9b58ad.webp 340w, /joomla/templates/yootheme/cache/21/sports-post-nicola-aebli-poised-to-set-new-world-record-21737c7a.webp 679w, /joomla/templates/yootheme/cache/90/sports-post-nicola-aebli-poised-to-set-new-world-record-90004afc.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/7b/sports-post-nicola-aebli-poised-to-set-new-world-record-7ba9491c.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Ski Alpin
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Nicola Aebi is poised to set a new world
                                  record again
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Sea te hinc legimus omnesque, per et dicat
                                scaevola omittantur, saepe possim quaes...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Max Meyer: “I feel better prepared than ever”"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/44/sports-post-interview-with-pole-vaulter-max-meyer-44771fe8.webp 340w, /joomla/templates/yootheme/cache/c4/sports-post-interview-with-pole-vaulter-max-meyer-c41afe85.webp 679w, /joomla/templates/yootheme/cache/75/sports-post-interview-with-pole-vaulter-max-meyer-7569c803.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/b4/sports-post-interview-with-pole-vaulter-max-meyer-b43fa9cc.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Interview with pole vaulter
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Max Meyer: “I feel better prepared than ever”
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Sea te hinc legimus omnesque, per et dicat
                                scaevola omittantur, saepe possim quaes...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Western Europe Road Tour reaching the last stage today"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/0e/sports-post-western-europe-road-tour-reaching-last-stage-today-0e122f13.webp 340w, /joomla/templates/yootheme/cache/14/sports-post-western-europe-road-tour-reaching-last-stage-today-14b52176.webp 679w, /joomla/templates/yootheme/cache/a5/sports-post-western-europe-road-tour-reaching-last-stage-today-a5c617f0.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/46/sports-post-western-europe-road-tour-reaching-last-stage-today-4697cbef.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                End of Western Europe tour
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Western Europe Road Tour reaching the last
                                  stage today
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Cursus sit amet dictum sit amet justo donec enim
                                diam vulputate ut pharetra sit am...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Impressive duel concluded the fencing championship"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/3f/sports-post-impressive-duel-concludes-fencing-championship-3f3922b8.webp 340w, /joomla/templates/yootheme/cache/1f/sports-post-impressive-duel-concludes-fencing-championship-1f175cfa.webp 679w, /joomla/templates/yootheme/cache/ae/sports-post-impressive-duel-concludes-fencing-championship-ae646a7c.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/2b/sports-post-impressive-duel-concludes-fencing-championship-2b1cd244.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Fencing Championship
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Impressive duel concluded the fencing
                                  championship
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Cursus sit amet dictum sit amet justo donec enim
                                diam vulputate ut pharetra sit am...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-110 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Technology
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-110\\#5 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Multimedia
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Transportation
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Electronics
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Innovation
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Reviews
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Security
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Gaming
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-110#5" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Presenting the most prominent features of the new mobile OS"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/f9/technology-post-most-prominent-features-of-the-new-mobile-os-f958fed9.webp 340w, /joomla/templates/yootheme/cache/ed/technology-post-most-prominent-features-of-the-new-mobile-os-ed2d7226.webp 679w, /joomla/templates/yootheme/cache/5c/technology-post-most-prominent-features-of-the-new-mobile-os-5c5e44a0.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/57/technology-post-most-prominent-features-of-the-new-mobile-os-574b97f5.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                New mobile OS
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Presenting the most prominent features of the
                                  new mobile OS
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo nulla facilisi n...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="The new tablet manages to inspire with unique features"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/6b/technology-post-new-tablet-inspires-with-unique-features-6be7101d.webp 340w, /joomla/templates/yootheme/cache/41/technology-post-new-tablet-inspires-with-unique-features-415dacee.webp 679w, /joomla/templates/yootheme/cache/f0/technology-post-new-tablet-inspires-with-unique-features-f02e9a68.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/95/technology-post-new-tablet-inspires-with-unique-features-9562fca3.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Innovations for designers
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  The new tablet manages to inspire with unique
                                  features
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Lorem ipsum dolor sit amet, consectetur adipis
                                cing elit, sed do eiusmod tempor in...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="The 16-inch MacBook Pro considerably improves performance"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/d2/technology-post-the-16-inch-macbook-pro-shows-stunning-performance-improvements-with-new-gpu-d2a21b50.webp 340w, /joomla/templates/yootheme/cache/2b/technology-post-the-16-inch-macbook-pro-shows-stunning-performance-improvements-with-new-gpu-2bc24839.webp 679w, /joomla/templates/yootheme/cache/9a/technology-post-the-16-inch-macbook-pro-shows-stunning-performance-improvements-with-new-gpu-9ab17ebf.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/aa/technology-post-the-16-inch-macbook-pro-shows-stunning-performance-improvements-with-new-gpu-aac3f81d.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                16-inch MacBook Pro
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  The 16-inch MacBook Pro considerably improves
                                  performance
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo nulla facilisi n...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="What can we expect from the updated Home Smart Speaker"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/5b/technology-post-what-can-we-expect-from-updated-home-smart-speaker-5b716f72.webp 340w, /joomla/templates/yootheme/cache/2a/technology-post-what-can-we-expect-from-updated-home-smart-speaker-2a35783b.webp 679w, /joomla/templates/yootheme/cache/9b/technology-post-what-can-we-expect-from-updated-home-smart-speaker-9b464ebd.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/3b/technology-post-what-can-we-expect-from-updated-home-smart-speaker-3bb2f9ee.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Home smart speaker
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  What can we expect from the updated Home Smart
                                  Speaker
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Tempor integre sit cu, alia iuvaret atomorum his
                                cu, error omnium at nam. Ei decor...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-111 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Science
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-111\\#6 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Space &amp; Cosmos
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Animal World
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Our Climate
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Human &amp; Health
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Physics &amp; Tech
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Environment
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Humanities
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-111#6" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="More than 2218 satellites orbit our planet, each with its own purpose"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/1b/science-post-more-than-2218-satellites-orbit-our-planet-1bec1982.webp 340w, /joomla/templates/yootheme/cache/0a/science-post-more-than-2218-satellites-orbit-our-planet-0afcb843.webp 679w, /joomla/templates/yootheme/cache/bb/science-post-more-than-2218-satellites-orbit-our-planet-bb8f8ec5.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/8a/science-post-more-than-2218-satellites-orbit-our-planet-8a100c9a.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                What are satellites used for?
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  More than 2218 satellites orbit our planet,
                                  each with its own purpose
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et ma...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Exploring hidden marine species with Steve Vernon"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/32/science-post-exploring-hidden-marine-species-with-steve-vernon-32f7f3ba.webp 340w, /joomla/templates/yootheme/cache/01/science-post-exploring-hidden-marine-species-with-steve-vernon-01916f06.webp 679w, /joomla/templates/yootheme/cache/b0/science-post-exploring-hidden-marine-species-with-steve-vernon-b0e25980.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/86/science-post-exploring-hidden-marine-species-with-steve-vernon-86cc1a97.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Our oceans
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Exploring hidden marine species with Steve
                                  Vernon
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo nulla facilisi n...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="The next ISS crew is planned to launch this weekend"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/73/science-post-next-iss-crew-planned-to-launch-this-weekend-73b610d2.webp 340w, /joomla/templates/yootheme/cache/a8/science-post-next-iss-crew-planned-to-launch-this-weekend-a8ebc5fa.webp 679w, /joomla/templates/yootheme/cache/19/science-post-next-iss-crew-planned-to-launch-this-weekend-1998f37c.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/54/science-post-next-iss-crew-planned-to-launch-this-weekend-54685319.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Launch at Cape Canaveral
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  The next ISS crew is planned to launch this
                                  weekend
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Some coral reefs seem to be recovering miraculously, marine biologists find"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/0a/science-post-some-coral-reefs-recovering-0a5e58dc.webp 340w, /joomla/templates/yootheme/cache/52/science-post-some-coral-reefs-recovering-52a5218b.webp 679w, /joomla/templates/yootheme/cache/e3/science-post-some-coral-reefs-recovering-e3d6170d.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/b8/science-post-some-coral-reefs-recovering-b8765316.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Saving bleached coral reefs
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Some coral reefs seem to be recovering
                                  miraculously, marine biologists find
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Sea te hinc legimus omnesque, per et dicat
                                scaevola omittantur, saepe possim quaes...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-112 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Entertainment
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-112\\#7 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Movies
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              TV Shows
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Podcasts
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Festivals
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Art &amp; Culture
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Music
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Celebrities
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Books
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-112#7" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="In Zack Schreiber’s new comedy a Dad goes through the motions"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/ea/entertainment-post-zack-schreiber-s-new-comedy-eae49303.webp 340w, /joomla/templates/yootheme/cache/17/entertainment-post-zack-schreiber-s-new-comedy-17d0278a.webp 679w, /joomla/templates/yootheme/cache/a6/entertainment-post-zack-schreiber-s-new-comedy-a6a3110c.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/c4/entertainment-post-zack-schreiber-s-new-comedy-c47c3618.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                A grown-up movie
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  In Zack Schreiber’s new comedy a Dad goes
                                  through the motions
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor inc...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Looking Glass was picked up for two more seasons"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/ae/entertainment-post-looking-glass-picked-up-for-two-more-seasons-ae0cf467.webp 340w, /joomla/templates/yootheme/cache/7b/entertainment-post-looking-glass-picked-up-for-two-more-seasons-7bbf0bc5.webp 679w, /joomla/templates/yootheme/cache/ca/entertainment-post-looking-glass-picked-up-for-two-more-seasons-cacc3d43.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/5e/entertainment-post-looking-glass-picked-up-for-two-more-seasons-5ee72eec.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Good news for fans
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Looking Glass was picked up for two more
                                  seasons
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Gravida cum socis natoque penatibus et magnis
                                dis parturient montes nascetur ridic...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Allie Holiday confirms: New album coming soon"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/f4/entertainment-post-allie-holiday-new-album-coming-soon-f435a2d9.webp 340w, /joomla/templates/yootheme/cache/64/entertainment-post-allie-holiday-new-album-coming-soon-64b8a02d.webp 679w, /joomla/templates/yootheme/cache/d5/entertainment-post-allie-holiday-new-album-coming-soon-d5cb96ab.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/ef/entertainment-post-allie-holiday-new-album-coming-soon-efe61e24.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Allie Holiday working on new songs
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Allie Holiday confirms: New album coming soon
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                His cu cibo primis, vix quas argumentum ei, qui
                                in esse laoreet! Sea te hinc legim...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Podcast: Relationships in times of crisis"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/5c/entertainment-post-podcast-relationships-in-times-of-crisis-5c2702c4.webp 340w, /joomla/templates/yootheme/cache/68/entertainment-post-podcast-relationships-in-times-of-crisis-68797a65.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/7d/entertainment-post-podcast-relationships-in-times-of-crisis-7d71dbd6.jpeg"
                                    width={340}
                                    height={198}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Days of thunder
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Podcast: Relationships in times of crisis
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Malesuada bibendum arcu vitae elementum
                                curabitur vitae nunc sed velit dignissim s...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-113 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Business
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-113\\#8 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Economy
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Markets
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Companies
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Real Estate
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Banks &amp; Finance
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Energy
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Consumer &amp; Service
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-113#8" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Experts predict the markets won’t be out of recession before next year"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/7e/business-post-markets-not-out-of-recession-before-next-year-7e70e3ab.webp 340w, /joomla/templates/yootheme/cache/46/business-post-markets-not-out-of-recession-before-next-year-46281791.webp 679w, /joomla/templates/yootheme/cache/f7/business-post-markets-not-out-of-recession-before-next-year-f75b2117.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/23/business-post-markets-not-out-of-recession-before-next-year-2333d9ba.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Long way out of recession
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Experts predict the markets won’t be out of
                                  recession before next year
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor inc...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Is this the best or the worst time to invest in real estate?"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/5a/business-post-best-or-worst-time-to-invest-in-real-estate-5ab282f9.webp 340w, /joomla/templates/yootheme/cache/5b/business-post-best-or-worst-time-to-invest-in-real-estate-5bad15c9.webp 679w, /joomla/templates/yootheme/cache/ea/business-post-best-or-worst-time-to-invest-in-real-estate-eade234f.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/1e/business-post-best-or-worst-time-to-invest-in-real-estate-1eb85004.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Real estate
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Is this the best or the worst time to invest
                                  in real estate?
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Malesuada bibendum arcu vitae elementum
                                curabitur vitae nunc sed velit dignissim s...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="More concerns about possible deflation are rising"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/bb/business-post-more-concerns-about-possible-deflation-rising-bb13e00a.webp 340w, /joomla/templates/yootheme/cache/19/business-post-more-concerns-about-possible-deflation-rising-1959e885.webp 679w, /joomla/templates/yootheme/cache/a8/business-post-more-concerns-about-possible-deflation-rising-a82ade03.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/36/business-post-more-concerns-about-possible-deflation-rising-36914c60.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Investors alarmed
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  More concerns about possible deflation are
                                  rising
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Cursus sit amet dictum sit amet justo donec enim
                                diam vulputate ut pharetra sit am...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="After deep plunge stocks are starting to recover"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/df/business-post-after-deep-plunge-stocks-starting-to-recover-dfe8afe1.webp 340w, /joomla/templates/yootheme/cache/9e/business-post-after-deep-plunge-stocks-starting-to-recover-9e035f10.webp 679w, /joomla/templates/yootheme/cache/2f/business-post-after-deep-plunge-stocks-starting-to-recover-2f706996.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/8d/business-post-after-deep-plunge-stocks-starting-to-recover-8db669c6.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Wall Street crisis
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  After deep plunge stocks are starting to
                                  recover
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Gravida cum socis natoque penatibus et magnis
                                dis parturient montes nascetur ridic...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-117 uk-parent">
                <a
                  href="/sezioni/politica"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Travel
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-drop='{"clsDrop":"uk-navbar-dropdown","flip":"false","container":".tm-header > [uk-sticky]","pos":"bottom-left","stretch":"x","boundary":".tm-header .uk-navbar"}'
                >
                  <style
                    className="uk-margin-remove-adjacent"
                    dangerouslySetInnerHTML={{
                      __html:
                        "@media (max-width: 1599px) { #menu-item-117\\#9 > * > :nth-child(4n+0) { display: none; } } "
                    }}
                  />
                  <div
                    className="tm-grid-expand uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                    uk-grid=""
                  >
                    <div className="uk-width-1-4@m">
                      <div className="uk-h6"> Categories </div>
                      <div className="uk-margin">
                        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                          {" "}
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Destinations
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Travel Report
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              City Guide
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Sustainability
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Travel Advice
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Weather
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Route Planner
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/politica"
                            >
                              Archive
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-width-3-4@m">
                      <div className="uk-h6"> Latest Articles </div>
                      <div id="menu-item-117#9" className="uk-margin">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          {" "}
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Visiting some of the most popular destinations in Central Europe"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/16/travel-post-most-popular-destinations-in-central-europe-1657b17a.webp 340w, /joomla/templates/yootheme/cache/4d/travel-post-most-popular-destinations-in-central-europe-4da88324.webp 679w, /joomla/templates/yootheme/cache/fc/travel-post-most-popular-destinations-in-central-europe-fcdbb5a2.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/13/travel-post-most-popular-destinations-in-central-europe-136df68c.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Photo reports
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Visiting some of the most popular destinations
                                  in Central Europe
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Gravida cum socis natoque penatibus et magnis
                                dis parturient montes nascetur ridic...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Backpacking Indonesia: Adventure, friendly locals and, of course, white beaches"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/09/travel-post-backpacking-indonesia-adventure-friendly-locals-white-beaches-0900e378.webp 340w, /joomla/templates/yootheme/cache/b0/travel-post-backpacking-indonesia-adventure-friendly-locals-white-beaches-b02d436c.webp 679w, /joomla/templates/yootheme/cache/01/travel-post-backpacking-indonesia-adventure-friendly-locals-white-beaches-015e75ea.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/83/travel-post-backpacking-indonesia-adventure-friendly-locals-white-beaches-8345c5b8.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Bali on a budget
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Backpacking Indonesia: Adventure, friendly
                                  locals and, of course, white beaches
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor inc...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Between canals and dams – Out and about in Amsterdam"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/c0/travel-post-between-canals-and-dams-out-and-about-in-amsterdam-c0097ab7.webp 340w, /joomla/templates/yootheme/cache/95/travel-post-between-canals-and-dams-out-and-about-in-amsterdam-9589dccd.webp 679w, /joomla/templates/yootheme/cache/24/travel-post-between-canals-and-dams-out-and-about-in-amsterdam-24faea4b.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/2f/travel-post-between-canals-and-dams-out-and-about-in-amsterdam-2ffc62c9.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Amsterdam city trip
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Between canals and dams – Out and about in
                                  Amsterdam
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Cursus sit amet dictum sit amet justo donec enim
                                diam vulputate ut pharetra sit am...
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <a
                                href="/sezioni/politica"
                                aria-label="Consequences of the rising heat for desert life"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="/joomla/templates/yootheme/cache/d6/travel-post-consequences-of-rising-heat-for-desert-life-d6fe5d6c.webp 340w, /joomla/templates/yootheme/cache/ad/travel-post-consequences-of-rising-heat-for-desert-life-adc794eb.webp 679w, /joomla/templates/yootheme/cache/1c/travel-post-consequences-of-rising-heat-for-desert-life-1cb4a26d.webp 680w"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="/joomla/templates/yootheme/cache/0e/travel-post-consequences-of-rising-heat-for-desert-life-0eac6b02.jpeg"
                                    width={340}
                                    height={213}
                                    className="el-image"
                                    alt=""
                                  />
                                </picture>
                              </a>
                              <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                                Climate change
                              </div>
                              <div className="el-title uk-h4 uk-margin-small-top uk-margin-remove-bottom">
                                {" "}
                                <a
                                  href="/sezioni/politica"
                                  
                                >
                                  Consequences of the rising heat for desert
                                  life
                                </a>{" "}
                              </div>
                              <div className="el-content uk-panel uk-margin-small-top">
                                Adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo nulla facilisi n...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-118">
                <a href="/sezioni/politica"> Archive</a>
              </li>
            </ul>
            <a
              uk-toggle=""
              aria-label="Open Menu"
              href="/sezioni/politica"
              className="uk-navbar-toggle"
              aria-expanded="false"
            >
              <div
                uk-navbar-toggle-icon=""
                className="uk-icon uk-navbar-toggle-icon"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".uk-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity,;transform-origin:center;opacity:1}.uk-navbar-toggle svg>.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}"
                    }}
                  />
                  <rect className="line-1" y={3} width={20} height={2} />
                  <rect className="line-2" y={9} width={20} height={2} />
                  <rect className="line-3" y={9} width={20} height={2} />
                  <rect className="line-4" y={15} width={20} height={2} />
                </svg>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div
    className="uk-sticky-placeholder"
    hidden=""
    style={{ height: 63, width: 1415, margin: 0 }}
  />
  <div
    id="tm-dialog"
    uk-offcanvas="container: true"
    mode="slide"
    flip=""
    overlay=""
    className="uk-offcanvas"
  >
    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
      <button
        className="uk-offcanvas-close uk-close-large uk-icon uk-close"
        type="button"
        uk-close=""
        uk-toggle="cls: uk-close-large; mode: media; media: @s"
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.4"
            x1={1}
            y1={1}
            x2={19}
            y2={19}
          />
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.4"
            x1={19}
            y1={1}
            x2={1}
            y2={19}
          />
        </svg>
      </button>
      <div className="uk-margin-auto-bottom">
        <div className="uk-grid uk-child-width-1-1 uk-grid-stack" uk-grid="">
          {" "}
          <div>
            <div className="uk-panel" id="module-tm-3">
              <form
                id="search-tm-3"
                action="/joomla/themes/paladin/"
                method="post"
                role="search"
                className="uk-search uk-search-default uk-width-1-1"
              >
                <span uk-search-icon="" className="uk-icon uk-search-icon">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      cx={9}
                      cy={9}
                      r={7}
                    />
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      d="M14,14 L18,18 L14,14 Z"
                    />
                  </svg>
                </span>
                <input
                  name="searchword"
                  placeholder="Search"
                  minLength={3}
                  aria-label="Search"
                  type="search"
                  className="uk-search-input"
                />
                <input type="hidden" name="task" defaultValue="search" />
                <input type="hidden" name="option" defaultValue="com_search" />
                <input type="hidden" name="Itemid" defaultValue={101} />
              </form>
            </div>
          </div>{" "}
          <div>
            <div className="uk-panel" id="module-menu-dialog">
              <ul
                className="uk-nav uk-nav-default uk-nav-divider uk-nav-accordion"
                uk-nav="targets: > .js-accordion"
              >
                <li className="item-170 uk-active">
                  <a href="/sezioni/politica"> Home</a>
                </li>
                <li className="item-171 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Politics{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-260">
                      <a href="/sezioni/politica"> Politics</a>
                    </li>
                    <li className="item-172">
                      <a href="/sezioni/politica">
                        {" "}
                        Environment
                      </a>
                    </li>
                    <li className="item-173">
                      <a href="/sezioni/politica">
                        {" "}
                        Health
                      </a>
                    </li>
                    <li className="item-174">
                      <a href="/sezioni/politica">
                        {" "}
                        Education
                      </a>
                    </li>
                    <li className="item-175">
                      <a href="/sezioni/politica">
                        {" "}
                        Economy
                      </a>
                    </li>
                    <li className="item-176">
                      <a href="/sezioni/politica">
                        {" "}
                        United States
                      </a>
                    </li>
                    <li className="item-177">
                      <a href="/sezioni/politica"> World</a>
                    </li>
                    <li className="item-178">
                      <a href="/sezioni/politica">
                        {" "}
                        Brexit
                      </a>
                    </li>
                    <li className="item-179">
                      <a href="/sezioni/politica">
                        {" "}
                        State &amp; Justice
                      </a>
                    </li>
                    <li className="item-180">
                      <a href="/sezioni/politica">
                        {" "}
                        Elections
                      </a>
                    </li>
                    <li className="item-274">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-181 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Sports{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-261">
                      <a href="/sezioni/politica"> Sports</a>
                    </li>
                    <li className="item-182">
                      <a href="/sezioni/politica">
                        {" "}
                        Martial Arts
                      </a>
                    </li>
                    <li className="item-183">
                      <a href="/sezioni/politica">
                        {" "}
                        Motorsports
                      </a>
                    </li>
                    <li className="item-184">
                      <a href="/sezioni/politica">
                        {" "}
                        Baseball
                      </a>
                    </li>
                    <li className="item-185">
                      <a href="/sezioni/politica">
                        {" "}
                        Football
                      </a>
                    </li>
                    <li className="item-186">
                      <a href="/sezioni/politica">
                        {" "}
                        Athletics
                      </a>
                    </li>
                    <li className="item-187">
                      <a href="/sezioni/politica"> Soccer</a>
                    </li>
                    <li className="item-188">
                      <a href="/sezioni/politica">
                        {" "}
                        Basketball
                      </a>
                    </li>
                    <li className="item-189">
                      <a href="/sezioni/politica">
                        {" "}
                        Winter Sports
                      </a>
                    </li>
                    <li className="item-275">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-190 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Technology{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-262">
                      <a href="/sezioni/politica">
                        {" "}
                        Technology
                      </a>
                    </li>
                    <li className="item-191">
                      <a href="/sezioni/politica">
                        {" "}
                        Multimedia
                      </a>
                    </li>
                    <li className="item-192">
                      <a href="/sezioni/politica">
                        {" "}
                        Transportation
                      </a>
                    </li>
                    <li className="item-193">
                      <a href="/sezioni/politica">
                        {" "}
                        Electronics
                      </a>
                    </li>
                    <li className="item-195">
                      <a href="/sezioni/politica">
                        {" "}
                        Innovation
                      </a>
                    </li>
                    <li className="item-196">
                      <a href="/sezioni/politica">
                        {" "}
                        Reviews
                      </a>
                    </li>
                    <li className="item-197">
                      <a href="/sezioni/politica">
                        {" "}
                        Security
                      </a>
                    </li>
                    <li className="item-198">
                      <a href="/sezioni/politica">
                        {" "}
                        Gaming
                      </a>
                    </li>
                    <li className="item-276">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-194 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Science{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-263">
                      <a href="/sezioni/politica"> Science</a>
                    </li>
                    <li className="item-199">
                      <a href="/sezioni/politica">
                        {" "}
                        Space &amp; Cosmos
                      </a>
                    </li>
                    <li className="item-200">
                      <a href="/sezioni/politica">
                        {" "}
                        Animal World
                      </a>
                    </li>
                    <li className="item-201">
                      <a href="/sezioni/politica">
                        {" "}
                        Our Climate
                      </a>
                    </li>
                    <li className="item-202">
                      <a href="/sezioni/politica">
                        {" "}
                        Human &amp; Health
                      </a>
                    </li>
                    <li className="item-203">
                      <a href="/sezioni/politica">
                        {" "}
                        Physics &amp; Tech
                      </a>
                    </li>
                    <li className="item-204">
                      <a href="/sezioni/politica">
                        {" "}
                        Environment
                      </a>
                    </li>
                    <li className="item-205">
                      <a href="/sezioni/politica">
                        {" "}
                        Humanities
                      </a>
                    </li>
                    <li className="item-277">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-206 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Entertainment{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-264">
                      <a href="/sezioni/politica">
                        {" "}
                        Entertainment
                      </a>
                    </li>
                    <li className="item-207">
                      <a href="/sezioni/politica">
                        {" "}
                        Movies
                      </a>
                    </li>
                    <li className="item-208">
                      <a href="/sezioni/politica">
                        {" "}
                        TV Shows
                      </a>
                    </li>
                    <li className="item-209">
                      <a href="/sezioni/politica">
                        {" "}
                        Podcasts
                      </a>
                    </li>
                    <li className="item-210">
                      <a href="/sezioni/politica">
                        {" "}
                        Festivals
                      </a>
                    </li>
                    <li className="item-211">
                      <a href="/sezioni/politica">
                        {" "}
                        Art &amp; Culture
                      </a>
                    </li>
                    <li className="item-212">
                      <a href="/sezioni/politica">
                        {" "}
                        Music
                      </a>
                    </li>
                    <li className="item-213">
                      <a href="/sezioni/politica">
                        {" "}
                        Celebrities
                      </a>
                    </li>
                    <li className="item-214">
                      <a href="/sezioni/politica">
                        {" "}
                        Books
                      </a>
                    </li>
                    <li className="item-278">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-215 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Business{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-232">
                      <a href="/sezioni/politica">
                        {" "}
                        Economy
                      </a>
                    </li>
                    <li className="item-233">
                      <a href="/sezioni/politica">
                        {" "}
                        Markets
                      </a>
                    </li>
                    <li className="item-234">
                      <a href="/sezioni/politica">
                        {" "}
                        Companies
                      </a>
                    </li>
                    <li className="item-235">
                      <a href="/sezioni/politica">
                        {" "}
                        Real Estate
                      </a>
                    </li>
                    <li className="item-236">
                      <a href="/sezioni/politica">
                        {" "}
                        Banks &amp; Finance
                      </a>
                    </li>
                    <li className="item-237">
                      <a href="/sezioni/politica">
                        {" "}
                        Energy
                      </a>
                    </li>
                    <li className="item-238">
                      <a href="/sezioni/politica">
                        {" "}
                        Consumer &amp; Service
                      </a>
                    </li>
                    <li className="item-279">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-223 js-accordion uk-parent">
                  <a href="">
                    {" "}
                    Travel{" "}
                    <span
                      uk-nav-parent-icon=""
                      className="uk-icon uk-nav-parent-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="uk-nav-sub" hidden="">
                    <li className="item-239">
                      <a href="/sezioni/politica">
                        {" "}
                        Destinations
                      </a>
                    </li>
                    <li className="item-240">
                      <a href="/sezioni/politica">
                        {" "}
                        Travel Report
                      </a>
                    </li>
                    <li className="item-241">
                      <a href="/sezioni/politica">
                        {" "}
                        City Guide
                      </a>
                    </li>
                    <li className="item-242">
                      <a href="/sezioni/politica">
                        {" "}
                        Sustainability
                      </a>
                    </li>
                    <li className="item-243">
                      <a href="/sezioni/politica">
                        {" "}
                        Travel Advice
                      </a>
                    </li>
                    <li className="item-244">
                      <a href="/sezioni/politica">
                        {" "}
                        Weather
                      </a>
                    </li>
                    <li className="item-245">
                      <a href="/sezioni/politica">
                        {" "}
                        Route Planner
                      </a>
                    </li>
                    <li className="item-280">
                      <a href="/sezioni/politica">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-231">
                  <a href="/sezioni/politica"> Archive</a>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div>
            <div className="uk-panel" id="module-105">
              <div
                className="tm-grid-expand uk-grid-small uk-margin-large uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-2">
                  <div className="uk-margin-large">
                    <a
                      className="el-content uk-width-1-1 uk-button uk-button-default"
                      href="/sezioni/politica"
                      uk-scroll=""
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
                <div className="uk-width-1-2">
                  <div className="uk-margin-large">
                    <a
                      className="el-content uk-width-1-1 uk-button uk-button-default"
                      href="/sezioni/politica"
                      uk-scroll=""
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-1">
                  <div
                    className="uk-margin"
                    uk-scrollspy="target: [uk-scrollspy-class];"
                  >
                    <a className="el-link" href="/sezioni/politica">
                      <img
                        src="https://gardatoday.it/assets/images/logo_vertical.svg"
                        width={140}
                        height={23}
                        className="el-image uk-text-emphasis"
                        alt=""
                        uk-svg=""
                        hidden=""
                      />
                    </a>
                  </div>
                  <div>
                    <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                      {" "}
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/politica" uk-scroll="">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/politica" uk-scroll="">
                          Privacy
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/politica" uk-scroll="">
                          Imprint
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/politica" uk-scroll="">
                          Sitemap
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="uk-h4"> Follow Us </div>
                  <div>
                    <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                      {" "}
                      <li className="el-item ">
                        <a
                          className="el-link"
                          href="/sezioni/politica"
                        >
                          <span
                            className="el-image uk-margin-small-right uk-icon"
                            uk-icon="icon: facebook;"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z" />
                            </svg>
                          </span>
                          Facebook
                        </a>
                      </li>
                      <li className="el-item ">
                        <a
                          className="el-link"
                          href="/sezioni/politica"
                        >
                          <span
                            className="el-image uk-margin-small-right uk-icon"
                            uk-icon="icon: twitter;"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74" />
                            </svg>
                          </span>
                          Twitter
                        </a>
                      </li>
                      <li className="el-item ">
                        <a
                          className="el-link"
                          href="/sezioni/politica"
                        >
                          <span
                            className="el-image uk-margin-small-right uk-icon"
                            uk-icon="icon: youtube;"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z" />
                            </svg>
                          </span>
                          Youtube
                        </a>
                      </li>
                      <li className="el-item ">
                        <a
                          className="el-link"
                          href="/sezioni/politica"
                        >
                          <span
                            className="el-image uk-margin-small-right uk-icon"
                            uk-icon="icon: instagram;"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z" />
                              <circle cx="14.87" cy="5.26" r="1.09" />
                              <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z" />
                            </svg>
                          </span>
                          Instagram
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/politica">
                          <span
                            className="el-image uk-margin-small-right uk-icon"
                            uk-icon="icon: reddit;"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z" />
                              <path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z" />
                              <path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z" />
                              <path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z" />
                            </svg>
                          </span>
                          Reddit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <div
    className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
    uk-grid=""
  >
    <div className="uk-width-1-1 uk-first-column">
      <div className="uk-alert uk-alert-primary uk-text-center">
        <a
          className="el-link uk-link-reset"
          href="/joomla/themes/paladin/business/markets/52-experts-predict-the-markets-won-t-be-out-of-recession-before-next-year"
        >
          <h2 className="el-title uk-h3 uk-display-inline uk-text-middle">
            Breaking News —
          </h2>
          <div className="el-content uk-panel uk-display-inline uk-text-middle">
            Experts predict the markets won’t be out of recession before next year
          </div>
        </a>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default Nav;
