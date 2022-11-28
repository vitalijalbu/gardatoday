import React, { useState } from "react";
import Link from "next/link";


const Features = () => {
  const [expanded, setExpanded] = useState(true);

  return(
<section className="uk-section uk-section-default uk-section-small">
  <div className="uk-container">
    <div uk-slider="" className="uk-slider uk-slider-container">
      <ul
        className="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid"
        style={{ transform: "translateX(0px)" }}
      >
        <li className="uk-active">
          <div
            className="uk-grid-small uk-flex-center uk-flex-left@s uk-grid"
            uk-grid=""
          >
            <div className="uk-first-column">
              <span
                uk-icon="icon: star; ratio: 2.5;"
                className="uk-icon"
              ></span>
            </div>
            <div className="uk-text-center uk-text-left@s uk-width-expand@s">
              <div>Mauris placerat</div>
              <div className="uk-text-meta">
                Donec mollis nibh dolor, sit amet auctor
              </div>
            </div>
          </div>
        </li>
        <li className="uk-active">
          <div
            className="uk-grid-small uk-flex-center uk-flex-left@s uk-grid"
            uk-grid=""
          >
            <div className="uk-first-column">
              <span
                uk-icon="icon: receiver; ratio: 2.5;"
                className="uk-icon"
              ></span>
            </div>
            <div className="uk-text-center uk-text-left@s uk-width-expand@s">
              <div>Lorem ipsum</div>
              <div className="uk-text-meta">
                Sit amet, consectetur adipiscing elit
              </div>
            </div>
          </div>
        </li>
        <li className="uk-active">
          <div
            className="uk-grid-small uk-flex-center uk-flex-left@s uk-grid"
            uk-grid=""
          >
            <div className="uk-first-column">
              <span
                uk-icon="icon: receiver; ratio: 2.5;"
                className="uk-icon"
              ></span>
            </div>
            <div className="uk-text-center uk-text-left@s uk-width-expand@s">
              <div>Lorem ipsum</div>
              <div className="uk-text-meta">
                Sit amet, consectetur adipiscing elit
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top uk-hidden">
        <li uk-slider-item={0} className="uk-hidden uk-active">
          <a href="#" />
        </li>
        <li uk-slider-item={1} className="uk-hidden">
          <a href="#" />
        </li>
        <li uk-slider-item={2} className="uk-hidden">
          <a href="#" />
        </li>
        <li uk-slider-item={3} className="uk-hidden">
          <a href="#" />
        </li>
        <li uk-slider-item={4} className="uk-hidden">
          <a href="#" />
        </li>
      </ul>
    </div>
  </div>
</section>

);
}
export default Features;