import React, { useState } from "react";
import Link from "next/link";


const Section1 = () => {
  const [expanded, setExpanded] = useState(true);

  return(
<div className="uk-section-default uk-light">
  <div
    data-src="https://via.placeholder.com/800x533"
    data-sources='[{"type":"image\/webp","srcset":"\/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbNzY4LDI3MCw3NjgsMjcwXV0sWyJkb0Nyb3AiLFs3NjgsMjcwLDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=9b%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-9b4533df.webp&hash=bf0d7a27 768w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTAyNCwzNjAsMTAyNCwzNjBdXSxbImRvQ3JvcCIsWzEwMjQsMzYwLDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=ee%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-eed2512e.webp&hash=48e54989 1024w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTM2NSw0ODAsMTM2NSw0ODBdXSxbImRvQ3JvcCIsWzEzNjYsNDgwLDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=8c%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-8cdad67d.webp&hash=536ee08f 1366w, \/joomla\/templates\/yootheme\/cache\/af\/politics-post-entering-next-round-brexit-negotiations-teaser-bg-center-af7eb6e1.webp 1600w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTkyMCw2NzUsMTkyMCw2NzVdXSxbImRvQ3JvcCIsWzE5MjAsNjc1LDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=5e%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-5e2481bf.webp&hash=528c4cd7 1920w, \/joomla\/templates\/yootheme\/cache\/d7\/politics-post-entering-next-round-brexit-negotiations-teaser-bg-center-d736acbc.webp 2560w","sizes":"(max-aspect-ratio: 2560\/900) 284vh"}]'
    uk-img=""
    className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-large"
    style={{
      backgroundImage:
        'url("https://via.placeholder.com/1920x1080")'
    }}
  >
    <div className="uk-container uk-container-xlarge">
      <div
        className="tm-grid-expand uk-grid-large uk-grid-margin-large uk-grid"
        uk-grid=""
      >
        <div className="uk-width-3-5@m uk-first-column">
          <div className="uk-h6"> Brexit negotiations </div>
          <h2 className="uk-heading-small uk-margin-small uk-width-xlarge">
            {" "}
            <a
              className="el-link uk-link-heading"
              href="/joomla/themes/paladin/politics/brexit/39-entering-the-next-round-of-brexit-negotations-one-thing-is-for-sure-there-will-be-no-more-postponement"
            >
              Entering the next round of Brexit negotations one thing is for
              sure: There will be no more postponement
            </a>{" "}
          </h2>
          <div className="uk-panel uk-text-lead uk-margin-medium uk-width-large">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Quo eros nominati
            temporibus ex.
          </div>
        </div>
        <div className="uk-width-2-5@m">
          <h3 className="uk-h6"> More Coverage </h3>
          <ul className="uk-list uk-list-divider uk-list-large uk-margin">
            <li className="el-item">
              <div className="el-content uk-panel uk-h3">
                <a
                  href="/joomla/themes/paladin/politics/brexit/44-prime-minister-to-present-new-brexit-deal-to-parliament"
                  className="el-link uk-link-heading uk-margin-remove-last-child"
                >
                  Prime Minister to present new Brexit deal to parliament
                </a>
              </div>{" "}
            </li>
            <li className="el-item">
              <div className="el-content uk-panel uk-h3">
                <a
                  href="/joomla/themes/paladin/politics/world/37-a-new-chapter-of-eu-history-started-after-last-week-s-elections"
                  className="el-link uk-link-heading uk-margin-remove-last-child"
                >
                  A new chapter of EU history started after last week’s
                  elections
                </a>
              </div>{" "}
            </li>
            <li className="el-item">
              <div className="el-content uk-panel uk-h3">
                <a
                  href="/joomla/themes/paladin/politics/brexit/46-i-always-took-living-in-the-european-union-for-granted"
                  className="el-link uk-link-heading uk-margin-remove-last-child"
                >
                  I always took living in the European Union for granted
                </a>
              </div>{" "}
            </li>
            <li className="el-item">
              <div className="el-content uk-panel uk-h3">
                <a
                  href="/joomla/themes/paladin/politics/brexit/45-what-the-outcome-of-the-brexit-negotations-says-about-the-new-prime-minister"
                  className="el-link uk-link-heading uk-margin-remove-last-child"
                >
                  What the outcome of the Brexit negotations says about the new
                  Prime Minister
                </a>
              </div>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
export default Section1;