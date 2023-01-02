import React, { useState } from "react";
import Link from "next/link";


const Stories = () => {
  const [expanded, setExpanded] = useState(true);

  return(<div className="uk-section-default uk-section uk-padding-remove-bottom">
  <div className="uk-container uk-container-xlarge">
    <div
      className="tm-grid-expand uk-grid-column-small uk-grid-divider uk-grid-margin uk-grid"
      uk-grid=""
    >
      <div className="uk-width-1-5@m uk-first-column">
        <div className="uk-divider-small uk-margin-large uk-margin-remove-bottom" />
        <h2 className="uk-h6 uk-margin"> Featured Topics </h2>
      </div>
      <div className="uk-width-4-5@m" id="page#1">
        <div
          uk-slider=""
          className="uk-margin uk-text-center uk-slider uk-slider-container"
        >
          <div className="uk-position-relative uk-visible-toggle" tabIndex={-1}>
            <ul
              className="uk-slider-items uk-grid"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l uk-active"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/movies"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        loading="lazy"
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Movies{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l uk-active"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/tv-shows"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          TV Shows{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l uk-active"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/podcasts"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Podcasts{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l uk-active"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/festivals"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Festivals{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/art-culture"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Art &amp; Culture{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/music"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Music{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/celebrities"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Celebrities{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
              <li
                className="el-item uk-width-3-5 uk-width-1-3@s uk-width-1-4@l"
                tabIndex={-1}
              >
                <div className="uk-light">
                  <a
                    className="uk-cover-container uk-display-block uk-link-toggle"
                    href="/joomla/themes/paladin/entertainment/books"
                    aria-label="All Articles"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800"
                        sizes="(min-width: 360px) 360px"
                      />
                      <img
                        src="https://via.placeholder.com/800"
                        width={360}
                        height={561}
                        alt=""
                        className="el-image uk-transition-opaque"
                      />
                    </picture>
                    <div className="uk-position-bottom-center">
                      <div className="uk-panel uk-padding uk-margin-remove-first-child">
                        <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
                          {" "}
                          Books{" "}
                        </h3>
                        <div className="uk-margin-small-top">
                          <div className="el-link uk-button uk-button-text">
                            All Articles
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>{" "}
            </ul>
            <div className="uk-visible@s uk-hidden-hover uk-hidden-touch uk-light">
              {" "}
              <a
                className="el-slidenav uk-position-small uk-position-center-left uk-icon uk-slidenav-previous uk-slidenav"
                href="#"
                uk-slidenav-previous=""
                uk-slider-item="previous"
                aria-label="Previous slide"
              >
                <svg
                  width={8}
                  height={11}
                  viewBox="0 0 8 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    points="6,0.5 1,5.5 6,10.5"
                  />
                </svg>
              </a>{" "}
              <a
                className="el-slidenav uk-position-small uk-position-center-right uk-icon uk-slidenav-next uk-slidenav"
                href="#"
                uk-slidenav-next=""
                uk-slider-item="next"
                aria-label="Next slide"
              >
                <svg
                  width={8}
                  height={11}
                  viewBox="0 0 8 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    points="2,10.5 7,5.5 2,0.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);
}
export default Stories;