import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleNum = ({ data }) => {
  return (
    <li className="el-item">
      <div
        className="uk-grid-small uk-child-width-expand uk-flex-nowrap uk-flex-middle uk-grid"
        uk-grid=""
      >
        <div className="uk-width-auto uk-flex-last">
          <a
            href="/joomla/themes/paladin/politics/united-states/19-the-president-s-farewell-speech-addressed-both-state-officials-and-foreign-diplomats"
            aria-label="President’s farewell speech addressed state officials and foreign diplomats"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://via.placeholder.com/800x533"
                sizes="(min-width: 60px) 60px"
              />
              <img
                src="https://via.placeholder.com/800x533"
                width={60}
                height={60}
                className="el-image"
                alt=""
                loading="lazy"
              />
            </picture>
          </a>
        </div>
        <div className="uk-first-column">
          <div className="el-content uk-panel uk-h5">
            <a
              href="/joomla/themes/paladin/politics/united-states/19-the-president-s-farewell-speech-addressed-both-state-officials-and-foreign-diplomats"
              className="el-link uk-link-heading uk-margin-remove-last-child"
            >
              President’s farewell speech addressed state officials and foreign
              diplomats
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArticleNum;
