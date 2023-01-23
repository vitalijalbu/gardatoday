import React, { useRef } from "react";
import Link from "next/link";
;

const Header = () => {
  const ref = React.useRef();

  return (
    <div id="site-header">
<div className="tm-header uk-visible@l tm-header-overlay" uk-header="">
  <div className="tm-headerbar tm-headerbar-top uk-dark">
    <div className="uk-container uk-container-xlarge">
      <div className="uk-position-relative uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-position-center-left tm-position-z-index-high">
          <div
            className="uk-grid-medium uk-child-width-auto uk-flex-middle uk-grid"
            uk-grid=""
          >
            <div className="uk-first-column">
              <div className="uk-panel" id="module-106">
                <a
                  className="uk-search-toggle uk-display-block uk-icon uk-search-icon"
                  href="/sezioni/demo"
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
                          autofocus=""
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
            src="https://gardatoday.it/assets/images/logo.svg"
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
                      <Link
                        className="el-content uk-button uk-button-default"
                        href="/sezioni/demo"
                        uk-scroll=""
                      >
                        Accedi
                      </Link>
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
    data-uk-sticky=""
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
                <a href="#" className="uk-preserve-width">
                 Menu
                </a>
              </li>
              <li className="item-108 uk-parent">
                <a
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Environment
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Health
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Education
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Economy
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              United States
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              World
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Brexit
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              State &amp; Justice
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Elections
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="The voter turnout shows the importance of this year’s election"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Opposing camps clashed in heated dispute during today’s rally"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="The current crisis reveals the staggering problems in our national healthcare system"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="What we have learned 30 years after the fall of the Berlin Wall"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Martial Arts
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Motorsports
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Baseball
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Football
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Athletics
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Soccer
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Basketball
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Winter Sports
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="Nicola Aebi is poised to set a new world record again"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Max Meyer: “I feel better prepared than ever”"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Western Europe Road Tour reaching the last stage today"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Impressive duel concluded the fencing championship"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Multimedia
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Transportation
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Electronics
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Innovation
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Reviews
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Security
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Gaming
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="Presenting the most prominent features of the new mobile OS"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="The new tablet manages to inspire with unique features"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="The 16-inch MacBook Pro considerably improves performance"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="What can we expect from the updated Home Smart Speaker"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Space &amp; Cosmos
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Animal World
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Our Climate
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Human &amp; Health
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Physics &amp; Tech
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Environment
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Humanities
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="More than 2218 satellites orbit our planet, each with its own purpose"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Exploring hidden marine species with Steve Vernon"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="The next ISS crew is planned to launch this weekend"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Some coral reefs seem to be recovering miraculously, marine biologists find"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Movies
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              TV Shows
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Podcasts
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Festivals
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Art &amp; Culture
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Music
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Celebrities
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Books
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="In Zack Schreiber’s new comedy a Dad goes through the motions"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Looking Glass was picked up for two more seasons"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Allie Holiday confirms: New album coming soon"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Podcast: Relationships in times of crisis"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Economy
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Markets
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Companies
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Real Estate
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Banks &amp; Finance
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Energy
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Consumer &amp; Service
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="Experts predict the markets won’t be out of recession before next year"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Is this the best or the worst time to invest in real estate?"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="More concerns about possible deflation are rising"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="After deep plunge stocks are starting to recover"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                  href="/sezioni/demo"
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
                              href="/sezioni/demo"
                            >
                              Destinations
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Travel Report
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              City Guide
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Sustainability
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Travel Advice
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Weather
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
                            >
                              Route Planner
                            </a>
                          </li>
                          <li className="el-item ">
                            <a
                              className="el-link"
                              href="/sezioni/demo"
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
                                href="/sezioni/demo"
                                aria-label="Visiting some of the most popular destinations in Central Europe"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Backpacking Indonesia: Adventure, friendly locals and, of course, white beaches"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Between canals and dams – Out and about in Amsterdam"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                                href="/sezioni/demo"
                                aria-label="Consequences of the rising heat for desert life"
                              >
                                <picture>
                                  <source
                                    type="image/webp"
                                    srcSet="https://via.placeholder.com/800x533"
                                    sizes="(min-width: 340px) 340px"
                                  />
                                  <img
                                    src="https://via.placeholder.com/800x533"
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
                                  href="/sezioni/demo"
                                  className="uk-link-heading"
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
                <a href="/sezioni/demo"> Archive</a>
              </li>
            </ul>
            <a
              uk-toggle=""
              aria-label="Open Menu"
              href="/sezioni/demo"
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
                  <a href="/sezioni/demo"> Home</a>
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
                      <a href="/sezioni/demo"> Politics</a>
                    </li>
                    <li className="item-172">
                      <a href="/sezioni/demo">
                        {" "}
                        Environment
                      </a>
                    </li>
                    <li className="item-173">
                      <a href="/sezioni/demo">
                        {" "}
                        Health
                      </a>
                    </li>
                    <li className="item-174">
                      <a href="/sezioni/demo">
                        {" "}
                        Education
                      </a>
                    </li>
                    <li className="item-175">
                      <a href="/sezioni/demo">
                        {" "}
                        Economy
                      </a>
                    </li>
                    <li className="item-176">
                      <a href="/sezioni/demo">
                        {" "}
                        United States
                      </a>
                    </li>
                    <li className="item-177">
                      <a href="/sezioni/demo"> World</a>
                    </li>
                    <li className="item-178">
                      <a href="/sezioni/demo">
                        {" "}
                        Brexit
                      </a>
                    </li>
                    <li className="item-179">
                      <a href="/sezioni/demo">
                        {" "}
                        State &amp; Justice
                      </a>
                    </li>
                    <li className="item-180">
                      <a href="/sezioni/demo">
                        {" "}
                        Elections
                      </a>
                    </li>
                    <li className="item-274">
                      <a href="/sezioni/demo">
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
                      <a href="/sezioni/demo"> Sports</a>
                    </li>
                    <li className="item-182">
                      <a href="/sezioni/demo">
                        {" "}
                        Martial Arts
                      </a>
                    </li>
                    <li className="item-183">
                      <a href="/sezioni/demo">
                        {" "}
                        Motorsports
                      </a>
                    </li>
                    <li className="item-184">
                      <a href="/sezioni/demo">
                        {" "}
                        Baseball
                      </a>
                    </li>
                    <li className="item-185">
                      <a href="/sezioni/demo">
                        {" "}
                        Football
                      </a>
                    </li>
                    <li className="item-186">
                      <a href="/sezioni/demo">
                        {" "}
                        Athletics
                      </a>
                    </li>
                    <li className="item-187">
                      <a href="/sezioni/demo"> Soccer</a>
                    </li>
                    <li className="item-188">
                      <a href="/sezioni/demo">
                        {" "}
                        Basketball
                      </a>
                    </li>
                    <li className="item-189">
                      <a href="/sezioni/demo">
                        {" "}
                        Winter Sports
                      </a>
                    </li>
                    <li className="item-275">
                      <a href="/sezioni/demo">
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
                      <a href="/sezioni/demo">
                        {" "}
                        Technology
                      </a>
                    </li>
                    <li className="item-191">
                      <a href="/sezioni/demo">
                        {" "}
                        Multimedia
                      </a>
                    </li>
                    <li className="item-192">
                      <a href="/sezioni/demo">
                        {" "}
                        Transportation
                      </a>
                    </li>
                    <li className="item-193">
                      <a href="/sezioni/demo">
                        {" "}
                        Electronics
                      </a>
                    </li>
                    <li className="item-195">
                      <a href="/sezioni/demo">
                        {" "}
                        Innovation
                      </a>
                    </li>
                    <li className="item-196">
                      <a href="/sezioni/demo">
                        {" "}
                        Reviews
                      </a>
                    </li>
                    <li className="item-197">
                      <a href="/sezioni/demo">
                        {" "}
                        Security
                      </a>
                    </li>
                    <li className="item-198">
                      <a href="/sezioni/demo">
                        {" "}
                        Gaming
                      </a>
                    </li>
                    <li className="item-276">
                      <a href="/sezioni/demo">
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
                      <a href="/sezioni/demo"> Science</a>
                    </li>
                    <li className="item-199">
                      <a href="/sezioni/demo">
                        {" "}
                        Space &amp; Cosmos
                      </a>
                    </li>
                    <li className="item-200">
                      <a href="/sezioni/demo">
                        {" "}
                        Animal World
                      </a>
                    </li>
                    <li className="item-201">
                      <a href="/sezioni/demo">
                        {" "}
                        Our Climate
                      </a>
                    </li>
                    <li className="item-202">
                      <a href="/sezioni/demo">
                        {" "}
                        Human &amp; Health
                      </a>
                    </li>
                    <li className="item-203">
                      <a href="/sezioni/demo">
                        {" "}
                        Physics &amp; Tech
                      </a>
                    </li>
                    <li className="item-204">
                      <a href="/sezioni/demo">
                        {" "}
                        Environment
                      </a>
                    </li>
                    <li className="item-205">
                      <a href="/sezioni/demo">
                        {" "}
                        Humanities
                      </a>
                    </li>
                    <li className="item-277">
                      <a href="/sezioni/demo">
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
                      <a href="/sezioni/demo">
                        {" "}
                        Entertainment
                      </a>
                    </li>
                    <li className="item-207">
                      <a href="/sezioni/demo">
                        {" "}
                        Movies
                      </a>
                    </li>
                    <li className="item-208">
                      <a href="/sezioni/demo">
                        {" "}
                        TV Shows
                      </a>
                    </li>
                    <li className="item-209">
                      <a href="/sezioni/demo">
                        {" "}
                        Podcasts
                      </a>
                    </li>
                    <li className="item-210">
                      <a href="/sezioni/demo">
                        {" "}
                        Festivals
                      </a>
                    </li>
                    <li className="item-211">
                      <a href="/sezioni/demo">
                        {" "}
                        Art &amp; Culture
                      </a>
                    </li>
                    <li className="item-212">
                      <a href="/sezioni/demo">
                        {" "}
                        Music
                      </a>
                    </li>
                    <li className="item-213">
                      <a href="/sezioni/demo">
                        {" "}
                        Celebrities
                      </a>
                    </li>
                    <li className="item-214">
                      <a href="/sezioni/demo">
                        {" "}
                        Books
                      </a>
                    </li>
                    <li className="item-278">
                      <a href="/sezioni/demo">
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
                      <a href="/sezioni/demo">
                        {" "}
                        Economy
                      </a>
                    </li>
                    <li className="item-233">
                      <a href="/sezioni/demo">
                        {" "}
                        Markets
                      </a>
                    </li>
                    <li className="item-234">
                      <a href="/sezioni/demo">
                        {" "}
                        Companies
                      </a>
                    </li>
                    <li className="item-235">
                      <a href="/sezioni/demo">
                        {" "}
                        Real Estate
                      </a>
                    </li>
                    <li className="item-236">
                      <a href="/sezioni/demo">
                        {" "}
                        Banks &amp; Finance
                      </a>
                    </li>
                    <li className="item-237">
                      <a href="/sezioni/demo">
                        {" "}
                        Energy
                      </a>
                    </li>
                    <li className="item-238">
                      <a href="/sezioni/demo">
                        {" "}
                        Consumer &amp; Service
                      </a>
                    </li>
                    <li className="item-279">
                      <a href="/sezioni/demo">
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
                      <a href="/sezioni/demo">
                        {" "}
                        Destinations
                      </a>
                    </li>
                    <li className="item-240">
                      <a href="/sezioni/demo">
                        {" "}
                        Travel Report
                      </a>
                    </li>
                    <li className="item-241">
                      <a href="/sezioni/demo">
                        {" "}
                        City Guide
                      </a>
                    </li>
                    <li className="item-242">
                      <a href="/sezioni/demo">
                        {" "}
                        Sustainability
                      </a>
                    </li>
                    <li className="item-243">
                      <a href="/sezioni/demo">
                        {" "}
                        Travel Advice
                      </a>
                    </li>
                    <li className="item-244">
                      <a href="/sezioni/demo">
                        {" "}
                        Weather
                      </a>
                    </li>
                    <li className="item-245">
                      <a href="/sezioni/demo">
                        {" "}
                        Route Planner
                      </a>
                    </li>
                    <li className="item-280">
                      <a href="/sezioni/demo">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-231">
                  <a href="/sezioni/demo"> Archive</a>
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
                      href="/sezioni/demo"
                      uk-scroll=""
                    >
                     Accedi
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
                    <a className="el-link" href="/sezioni/demo">
                      <img
                        src="https://via.placeholder.com/800x533"
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
                        <a className="el-link" href="/sezioni/demo" uk-scroll="">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/demo" uk-scroll="">
                          Privacy
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/demo" uk-scroll="">
                          Imprint
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="/sezioni/demo" uk-scroll="">
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
                          href="/sezioni/demo"
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
                          href="/sezioni/demo"
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
                          href="/sezioni/demo"
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
                          href="/sezioni/demo"
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
                        <a className="el-link" href="/sezioni/demo">
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
  
  );
};

export default Header;
