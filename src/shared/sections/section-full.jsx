import React, { useState } from "react";
import Link from "next/link";


const SectionFull = () => {
  const [expanded, setExpanded] = useState(true);

  return(
<div className="uk-section-default uk-section uk-padding-remove-bottom">
  <div className="uk-container uk-container-xlarge">
    <div
      className="uk-margin-remove-bottom tm-grid-expand uk-child-width-1-1 uk-margin-large uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-width-1-1@m uk-first-column">
        <hr />
        <h2 className="uk-h6 uk-margin-small">
          {" "}
          <a
            className="el-link uk-link-heading"
            href="/joomla/themes/paladin/technology"
          >
            Technology
          </a>{" "}
        </h2>
      </div>
    </div>
    <div
      className="tm-grid-expand uk-grid-column-small uk-grid-divider uk-grid-margin uk-grid"
      uk-grid=""
    >
      <div className="uk-grid-item-match uk-width-1-2@m uk-width-3-5@l uk-first-column">
        <div className="uk-flex">
          <div
            data-src="https://via.placeholder.com/800x533"
            data-sources='[{"type":"image\/webp","srcset":"\/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbNzY4LDQ4MCw3NjgsNDgwXV0sWyJkb0Nyb3AiLFs3NjgsNDgwLDAsMF1dXSwxNjY5NzM1NjkzXQ%3D%3D&file=0d%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-0d1418a1.webp&hash=84b43ae7 768w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbOTUwLDU5NCw5NTAsNTk0XV1dLDE2Njk3MzU2OTNd&file=ed%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-ed262ace.webp&hash=cd3e60d7 950w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTAyNCw2NDAsMTAyNCw2NDBdXSxbImRvQ3JvcCIsWzEwMjQsNjQwLDAsMF1dXSwxNjY5NzM1NjkzXQ%3D%3D&file=df%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-dfc74423.webp&hash=e9798e7d 1024w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTM2Niw4NTQsMTM2Niw4NTRdXSxbImRvQ3JvcCIsWzEzNjYsODU0LDAsMF1dXSwxNjY5NzM1NjkzXQ%3D%3D&file=7b%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-7b1de13c.webp&hash=3af9b3cf 1366w, \/joomla\/templates\/yootheme\/cache\/fd\/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-fd4a2022.webp 1600w, \/joomla\/templates\/yootheme\/cache\/b5\/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-b5f8be73.webp 1899w, \/joomla\/templates\/yootheme\/cache\/0f\/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-0f929b41.webp 1900w","sizes":"(max-aspect-ratio: 950\/594) 160vh"}]'
            uk-img=""
            className="uk-background-norepeat uk-background-cover uk-background-bottom-right uk-background-image@xl uk-tile uk-width-1-1 uk-padding-remove"
            style={{
              backgroundImage:
                'url("https://demo.yootheme.com/joomla/templates/yootheme/cache/b5/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-b5f8be73.webp")'
            }}
          >
            <h3 className="uk-heading-small uk-width-large@xl">
              {" "}
              <a
                className="el-link uk-link-heading"
                href="/joomla/themes/paladin/technology/electronics/51-presenting-the-most-prominent-features-of-the-new-mobile-os"
              >
                Presenting the most prominent features of the new mobile OS
              </a>{" "}
            </h3>
            <div className="uk-panel uk-margin-medium uk-width-large@xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Sea te hinc legimus omnesque, per et dicat
              scaevola.
            </div>
            <div className="uk-panel uk-margin-remove-first-child uk-margin-large">
              <div
                className="uk-child-width-expand uk-grid-column-small uk-flex-middle uk-grid"
                uk-grid=""
              >
                {" "}
                <div className="uk-width-auto@m uk-first-column">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://via.placeholder.com/800x533"
                      sizes="(min-width: 40px) 40px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={40}
                      height={40}
                      className="el-image uk-border-circle"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </div>{" "}
                <div className="uk-margin-remove-first-child">
                  <div className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                    {" "}
                    Adrian Phelps{" "}
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="uk-hidden@xl uk-margin uk-width-large uk-margin-auto">
              <a
                className="el-link"
                href="/joomla/themes/paladin/technology/electronics/51-presenting-the-most-prominent-features-of-the-new-mobile-os"
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet="https://via.placeholder.com/800x533"
                    sizes="(min-width: 450px) 450px"
                  />
                  <img
                    src="https://via.placeholder.com/800x533"
                    width={450}
                    height={590}
                    className="el-image"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-width-1-2@m uk-width-2-5@l">
        <div className="uk-margin">
          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
            uk-grid=""
          >
            {" "}
            <div className="uk-first-column">
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/technology/electronics/85-the-new-tablet-manages-to-inspire-with-unique-features"
                  aria-label="The new tablet manages to inspire with unique features"
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
                      height={381}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  Innovations for designers
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/technology/electronics/85-the-new-tablet-manages-to-inspire-with-unique-features"
                    className="uk-link-heading"
                  >
                    The new tablet manages to inspire with unique features
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis nostrud exercitation.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/technology/multimedia/146-the-16-inch-macbook-pro-considerably-improves-performance"
                  aria-label="The 16-inch MacBook Pro considerably improves performance"
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
                      height={381}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  16-inch MacBook Pro
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/technology/multimedia/146-the-16-inch-macbook-pro-considerably-improves-performance"
                    className="uk-link-heading"
                  >
                    The 16-inch MacBook Pro considerably improves performance
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Adipiscing elit duis tristique sollicitudin nibh sit amet
                  commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                  vitae congue mauris vel elit scelerisque.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="uk-margin">
          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
            uk-grid=""
          >
            {" "}
            <div className="uk-first-column">
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/technology/multimedia/132-what-can-we-expect-from-the-updated-home-smart-speaker"
                  aria-label="What can we expect from the updated Home Smart Speaker"
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
                      height={381}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  Home smart speaker
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/technology/multimedia/132-what-can-we-expect-from-the-updated-home-smart-speaker"
                    className="uk-link-heading"
                  >
                    What can we expect from the updated Home Smart Speaker
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Tempor integre sit cu, alia iuvaret atomorum his cu, error
                  omnium at nam. Ei decore labitur pro. Mea decore audire
                  signiferumque in reprehenderit.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/technology/multimedia/147-with-the-next-big-update-it-will-be-possible-to-track-your-sleep-with-the-apple-watch"
                  aria-label="With the next update it will be possible to track your sleep"
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
                      height={381}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  Apple Watch
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/technology/multimedia/147-with-the-next-big-update-it-will-be-possible-to-track-your-sleep-with-the-apple-watch"
                    className="uk-link-heading"
                  >
                    With the next update it will be possible to track your sleep
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
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
}
export default SectionFull;