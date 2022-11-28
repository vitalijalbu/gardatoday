import React, { useState } from "react";
import Link from "next/link";


const SectionBlog = () => {
  const [expanded, setExpanded] = useState(true);

  return(
<section className="uk-section uk-section-small">
  <div className="uk-container">
    <h2 className="uk-text-center">Blog</h2>
    <div
      className="uk-grid-medium uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-grid"
      uk-grid=""
    >
      <div className="uk-first-column">
        <a href="/blog/demo">
          <article className="uk-card uk-card-default uk-card-small uk-article uk-overflow-hidden uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container">
            <div className="tm-ratio tm-ratio-16-9">
              <figure className="tm-media-box uk-cover-container uk-margin-remove">
                <img
                  src="https://via.placeholder.com/800x533"
                  alt="Everything You Need to Know About the MacBook Pro"
                  uk-cover="uk-cover"
                  className="uk-cover"
                  style={{ height: 345, width: 518 }}
                />
              </figure>
            </div>
            <div className="uk-card-body">
              <div className="uk-article-body">
                <div className="uk-article-meta uk-margin-xsmall-bottom">
                  <time>May 21, 2018</time>
                </div>
                <div>
                  <h3 className="uk-margin-remove">
                    Everything You Need to Know About the MacBook Pro
                  </h3>
                </div>
                <div className="uk-margin-small-top">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin sodales eget ipsum id aliquam. Nam consectetur
                    interdum nibh eget sodales. Cras volutpat efficitur ornare.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      </div>
      <div>
        <a href="/blog/demo">
          <article className="uk-card uk-card-default uk-card-small uk-article uk-overflow-hidden uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container">
            <div className="tm-ratio tm-ratio-16-9">
              <figure className="tm-media-box uk-cover-container uk-margin-remove">
                <img
                  src="https://via.placeholder.com/800x533"
                  alt="Apple introduces macOS Mojave"
                  uk-cover="uk-cover"
                  className="uk-cover"
                  style={{ width: 600, height: 292 }}
                />
              </figure>
            </div>
            <div className="uk-card-body">
              <div className="uk-article-body">
                <div className="uk-article-meta uk-margin-xsmall-bottom">
                  <time>May 21, 2018</time>
                </div>
                <div>
                  <h3 className="uk-margin-remove">
                    Apple introduces macOS Mojave
                  </h3>
                </div>
                <div className="uk-margin-small-top">
                  <p>
                    Praesent consequat justo eu massa malesuada posuere. Donec
                    ultricies tincidunt nisl, sed euismod nulla venenatis
                    maximus. Maecenas sit amet semper tellus. Pellentesque
                    imperdiet finibus sapien, a consectetur eros auctor a.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
    <div className="uk-margin uk-text-center">
      <a
        className="uk-link-muted uk-text-uppercase tm-link-to-all"
        href="/blog"
      >
        <span>vai al blog</span>
        <span
          uk-icon="icon: chevron-right; ratio: .75;"
          className="uk-icon"
        ></span>
      </a>
    </div>
  </div>
</section>
);
}
export default SectionBlog;