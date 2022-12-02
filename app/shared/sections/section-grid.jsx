import React, { useState } from "react";
import Link from "next/link";


const SectionGrid = () => {
  const [expanded, setExpanded] = useState(true);

  return(
<section className="uk-section uk-section-default uk-section-small">
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
            href="/joomla/themes/paladin/politics"
          >
            Politics
          </a>{" "}
        </h2>
        <div className="uk-hidden@l uk-margin">
          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
            uk-grid=""
          >
            {" "}
            <div className="uk-first-column">
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/elections/26-the-voter-turnout-shows-the-importance-of-this-year-s-election"
                  aria-label="The voter turnout shows the importance of this year’s election"
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
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/elections/26-the-voter-turnout-shows-the-importance-of-this-year-s-election"
                    className="uk-link-heading"
                  >
                    The voter turnout shows the importance of this year’s
                    election
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Quo eros
                  nominati temporibus ex, eu populo.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/state-justice/27-opposing-camps-clashed-in-heated-dispute-during-today-s-rally"
                  aria-label="Opposing camps clashed in heated dispute during today’s rally"
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
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/state-justice/27-opposing-camps-clashed-in-heated-dispute-during-today-s-rally"
                    className="uk-link-heading"
                  >
                    Opposing camps clashed in heated dispute during today’s
                    rally
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Sea te hinc legimus omnesque, per et dicat scaevola
                  omittantur, saepe possim quaestio sit cu! Ad bonorum singulis
                  mea, at nihil ponderum conclusionemque.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/health/28-the-current-crisis-reveals-the-staggering-problems-in-our-national-healthcare-system"
                  aria-label="The current crisis reveals the staggering problems in our national healthcare system"
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
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/health/28-the-current-crisis-reveals-the-staggering-problems-in-our-national-healthcare-system"
                    className="uk-link-heading"
                  >
                    The current crisis reveals the staggering problems in our
                    national healthcare system
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Tempor integre sit cu, alia iuvaret atomorum his cu, error
                  omnium at nam. Ei decore labitur pro. Mea decore audire
                  signiferumque in.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/world/30-what-we-have-learned-30-years-after-the-fall-of-the-berlin-wall"
                  aria-label="What we have learned 30 years after the fall of the Berlin Wall"
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
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/world/30-what-we-have-learned-30-years-after-the-fall-of-the-berlin-wall"
                    className="uk-link-heading"
                  >
                    What we have learned 30 years after the fall of the Berlin
                    Wall
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
    <div
      className="uk-visible@l tm-grid-expand uk-grid-column-small uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-width-2-5@l uk-visible@l uk-first-column">
        <div className="uk-light uk-visible@l uk-margin uk-text-center">
          {" "}
          <a
            className="el-container uk-inline-clip uk-link-toggle"
            href="/joomla/themes/paladin/politics/elections/26-the-voter-turnout-shows-the-importance-of-this-year-s-election"
            aria-label="The voter turnout shows the importance of this year’s election"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 630px) 630px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={630}
                height={450}
                alt=""
                loading="lazy"
                className="el-image uk-transition-opaque"
              />
            </picture>
            <div className="uk-position-bottom-center">
              <div className="uk-panel uk-padding uk-margin-remove-first-child">
                <div className="el-meta uk-h6 uk-margin-top uk-margin-remove-bottom">
                  Nationwide elections
                </div>
                <h3 className="el-title uk-h1 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <span className="uk-link-heading">
                    The voter turnout shows the importance of this year’s
                    election
                  </span>{" "}
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="uk-width-3-5@l uk-visible@l">
        <div className="uk-visible@l uk-margin">
          <div
            className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
            uk-grid=""
          >
            {" "}
            <div className="uk-first-column">
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/state-justice/27-opposing-camps-clashed-in-heated-dispute-during-today-s-rally"
                  aria-label="Opposing camps clashed in heated dispute during today’s rally"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://via.placeholder.com/800x533"
                      sizes="(min-width: 300px) 300px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={300}
                      height={188}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  At California rally
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/state-justice/27-opposing-camps-clashed-in-heated-dispute-during-today-s-rally"
                    className="uk-link-heading"
                  >
                    Opposing camps clashed in heated dispute during today’s
                    rally
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Sea te hinc legimus omnesque, per et dicat scaevola
                  omittantur, saepe possim quaestio sit cu! Ad bonorum singulis
                  mea, at nihil ponderum conclusionemque.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/health/28-the-current-crisis-reveals-the-staggering-problems-in-our-national-healthcare-system"
                  aria-label="The current crisis reveals the staggering problems in our national healthcare system"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://via.placeholder.com/800x533"
                      sizes="(min-width: 300px) 300px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={300}
                      height={188}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  Low healthcare funds
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/health/28-the-current-crisis-reveals-the-staggering-problems-in-our-national-healthcare-system"
                    className="uk-link-heading"
                  >
                    The current crisis reveals the staggering problems in our
                    national healthcare system
                  </a>{" "}
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  Tempor integre sit cu, alia iuvaret atomorum his cu, error
                  omnium at nam. Ei decore labitur pro. Mea decore audire
                  signiferumque in.
                </div>
              </div>
            </div>
            <div>
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <a
                  href="/joomla/themes/paladin/politics/world/30-what-we-have-learned-30-years-after-the-fall-of-the-berlin-wall"
                  aria-label="What we have learned 30 years after the fall of the Berlin Wall"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://via.placeholder.com/800x533"
                      sizes="(min-width: 300px) 300px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={300}
                      height={188}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                  Lessons from the Iron Curtain
                </div>
                <h3 className="el-title uk-h3 uk-margin-small-top uk-margin-remove-bottom">
                  {" "}
                  <a
                    href="/joomla/themes/paladin/politics/world/30-what-we-have-learned-30-years-after-the-fall-of-the-berlin-wall"
                    className="uk-link-heading"
                  >
                    What we have learned 30 years after the fall of the Berlin
                    Wall
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

</section>

);
}
export default SectionGrid;