import React, { useState } from "react";
import Link from "next/link";


const Demo = () => {
  const [expanded, setExpanded] = useState(true);

  return(
    <div
  className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
  uk-grid=""
>
  <div className="uk-grid-item-match uk-light uk-width-1-1@m uk-first-column">
    <div className="uk-tile-secondary uk-flex uk-preserve-color">
      <div
        data-src="/joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-odell-j-cullen-s-farefell-teaser-bg-right.jpg%26thumbnail%3D1600%2C&hash=399f515f"
        data-sources='[{"type":"image\/webp","srcset":"\/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-odell-j-cullen-s-farefell-teaser-bg-right.jpg%26type%3Dwebp%2C85%26thumbnail%3D768%2C480&hash=5ac6ac4a 768w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-odell-j-cullen-s-farefell-teaser-bg-right.jpg%26type%3Dwebp%2C85%26thumbnail%3D1024%2C640&hash=bcf8d550 1024w, \/joomla\/templates\/yootheme\/cache\/6b\/sports-post-odell-j-cullen-s-farefell-teaser-bg-right-6ba0e9a3.webp 1366w, \/joomla\/templates\/yootheme\/cache\/2a\/sports-post-odell-j-cullen-s-farefell-teaser-bg-right-2af7f528.webp 1600w, \/joomla\/templates\/yootheme\/cache\/61\/sports-post-odell-j-cullen-s-farefell-teaser-bg-right-61c40cf6.webp 1920w, \/joomla\/templates\/yootheme\/cache\/6d\/sports-post-odell-j-cullen-s-farefell-teaser-bg-right-6ddabe0c.webp 2560w","sizes":"(max-aspect-ratio: 1600\/1000) 160vh"}]'
        loading="eager"
        uk-img=""
        className="uk-background-norepeat uk-background-cover uk-background-center-center uk-tile uk-width-1-1 uk-flex uk-flex-bottom"
        style={{
          backgroundImage:
            'url("https://demo.yootheme.com/joomla/templates/yootheme/cache/6d/sports-post-odell-j-cullen-s-farefell-teaser-bg-right-6ddabe0c.webp")'
        }}
      >
        <div className="uk-panel uk-width-1-1">
          <div className="uk-hidden@s uk-margin">
            <a
              className="el-link"
              href="/joomla/themes/paladin/sports/football/21-football-legend-odell-j-cullen-s-final-farewell-a-game-like-no-other"
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet="/joomla/templates/yootheme/cache/01/sports-post-odell-j-cullen-s-farefell-0127f22b.webp 610w, /joomla/templates/yootheme/cache/24/sports-post-odell-j-cullen-s-farefell-24ab767e.webp 768w, /joomla/templates/yootheme/cache/01/sports-post-odell-j-cullen-s-farefell-01cd173f.webp 1024w, /joomla/templates/yootheme/cache/36/sports-post-odell-j-cullen-s-farefell-364c1c40.webp 1220w"
                  sizes="(min-width: 610px) 610px"
                />
                <img
                  src="/joomla/templates/yootheme/cache/e8/sports-post-odell-j-cullen-s-farefell-e8e044ea.jpeg"
                  width={610}
                  height={381}
                  className="el-image"
                  alt=""
                  loading="eager"
                />
              </picture>
            </a>
          </div>
          <div className="uk-h6 uk-text-primary uk-margin-small">
            {" "}
            Cullen's Last Night Out{" "}
          </div>
          <h2 className="uk-heading-small uk-margin-small uk-width-xlarge">
            {" "}
            <a
              className="el-link uk-link-heading"
              href="/joomla/themes/paladin/sports/football/21-football-legend-odell-j-cullen-s-final-farewell-a-game-like-no-other"
            >
              Football legend Odell J. Cullen’s final farewell – A game like no
              other
            </a>{" "}
          </h2>
          <div className="uk-panel uk-text-lead uk-margin uk-width-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
          <h3 className="uk-h6 uk-margin-large uk-margin-remove-bottom">
            {" "}
            More Coverage{" "}
          </h3>
          <div className="uk-width-3-5@l uk-margin-medium">
            <div
              className="uk-child-width-1-1 uk-child-width-1-3@s uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
              uk-grid=""
            >
              {" "}
              <div className="uk-first-column">
                <div className="el-item uk-panel uk-margin-remove-first-child">
                  <a
                    href="/joomla/themes/paladin/sports/football/126-after-a-16-year-carreer-cullen-is-throwing-the-towel"
                    aria-label="After a 16 year career Cullen is throwing the towel"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/joomla/templates/yootheme/cache/3e/sports-post-after-16-years-cullen-throwing-the-towel-3e60c040.webp 610w, /joomla/templates/yootheme/cache/65/sports-post-after-16-years-cullen-throwing-the-towel-65e1d2c2.webp 768w, /joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-after-16-years-cullen-throwing-the-towel.jpg%26type%3Dwebp%2C85%26thumbnail%3D1024%2C640&hash=df76e6e5 1024w, /joomla/templates/yootheme/cache/f4/sports-post-after-16-years-cullen-throwing-the-towel-f4daa943.webp 1220w"
                        sizes="(min-width: 610px) 610px"
                      />
                      <img
                        src="/joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-after-16-years-cullen-throwing-the-towel.jpg%26thumbnail%3D610%2C&hash=1c54a1c3"
                        width={610}
                        height={381}
                        className="el-image"
                        alt=""
                        loading="eager"
                      />
                    </picture>
                  </a>
                  <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                    {" "}
                    <a
                      href="/joomla/themes/paladin/sports/football/126-after-a-16-year-carreer-cullen-is-throwing-the-towel"
                      className="uk-link-heading"
                    >
                      After a 16 year career Cullen is throwing the towel
                    </a>{" "}
                  </h4>
                </div>
              </div>
              <div>
                <div className="el-item uk-panel uk-margin-remove-first-child">
                  <a
                    href="/joomla/themes/paladin/sports/football/127-johnston-to-replace-cullen-as-main-offense-player"
                    aria-label="Johnston to replace Cullen as main offense player"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/joomla/templates/yootheme/cache/7b/sports-post-johnston-to-replace-cullen-7b9e6ca8.webp 610w, /joomla/templates/yootheme/cache/9a/sports-post-johnston-to-replace-cullen-9aa77f61.webp 768w, /joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-johnston-to-replace-cullen.jpg%26type%3Dwebp%2C85%26thumbnail%3D1024%2C640&hash=5f9a254f 1024w, /joomla/templates/yootheme/cache/bb/sports-post-johnston-to-replace-cullen-bbfa1dbc.webp 1220w"
                        sizes="(min-width: 610px) 610px"
                      />
                      <img
                        src="/joomla/templates/yootheme/cache/06/sports-post-johnston-to-replace-cullen-067581b0.jpeg"
                        width={610}
                        height={381}
                        className="el-image"
                        alt=""
                        loading="eager"
                      />
                    </picture>
                  </a>
                  <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                    {" "}
                    <a
                      href="/joomla/themes/paladin/sports/football/127-johnston-to-replace-cullen-as-main-offense-player"
                      className="uk-link-heading"
                    >
                      Johnston to replace Cullen as main offense player
                    </a>{" "}
                  </h4>
                </div>
              </div>
              <div>
                <div className="el-item uk-panel uk-margin-remove-first-child">
                  <a
                    href="/joomla/themes/paladin/sports/football/128-offense-star-leads-team-to-win-the-league-for-the-third-year-in-a-row"
                    aria-label="Offense star leads team to win the league for the third year in a row"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/joomla/templates/yootheme/cache/61/sports-post-offense-star-leads-team-to-win-league-third-year-in-a-row-61f9a96c.webp 610w, /joomla/templates/yootheme/cache/69/sports-post-offense-star-leads-team-to-win-league-third-year-in-a-row-695a9617.webp 768w, /joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Fsports-post-offense-star-leads-team-to-win-league-third-year-in-a-row.jpg%26type%3Dwebp%2C85%26thumbnail%3D1024%2C640&hash=fabb42e2 1024w, /joomla/templates/yootheme/cache/02/sports-post-offense-star-leads-team-to-win-league-third-year-in-a-row-026f345c.webp 1220w"
                        sizes="(min-width: 610px) 610px"
                      />
                      <img
                        src="/joomla/templates/yootheme/cache/b9/sports-post-offense-star-leads-team-to-win-league-third-year-in-a-row-b93d01e2.jpeg"
                        width={610}
                        height={381}
                        className="el-image"
                        alt=""
                        loading="eager"
                      />
                    </picture>
                  </a>
                  <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                    {" "}
                    <a
                      href="/joomla/themes/paladin/sports/football/128-offense-star-leads-team-to-win-the-league-for-the-third-year-in-a-row"
                      className="uk-link-heading"
                    >
                      Offense star leads team to win the league for the third
                      year in a row
                    </a>{" "}
                  </h4>
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
export default Demo;