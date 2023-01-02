import React, { useState } from "react";
import Link from "next/link";


const Videos = () => {
  const [expanded, setExpanded] = useState(true);

  return(
<div className="uk-section-secondary uk-section">
  <div className="uk-container uk-container-xlarge">
    <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
      <div className="uk-width-1-2@s uk-width-2-5@l uk-first-column">
        <div className="uk-divider-small" />
        <h2 className="uk-h6 uk-margin-small"> Video </h2>
        <h3 className="uk-heading-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/entertainment/tv-shows/237-first-sneak-peek-for-the-next-season-of-hometown-released-watch-it-here"
          >
            First sneak peek for the next season of Hometown released – Watch it
            here
          </a>{" "}
        </h3>
        <div className="uk-panel uk-margin-medium uk-width-large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div className="uk-margin">
          <a
            className="el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle"
            href="/joomla/themes/paladin/entertainment/tv-shows/237-first-sneak-peek-for-the-next-season-of-hometown-released-watch-it-here"
          >
            <span className="uk-margin-small-right uk-icon" uk-icon="play">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="none"
                  stroke="#000"
                  points="6.5,5 14.5,10 6.5,15"
                />
              </svg>
            </span>
            Play Video
          </a>
        </div>
      </div>
      <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@s uk-width-3-5@l">
        <div className="uk-panel uk-width-1-1">
          <div className="uk-light uk-margin uk-text-center">
            {" "}
            <a
              className="el-container uk-inline-clip uk-link-toggle"
              href="/joomla/themes/paladin/entertainment/tv-shows/237-first-sneak-peek-for-the-next-season-of-hometown-released-watch-it-here"
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://via.placeholder.com/800x533"
                  sizes="(min-width: 950px) 950px"
                />
                <img
                  src="https://via.placeholder.com/800x533"
                  width={950}
                  height={534}
                  alt=""
                  loading="lazy"
                  className="el-image uk-transition-opaque"
                />
              </picture>
              <div className="uk-overlay-primary el-overlay uk-position-cover" />
              <div className="uk-position-bottom-left">
                <div className="uk-overlay uk-padding-small uk-margin-remove-first-child">
                  <div className="el-meta uk-text-meta uk-text-primary uk-margin-top">
                    <img
                      className="uk-margin-small-right"
                      src="https://via.placeholder.com/800x533"
                      loading="lazy"
                    />
                    1:20
                  </div>
                </div>
              </div>
            </a>
          </div>
          <hr className="uk-hidden@s uk-margin-medium" />
        </div>
      </div>
    </div>
    <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
      <div className="uk-width-1-2@s uk-width-1-5@l uk-first-column">
        <div className="uk-light uk-margin">
          {" "}
          <a
            className="el-container uk-inline-clip uk-link-toggle"
            href="/joomla/themes/paladin/entertainment/movies/238-top-movies-that-are-available-for-streaming-now"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 610px) 610px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={610}
                height={343}
                alt=""
                loading="lazy"
                className="el-image uk-transition-opaque"
              />
            </picture>
            <div className="uk-overlay-primary el-overlay uk-position-cover" />
            <div className="uk-position-bottom-left">
              <div className="uk-overlay uk-padding-small uk-margin-remove-first-child">
                <div className="el-meta uk-text-meta uk-text-primary uk-margin-top">
                  <img
                    className="uk-margin-small-right"
                    src="https://via.placeholder.com/800x533"
                    loading="lazy"
                  />
                  5:34
                </div>
              </div>
            </div>
          </a>
        </div>
        <h3 className="uk-margin-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/entertainment/movies/238-top-movies-that-are-available-for-streaming-now"
          >
            Top movies that are available for streaming now
          </a>{" "}
        </h3>
      </div>
      <div className="uk-width-1-2@s uk-width-1-5@l">
        <div className="uk-light uk-margin uk-text-center">
          {" "}
          <a
            className="el-container uk-inline-clip uk-link-toggle"
            href="/joomla/themes/paladin/entertainment/tv-shows/239-the-sons-and-daughters-of-sons-of-anarchy"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 610px) 610px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={610}
                height={343}
                alt=""
                loading="lazy"
                className="el-image uk-transition-opaque"
              />
            </picture>
            <div className="uk-overlay-primary el-overlay uk-position-cover" />
            <div className="uk-position-bottom-left">
              <div className="uk-overlay uk-padding-small uk-margin-remove-first-child">
                <div className="el-meta uk-text-meta uk-text-primary uk-margin-top">
                  <img
                    className="uk-margin-small-right"
                    src="https://via.placeholder.com/800x533"
                    loading="lazy"
                  />
                  3:14
                </div>
              </div>
            </div>
          </a>
        </div>
        <h3 className="uk-margin-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/entertainment/tv-shows/239-the-sons-and-daughters-of-sons-of-anarchy"
          >
            The sons (and daughters) of ‘Sons of Anarchy’
          </a>{" "}
        </h3>
      </div>
      <div className="uk-width-1-3@s uk-width-1-5@l">
        <div className="uk-light uk-margin uk-text-center">
          {" "}
          <a
            className="el-container uk-inline-clip uk-link-toggle"
            href="/joomla/themes/paladin/entertainment/movies/240-faith-review-an-immersive-drama-about-a-young-women-trying-to-find-her-way"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 610px) 610px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={610}
                height={343}
                alt=""
                loading="lazy"
                className="el-image uk-transition-opaque"
              />
            </picture>
            <div className="uk-overlay-primary el-overlay uk-position-cover" />
            <div className="uk-position-bottom-left">
              <div className="uk-overlay uk-padding-small uk-margin-remove-first-child">
                <div className="el-meta uk-text-meta uk-text-primary uk-margin-top">
                  <img
                    className="uk-margin-small-right"
                    src="https://via.placeholder.com/800x533"
                    loading="lazy"
                  />
                  4:22
                </div>
              </div>
            </div>
          </a>
        </div>
        <h3 className="uk-margin-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/entertainment/movies/240-faith-review-an-immersive-drama-about-a-young-women-trying-to-find-her-way"
          >
            ‘Faith’ review: An immersive drama about a young women trying to
            find her way
          </a>{" "}
        </h3>
      </div>
      <div className="uk-width-1-3@s uk-width-1-5@l">
        <div className="uk-light uk-margin uk-text-center">
          {" "}
          <a
            className="el-container uk-inline-clip uk-link-toggle"
            href="/joomla/themes/paladin/entertainment/music/241-the-reckoning-nominated-as-best-hip-hop-act"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 610px) 610px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={610}
                height={343}
                alt=""
                loading="lazy"
                className="el-image uk-transition-opaque"
              />
            </picture>
            <div className="uk-overlay-primary el-overlay uk-position-cover" />
            <div className="uk-position-bottom-left">
              <div className="uk-overlay uk-padding-small uk-margin-remove-first-child">
                <div className="el-meta uk-text-meta uk-text-primary uk-margin-top">
                  <img
                    className="uk-margin-small-right"
                    src="https://via.placeholder.com/800x533"
                    loading="lazy"
                  />
                  0:44
                </div>
              </div>
            </div>
          </a>
        </div>
        <h3 className="uk-margin-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/entertainment/music/241-the-reckoning-nominated-as-best-hip-hop-act"
          >
            The Reckoning nominated as best hip hop act
          </a>{" "}
        </h3>
      </div>
      <div className="uk-width-1-3@s uk-width-1-5@l">
        <div className="uk-light uk-margin uk-text-center">
          {" "}
          <a
            className="el-container uk-inline-clip uk-link-toggle"
            href="/joomla/themes/paladin/entertainment/festivals/242-documentary-film-festival-to-be-postponed"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 610px) 610px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={610}
                height={343}
                alt=""
                loading="lazy"
                className="el-image uk-transition-opaque"
              />
            </picture>
            <div className="uk-overlay-primary el-overlay uk-position-cover" />
            <div className="uk-position-bottom-left">
              <div className="uk-overlay uk-padding-small uk-margin-remove-first-child">
                <div className="el-meta uk-text-meta uk-text-primary uk-margin-top">
                  <img
                    className="uk-margin-small-right"
                    src="https://via.placeholder.com/800x533"
                    loading="lazy"
                  />
                  1:59
                </div>
              </div>
            </div>
          </a>
        </div>
        <h3 className="uk-margin-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/entertainment/festivals/242-documentary-film-festival-to-be-postponed"
          >
            Documentary Film Festival to be postponed
          </a>{" "}
        </h3>
      </div>
    </div>
  </div>
</div>
);
}
export default Videos;