import React, { useRef } from "react";
import Link from "next/link";
;

const Nav = () => {
  const ref = React.useRef();

  return (
    <div id="Nav">
     <div className="tm-header-mobile uk-hidden@l tm-header-overlay" uk-header="">
  <div
    uk-sticky=""
    show-on-up=""
    animation="uk-animation-slide-top"
    cls-active="uk-navbar-sticky"
    sel-target=".uk-navbar-container"
    className="uk-sticky"
    style={{}}
  >
    <div className="uk-navbar-container uk-navbar-transparent uk-dark">
      <div className="uk-container uk-container-expand">
        <nav
          className="uk-navbar"
          uk-navbar='{"container":".tm-header-mobile > [uk-sticky]"}'
        >
          <div className="uk-navbar-left">
            <a
              href="https://demo.yootheme.com/joomla/themes/paladin/"
              aria-label="Back to home"
              className="uk-logo uk-navbar-item"
            >
              <img
                alt="The Paladin"
                loading="eager"
                width={170}
                height={30}
                uk-svg=""
                src="/demo/paladin/images/logo-mobile.svg"
                hidden=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={170}
                height={30}
                viewBox="0 0 170 30"
                className=" uk-svg"
              >
                <path
                  fill="#111"
                  d="M36.58,28.06c0,.15,0,.22-.15.22-.6,0-1.08,0-1.43,0l-2,0-2.06,0c-.38,0-.86,0-1.46,0-.05,0-.08-.07-.08-.22s0-.23.08-.23a2.51,2.51,0,0,0,1.87-.5,3.33,3.33,0,0,0,.45-2.08V19.4A5.26,5.26,0,0,0,31,16.16a3,3,0,0,0-2.55-1.07,5.09,5.09,0,0,0-2.25.58,7.42,7.42,0,0,0-2.1,1.6v8a3.33,3.33,0,0,0,.45,2.08,2.45,2.45,0,0,0,1.84.5c.1,0,.15.08.15.23s-.05.22-.15.22c-.6,0-1.08,0-1.43,0l-2,0-2.06,0c-.38,0-.86,0-1.46,0-.05,0-.08-.07-.08-.22s0-.23.08-.23a2.51,2.51,0,0,0,1.87-.5,3.33,3.33,0,0,0,.45-2.08V6c0-.32-.19-.49-.56-.49H15.25a9.74,9.74,0,0,0-2.15.17,1.3,1.3,0,0,0-.9.66A3.89,3.89,0,0,0,12,8V25.25a4.28,4.28,0,0,0,.24,1.68,1.36,1.36,0,0,0,1,.72,10.89,10.89,0,0,0,2.35.18c.05,0,.07.08.07.23s0,.22-.07.22c-.85,0-1.53,0-2,0l-3,0-2.85,0q-.75,0-2.1,0s-.07-.07-.07-.22,0-.23.07-.23a10.93,10.93,0,0,0,2.33-.18,1.45,1.45,0,0,0,1-.73,4.15,4.15,0,0,0,.26-1.67V7.9a3.84,3.84,0,0,0-.24-1.6A1.26,1.26,0,0,0,8,5.68a12,12,0,0,0-2.19-.15A4.82,4.82,0,0,0,2.27,6.79,7.91,7.91,0,0,0,.45,10.93c0,.08-.11.11-.24.1S0,11,0,10.93c.1-.7.21-1.82.34-3.37S.52,4.84.52,4c0-.13.08-.19.23-.19S1,3.91,1,4c0,.55.68.82,2,.82s3.93.08,7.53.08,6,0,7.23-.08a7.26,7.26,0,0,0,3.81-1.05,4.65,4.65,0,0,0,2-2.7c0-.07.07-.11.22-.11A.49.49,0,0,1,24,1a.11.11,0,0,1,.09.11V16.59a10.78,10.78,0,0,1,2.81-2.4,6.09,6.09,0,0,1,3-.78A4.2,4.2,0,0,1,33,14.6,4.77,4.77,0,0,1,34.14,18v7.23a3.33,3.33,0,0,0,.45,2.08,2.45,2.45,0,0,0,1.84.5C36.53,27.83,36.58,27.91,36.58,28.06ZM50.9,26.11a.25.25,0,0,1,.2.13.2.2,0,0,1,0,.24,8.12,8.12,0,0,1-5.55,2.25,7,7,0,0,1-3.78-1,6.49,6.49,0,0,1-2.4-2.66,8.25,8.25,0,0,1,.24-7.63,8,8,0,0,1,7-4,4.57,4.57,0,0,1,3.31,1.11,4.19,4.19,0,0,1,1.15,3.16c0,.68-.15,1-.45,1l-9.26,0c-.05.55-.08,1-.08,1.28a8.35,8.35,0,0,0,1.54,5.24,5.16,5.16,0,0,0,4.35,2A5.46,5.46,0,0,0,49,27a10.7,10.7,0,0,0,1.82-.92ZM42.72,15.3a5.45,5.45,0,0,0-1.31,3l6.82-.15a4.72,4.72,0,0,0-.76-2.91,2.58,2.58,0,0,0-2.16-1A3.43,3.43,0,0,0,42.72,15.3ZM69,26.84a1.78,1.78,0,0,0,1.2.77,12.7,12.7,0,0,0,2.81.22c.07,0,.11.08.11.23s0,.22-.11.22q-1.55,0-2.4,0l-3.26,0-2.55,0c-.45,0-1.09,0-1.91,0-.08,0-.11-.07-.11-.22s0-.23.11-.23a7.87,7.87,0,0,0,2-.18,1.27,1.27,0,0,0,.87-.73A4.69,4.69,0,0,0,66,25.25V7.9a4.49,4.49,0,0,0-.22-1.65,1.3,1.3,0,0,0-.87-.73,6.79,6.79,0,0,0-2-.21c-.08,0-.11-.08-.11-.22s0-.23.11-.23l1.91,0c1,0,1.89.07,2.51.07s1.31,0,2.14-.11c.3,0,.76,0,1.4-.06s1.19,0,1.67,0a9.29,9.29,0,0,1,5.6,1.55A5.48,5.48,0,0,1,80.24,11,6.88,6.88,0,0,1,79,15.13a7.47,7.47,0,0,1-3.11,2.51,9.69,9.69,0,0,1-3.91.82,8,8,0,0,1-1.84-.18s-.08-.06-.08-.19a.46.46,0,0,1,.06-.22c0-.08.08-.1.13-.08a5.13,5.13,0,0,0,1.31.15,5.39,5.39,0,0,0,3.94-1.61,6.33,6.33,0,0,0,1.61-4.65A6.64,6.64,0,0,0,75.59,7a5.21,5.21,0,0,0-4-1.68,6.5,6.5,0,0,0-1.8.17,1.22,1.22,0,0,0-.81.71A4.6,4.6,0,0,0,68.7,8V25.1A3.77,3.77,0,0,0,69,26.84Zm27.24-.58a.19.19,0,0,1,.19.17.19.19,0,0,1-.11.24l-3.86,1.84a.74.74,0,0,1-.34.07,1.08,1.08,0,0,1-.88-.65,4.74,4.74,0,0,1-.54-1.78l-1.88,1.23a6.61,6.61,0,0,1-1.63.9,4.39,4.39,0,0,1-1.55.27,3.15,3.15,0,0,1-2.21-.73A2.42,2.42,0,0,1,82.64,26a2.51,2.51,0,0,1,1-2,10.85,10.85,0,0,1,3.06-1.6l4-1.46V18.43a6.81,6.81,0,0,0-.58-3.26,1.86,1.86,0,0,0-1.71-1A2.17,2.17,0,0,0,86.5,15,4.48,4.48,0,0,0,85.67,17c-.15,1.1-.66,1.64-1.53,1.64a1.38,1.38,0,0,1-1-.33,1.12,1.12,0,0,1-.34-.83A2.52,2.52,0,0,1,84,15.58,9.92,9.92,0,0,1,86.82,14a8.83,8.83,0,0,1,2.94-.6,2.93,2.93,0,0,1,2.38,1A4.3,4.3,0,0,1,93,17.3v6.94a3.74,3.74,0,0,0,.36,1.87,1.19,1.19,0,0,0,1.1.6,4.64,4.64,0,0,0,1.73-.45Zm-5.58-.67V21.43L87.51,22.7a4.16,4.16,0,0,0-1.54.92A1.89,1.89,0,0,0,85.45,25,2,2,0,0,0,86,26.47a2,2,0,0,0,1.48.58,3.35,3.35,0,0,0,1.69-.57Zm7.08,2.47c0-.15,0-.23.11-.23a2.45,2.45,0,0,0,1.84-.5,3.33,3.33,0,0,0,.45-2.08V6A5.7,5.7,0,0,0,99.9,4,.89.89,0,0,0,99,3.4a4.49,4.49,0,0,0-1.69.52h0c-.1,0-.18-.07-.24-.2s0-.22.06-.25l4.94-2.32.15,0a.47.47,0,0,1,.26.11c.1.08.15.15.15.23v23.8a3.41,3.41,0,0,0,.44,2.08,2.42,2.42,0,0,0,1.85.5c.08,0,.11.08.11.23s0,.22-.11.22c-.6,0-1.09,0-1.46,0l-2.06,0-2.1,0c-.35,0-.83,0-1.43,0C97.78,28.28,97.74,28.21,97.74,28.06Zm24-1.8c.1,0,.16.06.19.17a.2.2,0,0,1-.12.24l-3.86,1.84a.72.72,0,0,1-.33.07c-.33,0-.62-.21-.89-.65a4.74,4.74,0,0,1-.54-1.78l-1.87,1.23a6.79,6.79,0,0,1-1.63.9,4.49,4.49,0,0,1-1.56.27,3.17,3.17,0,0,1-2.21-.73,2.45,2.45,0,0,1-.79-1.86,2.49,2.49,0,0,1,1-2,10.77,10.77,0,0,1,3-1.6l4-1.46V18.43a6.81,6.81,0,0,0-.58-3.26,1.84,1.84,0,0,0-1.7-1A2.19,2.19,0,0,0,112,15a4.47,4.47,0,0,0-.82,1.95c-.15,1.1-.66,1.64-1.54,1.64a1.4,1.4,0,0,1-1-.33,1.16,1.16,0,0,1-.34-.83,2.55,2.55,0,0,1,1.18-1.87A9.92,9.92,0,0,1,112.3,14a8.83,8.83,0,0,1,2.94-.6,2.92,2.92,0,0,1,2.38,1,4.25,4.25,0,0,1,.85,2.86v6.94a3.87,3.87,0,0,0,.35,1.87,1.2,1.2,0,0,0,1.11.6,4.6,4.6,0,0,0,1.72-.45Zm-5.59-.67V21.43L113,22.7a4.08,4.08,0,0,0-1.54.92,1.89,1.89,0,0,0-.53,1.37A2,2,0,0,0,113,27.05a3.29,3.29,0,0,0,1.68-.57Zm24.7.52c.08,0,.14.06.19.19s0,.2,0,.22l-4.31,2.06-.26.08c-.33,0-.6-.26-.82-.79a5.94,5.94,0,0,1-.38-2.21,13.11,13.11,0,0,1-2.85,2.25,6.55,6.55,0,0,1-3.3.86,5.21,5.21,0,0,1-2.92-.88A6.11,6.11,0,0,1,124,25.36a8.47,8.47,0,0,1-.81-3.78A7.74,7.74,0,0,1,124.5,17a8.31,8.31,0,0,1,3.3-2.77,9.42,9.42,0,0,1,4-.92,7,7,0,0,1,3.45.86V6A5.17,5.17,0,0,0,135,4a1,1,0,0,0-.94-.58,5.25,5.25,0,0,0-1.65.48h-.07a.21.21,0,0,1-.21-.17.18.18,0,0,1,.06-.24L137,1.15a.49.49,0,0,1,.19,0,.42.42,0,0,1,.24.11.31.31,0,0,1,.13.23V24.12a4.48,4.48,0,0,0,.3,1.93,1.05,1.05,0,0,0,1,.59,3.83,3.83,0,0,0,1.88-.53Zm-7.81.62A9.6,9.6,0,0,0,135.22,25v-8.4a6.28,6.28,0,0,0-1.87-1.84,4.8,4.8,0,0,0-2.51-.63,4.41,4.41,0,0,0-3.62,1.63,7.23,7.23,0,0,0-1.33,4.7,8.48,8.48,0,0,0,1.33,5,4,4,0,0,0,3.43,1.9A4.83,4.83,0,0,0,133,26.73Zm9.84,1.33c0-.15,0-.23.11-.23a2.43,2.43,0,0,0,1.83-.5,3.33,3.33,0,0,0,.45-2.08v-7a5,5,0,0,0-.26-1.91.93.93,0,0,0-.93-.6,3.78,3.78,0,0,0-1.65.52h0a.25.25,0,0,1-.23-.19.18.18,0,0,1,.08-.26l5-2.32.15,0a.42.42,0,0,1,.25.11.34.34,0,0,1,.13.23c0,.17,0,.67,0,1.5s0,1.8,0,2.92v7a6,6,0,0,0,.17,1.63,1.13,1.13,0,0,0,.66.75,3.88,3.88,0,0,0,1.46.2c.07,0,.11.08.11.23s0,.22-.11.22c-.63,0-1.11,0-1.46,0l-2,0-2.09,0c-.36,0-.82,0-1.39,0C142.9,28.28,142.87,28.21,142.87,28.06Zm2-19.3a1.71,1.71,0,0,1-.47-1.28,1.6,1.6,0,0,1,.47-1.2,1.78,1.78,0,0,1,1.29-.45,1.67,1.67,0,0,1,1.24.45,1.62,1.62,0,0,1,.45,1.2,1.74,1.74,0,0,1-.45,1.28,1.67,1.67,0,0,1-1.24.45A1.78,1.78,0,0,1,144.91,8.76ZM170,28.06c0,.15,0,.22-.11.22-.63,0-1.11,0-1.46,0l-2,0-2,0c-.35,0-.83,0-1.43,0-.07,0-.11-.07-.11-.22s0-.23.11-.23a3.83,3.83,0,0,0,1.45-.2,1.14,1.14,0,0,0,.63-.75,5.6,5.6,0,0,0,.17-1.63v-6a5.26,5.26,0,0,0-.8-3.21,3.09,3.09,0,0,0-2.57-1,5,5,0,0,0-2.23.57,7,7,0,0,0-2.08,1.57v8.06a6,6,0,0,0,.17,1.63,1.14,1.14,0,0,0,.65.75,4,4,0,0,0,1.47.2c.07,0,.11.08.11.23s0,.22-.11.22q-.94,0-1.47,0l-2,0-2,0c-.35,0-.83,0-1.43,0-.07,0-.11-.07-.11-.22s0-.23.11-.23a3.83,3.83,0,0,0,1.45-.2,1.14,1.14,0,0,0,.63-.75,6,6,0,0,0,.17-1.63V17.9a4.06,4.06,0,0,0-.3-1.8,1,1,0,0,0-1-.56,6.71,6.71,0,0,0-2,.56h0a.23.23,0,0,1-.22-.16c0-.12,0-.2.07-.25l4.5-2.17.23,0c.24,0,.49.28.73.84a6.62,6.62,0,0,1,.39,2.23c1.82-2.14,3.73-3.22,5.73-3.22a4.22,4.22,0,0,1,3.21,1.2,4.76,4.76,0,0,1,1.14,3.41v7.31a6,6,0,0,0,.17,1.63,1.13,1.13,0,0,0,.66.75,3.88,3.88,0,0,0,1.46.2C170,27.83,170,27.91,170,28.06Z"
                />
              </svg>
            </a>
          </div>
          <div className="uk-navbar-right">
            <a
              uk-toggle=""
              aria-label="Open Menu"
              href="#tm-dialog-mobile"
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
    style={{ height: 62, width: 1174, margin: 0 }}
    hidden=""
  />
  <div
    id="tm-dialog-mobile"
    uk-offcanvas="container: true; overlay: true"
    mode="slide"
    flip=""
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
            <div className="uk-panel" id="module-tm-4">
              <form
                id="search-tm-4"
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
            <div className="uk-panel" id="module-menu-dialog-mobile">
              <ul
                className="uk-nav uk-nav-default uk-nav-divider uk-nav-accordion"
                uk-nav="targets: > .js-accordion"
              >
                <li className="item-170 uk-active">
                  <a href="/joomla/themes/paladin/"> Home</a>
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
                      <a href="/joomla/themes/paladin/politics"> Politics</a>
                    </li>
                    <li className="item-172">
                      <a href="/joomla/themes/paladin/politics/environment">
                        {" "}
                        Environment
                      </a>
                    </li>
                    <li className="item-173">
                      <a href="/joomla/themes/paladin/politics/health">
                        {" "}
                        Health
                      </a>
                    </li>
                    <li className="item-174">
                      <a href="/joomla/themes/paladin/politics/education">
                        {" "}
                        Education
                      </a>
                    </li>
                    <li className="item-175">
                      <a href="/joomla/themes/paladin/politics/economy">
                        {" "}
                        Economy
                      </a>
                    </li>
                    <li className="item-176">
                      <a href="/joomla/themes/paladin/politics/united-states">
                        {" "}
                        United States
                      </a>
                    </li>
                    <li className="item-177">
                      <a href="/joomla/themes/paladin/politics/world"> World</a>
                    </li>
                    <li className="item-178">
                      <a href="/joomla/themes/paladin/politics/brexit">
                        {" "}
                        Brexit
                      </a>
                    </li>
                    <li className="item-179">
                      <a href="/joomla/themes/paladin/politics/state-justice">
                        {" "}
                        State &amp; Justice
                      </a>
                    </li>
                    <li className="item-180">
                      <a href="/joomla/themes/paladin/politics/elections">
                        {" "}
                        Elections
                      </a>
                    </li>
                    <li className="item-274">
                      <a href="/joomla/themes/paladin/politics/politics-archive">
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
                      <a href="/joomla/themes/paladin/sports"> Sports</a>
                    </li>
                    <li className="item-182">
                      <a href="/joomla/themes/paladin/sports/martial-arts">
                        {" "}
                        Martial Arts
                      </a>
                    </li>
                    <li className="item-183">
                      <a href="/joomla/themes/paladin/sports/motorsports">
                        {" "}
                        Motorsports
                      </a>
                    </li>
                    <li className="item-184">
                      <a href="/joomla/themes/paladin/sports/baseball">
                        {" "}
                        Baseball
                      </a>
                    </li>
                    <li className="item-185">
                      <a href="/joomla/themes/paladin/sports/football">
                        {" "}
                        Football
                      </a>
                    </li>
                    <li className="item-186">
                      <a href="/joomla/themes/paladin/sports/athletics">
                        {" "}
                        Athletics
                      </a>
                    </li>
                    <li className="item-187">
                      <a href="/joomla/themes/paladin/sports/soccer"> Soccer</a>
                    </li>
                    <li className="item-188">
                      <a href="/joomla/themes/paladin/sports/basketball">
                        {" "}
                        Basketball
                      </a>
                    </li>
                    <li className="item-189">
                      <a href="/joomla/themes/paladin/sports/winter-sports">
                        {" "}
                        Winter Sports
                      </a>
                    </li>
                    <li className="item-275">
                      <a href="/joomla/themes/paladin/sports/sports-archive">
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
                      <a href="/joomla/themes/paladin/technology">
                        {" "}
                        Technology
                      </a>
                    </li>
                    <li className="item-191">
                      <a href="/joomla/themes/paladin/technology/multimedia">
                        {" "}
                        Multimedia
                      </a>
                    </li>
                    <li className="item-192">
                      <a href="/joomla/themes/paladin/technology/transportation">
                        {" "}
                        Transportation
                      </a>
                    </li>
                    <li className="item-193">
                      <a href="/joomla/themes/paladin/technology/electronics">
                        {" "}
                        Electronics
                      </a>
                    </li>
                    <li className="item-195">
                      <a href="/joomla/themes/paladin/technology/innovation">
                        {" "}
                        Innovation
                      </a>
                    </li>
                    <li className="item-196">
                      <a href="/joomla/themes/paladin/technology/reviews">
                        {" "}
                        Reviews
                      </a>
                    </li>
                    <li className="item-197">
                      <a href="/joomla/themes/paladin/technology/security">
                        {" "}
                        Security
                      </a>
                    </li>
                    <li className="item-198">
                      <a href="/joomla/themes/paladin/technology/gaming">
                        {" "}
                        Gaming
                      </a>
                    </li>
                    <li className="item-276">
                      <a href="/joomla/themes/paladin/technology/technology-archive">
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
                      <a href="/joomla/themes/paladin/science"> Science</a>
                    </li>
                    <li className="item-199">
                      <a href="/joomla/themes/paladin/science/space-cosmos">
                        {" "}
                        Space &amp; Cosmos
                      </a>
                    </li>
                    <li className="item-200">
                      <a href="/joomla/themes/paladin/science/animal-world">
                        {" "}
                        Animal World
                      </a>
                    </li>
                    <li className="item-201">
                      <a href="/joomla/themes/paladin/science/our-climate">
                        {" "}
                        Our Climate
                      </a>
                    </li>
                    <li className="item-202">
                      <a href="/joomla/themes/paladin/science/human-health">
                        {" "}
                        Human &amp; Health
                      </a>
                    </li>
                    <li className="item-203">
                      <a href="/joomla/themes/paladin/science/physics-tech">
                        {" "}
                        Physics &amp; Tech
                      </a>
                    </li>
                    <li className="item-204">
                      <a href="/joomla/themes/paladin/science/environment">
                        {" "}
                        Environment
                      </a>
                    </li>
                    <li className="item-205">
                      <a href="/joomla/themes/paladin/science/humanities">
                        {" "}
                        Humanities
                      </a>
                    </li>
                    <li className="item-277">
                      <a href="/joomla/themes/paladin/science/science-archive">
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
                      <a href="/joomla/themes/paladin/entertainment">
                        {" "}
                        Entertainment
                      </a>
                    </li>
                    <li className="item-207">
                      <a href="/joomla/themes/paladin/entertainment/movies">
                        {" "}
                        Movies
                      </a>
                    </li>
                    <li className="item-208">
                      <a href="/joomla/themes/paladin/entertainment/tv-shows">
                        {" "}
                        TV Shows
                      </a>
                    </li>
                    <li className="item-209">
                      <a href="/joomla/themes/paladin/entertainment/podcasts">
                        {" "}
                        Podcasts
                      </a>
                    </li>
                    <li className="item-210">
                      <a href="/joomla/themes/paladin/entertainment/festivals">
                        {" "}
                        Festivals
                      </a>
                    </li>
                    <li className="item-211">
                      <a href="/joomla/themes/paladin/entertainment/art-culture">
                        {" "}
                        Art &amp; Culture
                      </a>
                    </li>
                    <li className="item-212">
                      <a href="/joomla/themes/paladin/entertainment/music">
                        {" "}
                        Music
                      </a>
                    </li>
                    <li className="item-213">
                      <a href="/joomla/themes/paladin/entertainment/celebrities">
                        {" "}
                        Celebrities
                      </a>
                    </li>
                    <li className="item-214">
                      <a href="/joomla/themes/paladin/entertainment/books">
                        {" "}
                        Books
                      </a>
                    </li>
                    <li className="item-278">
                      <a href="/joomla/themes/paladin/entertainment">
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
                      <a href="/joomla/themes/paladin/business/economy">
                        {" "}
                        Economy
                      </a>
                    </li>
                    <li className="item-233">
                      <a href="/joomla/themes/paladin/business/markets">
                        {" "}
                        Markets
                      </a>
                    </li>
                    <li className="item-234">
                      <a href="/joomla/themes/paladin/business/companies">
                        {" "}
                        Companies
                      </a>
                    </li>
                    <li className="item-235">
                      <a href="/joomla/themes/paladin/business/real-estate">
                        {" "}
                        Real Estate
                      </a>
                    </li>
                    <li className="item-236">
                      <a href="/joomla/themes/paladin/business/banks-finance">
                        {" "}
                        Banks &amp; Finance
                      </a>
                    </li>
                    <li className="item-237">
                      <a href="/joomla/themes/paladin/business/energy">
                        {" "}
                        Energy
                      </a>
                    </li>
                    <li className="item-238">
                      <a href="/joomla/themes/paladin/business/consumer-service">
                        {" "}
                        Consumer &amp; Service
                      </a>
                    </li>
                    <li className="item-279">
                      <a href="/joomla/themes/paladin/business/business-archive">
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
                      <a href="/joomla/themes/paladin/travel/destinations">
                        {" "}
                        Destinations
                      </a>
                    </li>
                    <li className="item-240">
                      <a href="/joomla/themes/paladin/travel/travel-report">
                        {" "}
                        Travel Report
                      </a>
                    </li>
                    <li className="item-241">
                      <a href="/joomla/themes/paladin/travel/city-guide">
                        {" "}
                        City Guide
                      </a>
                    </li>
                    <li className="item-242">
                      <a href="/joomla/themes/paladin/travel/sustainability">
                        {" "}
                        Sustainability
                      </a>
                    </li>
                    <li className="item-243">
                      <a href="/joomla/themes/paladin/travel/travel-advice">
                        {" "}
                        Travel Advice
                      </a>
                    </li>
                    <li className="item-244">
                      <a href="/joomla/themes/paladin/travel/weather">
                        {" "}
                        Weather
                      </a>
                    </li>
                    <li className="item-245">
                      <a href="/joomla/themes/paladin/travel/route-planner">
                        {" "}
                        Route Planner
                      </a>
                    </li>
                    <li className="item-280">
                      <a href="/joomla/themes/paladin/travel/travel-archive">
                        {" "}
                        Archive
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="item-231">
                  <a href="/joomla/themes/paladin/archive"> Archive</a>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div>
            <div className="uk-panel" id="module-104">
              <div
                className="tm-grid-expand uk-grid-small uk-margin-xlarge uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-2">
                  <div className="uk-margin-large">
                    <a
                      className="el-content uk-width-1-1 uk-button uk-button-default"
                      href="#"
                      uk-scroll=""
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
                <div className="uk-width-1-2">
                  <div className="uk-margin-large">
                    <a
                      className="el-content uk-width-1-1 uk-button uk-button-default"
                      href="#"
                      uk-scroll=""
                    >
                      Sign Up
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
                    <a className="el-link" href="/joomla/themes/paladin/">
                      <img
                        src="/demo/paladin/images/logo.svg"
                        width={140}
                        height={23}
                        className="el-image uk-text-emphasis"
                        alt=""
                        uk-svg=""
                        hidden=""
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={140}
                        height={23}
                        viewBox="0 0 300 50"
                        className="el-image uk-text-emphasis uk-svg"
                      >
                        <path
                          fill="#111"
                          d="M64.55,48.25c0,.27-.09.4-.26.4-1.06,0-1.9,0-2.52-.07l-3.57-.06-3.64.06c-.66.05-1.52.07-2.58.07-.08,0-.13-.13-.13-.4s0-.4.13-.4c1.68,0,2.78-.29,3.31-.89s.79-1.82.79-3.67V33q0-3.82-1.45-5.72a5.34,5.34,0,0,0-4.5-1.88,8.9,8.9,0,0,0-4,1,13.06,13.06,0,0,0-3.7,2.81V43.29c0,1.85.27,3.08.79,3.67s1.61.89,3.24.89c.18,0,.27.14.27.4s-.09.4-.27.4c-1.05,0-1.89,0-2.51-.07l-3.57-.06-3.64.06c-.66.05-1.52.07-2.58.07-.09,0-.13-.13-.13-.4s0-.4.13-.4c1.68,0,2.78-.29,3.31-.89s.79-1.82.79-3.67V9.36c0-.57-.33-.86-1-.86H26.92a16.82,16.82,0,0,0-3.8.3A2.28,2.28,0,0,0,21.53,10a6.74,6.74,0,0,0-.43,2.84V43.29a7.51,7.51,0,0,0,.43,3,2.38,2.38,0,0,0,1.72,1.25,18.35,18.35,0,0,0,4.13.33c.09,0,.13.14.13.4s0,.4-.13.4c-1.5,0-2.69,0-3.57-.07l-5.23-.06-5,.06c-.88.05-2.12.07-3.71.07-.08,0-.13-.13-.13-.4s0-.4.13-.4A18.58,18.58,0,0,0,14,47.52a2.5,2.5,0,0,0,1.78-1.29,7,7,0,0,0,.46-2.94V12.67a6.52,6.52,0,0,0-.43-2.81,2.18,2.18,0,0,0-1.58-1.09,19.25,19.25,0,0,0-3.87-.27A8.54,8.54,0,0,0,4,10.72C2.52,12.2,1.46,14.63.79,18c0,.13-.18.18-.43.16S0,18.12,0,18c.18-1.24.37-3.22.6-6s.33-4.8.33-6.21q0-.33.39-.33c.27,0,.4.11.4.33,0,1,1.19,1.45,3.57,1.45s7,.13,13.29.13,10.65,0,12.77-.13a12.74,12.74,0,0,0,6.71-1.85A8.18,8.18,0,0,0,41.53.7c0-.13.14-.2.4-.2a.94.94,0,0,1,.37.07.22.22,0,0,1,.16.19V28a18.78,18.78,0,0,1,5-4.23,10.64,10.64,0,0,1,5.23-1.39,7.33,7.33,0,0,1,5.58,2.12,8.36,8.36,0,0,1,2,6V43.29c0,1.85.27,3.08.8,3.67s1.6.89,3.24.89C64.46,47.85,64.55,48,64.55,48.25Zm25.27-3.44a.46.46,0,0,1,.36.23.35.35,0,0,1,0,.43,14.31,14.31,0,0,1-9.79,4,12.27,12.27,0,0,1-6.68-1.75A11.43,11.43,0,0,1,69.51,43a14.12,14.12,0,0,1,12.7-20.47,8,8,0,0,1,5.85,2,7.38,7.38,0,0,1,2,5.58c0,1.19-.26,1.79-.79,1.79L73,31.92c-.09,1-.13,1.71-.13,2.24q0,5.76,2.71,9.26a9.12,9.12,0,0,0,7.67,3.51,9.79,9.79,0,0,0,3.34-.5,19.27,19.27,0,0,0,3.21-1.62ZM75.4,25.73A9.6,9.6,0,0,0,73.08,31l12-.27a8.22,8.22,0,0,0-1.36-5.12A4.52,4.52,0,0,0,80,23.85,6,6,0,0,0,75.4,25.73ZM121.76,46.1a3.13,3.13,0,0,0,2.12,1.36,22.69,22.69,0,0,0,5,.39c.13,0,.19.14.19.4s-.06.4-.19.4c-1.81,0-3.22,0-4.24-.07l-5.75-.06-4.5.06c-.79.05-1.92.07-3.37.07-.13,0-.2-.13-.2-.4s.07-.4.2-.4a13.47,13.47,0,0,0,3.5-.33A2.2,2.2,0,0,0,116,46.23a8,8,0,0,0,.4-2.94V12.67a7.78,7.78,0,0,0-.4-2.91,2.29,2.29,0,0,0-1.52-1.29,12.39,12.39,0,0,0-3.5-.36c-.13,0-.2-.14-.2-.4s.07-.4.2-.4l3.37.07c1.85.09,3.33.13,4.43.13s2.32-.07,3.77-.2c.53,0,1.36,0,2.48-.1s2.11-.1,3-.1q6.15,0,9.88,2.75t3.74,8.3a12.08,12.08,0,0,1-2.15,7.27A13.06,13.06,0,0,1,134,29.87a17.14,17.14,0,0,1-6.91,1.45,13.58,13.58,0,0,1-3.24-.33c-.09,0-.13-.11-.13-.33a.85.85,0,0,1,.1-.4c.06-.13.14-.17.23-.13a8.85,8.85,0,0,0,2.31.26,9.44,9.44,0,0,0,7-2.84c1.89-1.89,2.84-4.63,2.84-8.2s-.9-6.22-2.71-8.2a9.19,9.19,0,0,0-7.14-3,12,12,0,0,0-3.18.3,2.2,2.2,0,0,0-1.42,1.26,8,8,0,0,0-.43,3.07V43A6.7,6.7,0,0,0,121.76,46.1Zm48.08-1a.32.32,0,0,1,.33.29.34.34,0,0,1-.2.43L163.16,49a1.28,1.28,0,0,1-.59.14c-.58,0-1.1-.39-1.56-1.16a8.38,8.38,0,0,1-1-3.14l-3.3,2.18a12.46,12.46,0,0,1-2.88,1.59,8.06,8.06,0,0,1-2.75.46,5.53,5.53,0,0,1-3.9-1.29,4.29,4.29,0,0,1-1.39-3.27A4.47,4.47,0,0,1,147.52,41a18.65,18.65,0,0,1,5.39-2.81L160,35.62V31.25a12.13,12.13,0,0,0-1-5.75,3.27,3.27,0,0,0-3-1.79,3.83,3.83,0,0,0-3.3,1.53,7.85,7.85,0,0,0-1.46,3.43c-.26,1.95-1.17,2.91-2.71,2.91a2.42,2.42,0,0,1-1.79-.59,2,2,0,0,1-.59-1.46c0-1.1.69-2.2,2.08-3.3a17.57,17.57,0,0,1,5-2.71,15.5,15.5,0,0,1,5.19-1.06,5.2,5.2,0,0,1,4.2,1.75,7.64,7.64,0,0,1,1.49,5.06V41.51a6.63,6.63,0,0,0,.63,3.3,2.08,2.08,0,0,0,1.95,1.06,8.15,8.15,0,0,0,3-.79ZM160,43.89V36.54l-5.56,2.25a7.32,7.32,0,0,0-2.71,1.62,3.34,3.34,0,0,0-.93,2.42,3.5,3.5,0,0,0,1,2.61,3.54,3.54,0,0,0,2.61,1,5.91,5.91,0,0,0,3-1Zm12.5,4.36c0-.26.06-.4.2-.4,1.63,0,2.71-.29,3.24-.89s.79-1.82.79-3.67V9.23a9.84,9.84,0,0,0-.43-3.44,1.57,1.57,0,0,0-1.55-1.06,7.93,7.93,0,0,0-3,.93h-.07c-.17,0-.32-.12-.43-.37s-.07-.38.1-.43l8.73-4.1.27-.06a.78.78,0,0,1,.46.2.51.51,0,0,1,.26.39v42c0,1.85.26,3.08.77,3.67s1.59.89,3.27.89c.13,0,.2.14.2.4s-.07.4-.2.4c-1.06,0-1.92,0-2.58-.07l-3.64-.06-3.7.06c-.62.05-1.46.07-2.51.07C172.55,48.65,172.49,48.52,172.49,48.25Zm42.32-3.17a.33.33,0,0,1,.34.29.36.36,0,0,1-.2.43L208.13,49a1.25,1.25,0,0,1-.59.14c-.57,0-1.09-.39-1.55-1.16a8,8,0,0,1-1-3.14l-3.31,2.18a12.46,12.46,0,0,1-2.88,1.59,8,8,0,0,1-2.74.46,5.49,5.49,0,0,1-3.9-1.29,4.26,4.26,0,0,1-1.39-3.27A4.46,4.46,0,0,1,192.49,41a18.79,18.79,0,0,1,5.39-2.81L205,35.62V31.25a12,12,0,0,0-1-5.75,3.27,3.27,0,0,0-3-1.79,3.84,3.84,0,0,0-3.31,1.53,8,8,0,0,0-1.46,3.43c-.26,1.95-1.17,2.91-2.71,2.91a2.39,2.39,0,0,1-1.78-.59,2,2,0,0,1-.6-1.46c0-1.1.7-2.2,2.08-3.3a17.57,17.57,0,0,1,5-2.71,15.5,15.5,0,0,1,5.19-1.06,5.2,5.2,0,0,1,4.2,1.75,7.64,7.64,0,0,1,1.49,5.06V41.51a6.63,6.63,0,0,0,.63,3.3,2.1,2.1,0,0,0,1.95,1.06,8.11,8.11,0,0,0,3-.79ZM205,43.89V36.54l-5.56,2.25a7.32,7.32,0,0,0-2.71,1.62,3.34,3.34,0,0,0-.92,2.42,3.53,3.53,0,0,0,1,2.61,3.57,3.57,0,0,0,2.61,1,5.85,5.85,0,0,0,3-1Zm43.58.92c.14,0,.25.11.34.33s.06.36-.07.4l-7.61,3.64a2.46,2.46,0,0,1-.46.13c-.57,0-1.06-.46-1.45-1.39a11,11,0,0,1-.67-3.9,23.23,23.23,0,0,1-5,4,11.54,11.54,0,0,1-5.82,1.52A9.25,9.25,0,0,1,222.62,48a10.74,10.74,0,0,1-3.8-4.46,15,15,0,0,1-1.43-6.68,13.54,13.54,0,0,1,2.32-8,14.45,14.45,0,0,1,5.82-4.89,16.58,16.58,0,0,1,7-1.62,12.25,12.25,0,0,1,6.08,1.52V9.23a9,9,0,0,0-.46-3.41,1.67,1.67,0,0,0-1.65-1,9,9,0,0,0-2.91.86h-.13a.38.38,0,0,1-.37-.3c-.06-.2,0-.34.1-.43L241.8.76a.81.81,0,0,1,.33-.06.67.67,0,0,1,.43.2.55.55,0,0,1,.23.39v40a8,8,0,0,0,.53,3.4,1.84,1.84,0,0,0,1.79,1,6.67,6.67,0,0,0,3.3-.93ZM234.76,45.9a16.65,16.65,0,0,0,3.86-3.07V28a11,11,0,0,0-3.3-3.24,8.38,8.38,0,0,0-4.43-1.12,7.82,7.82,0,0,0-6.39,2.88q-2.34,2.87-2.34,8.3a15,15,0,0,0,2.34,8.82A7.12,7.12,0,0,0,230.55,47,8.5,8.5,0,0,0,234.76,45.9Zm17.36,2.35c0-.26.06-.4.19-.4,1.64,0,2.72-.29,3.24-.89s.8-1.82.8-3.67V31a9.18,9.18,0,0,0-.46-3.37,1.66,1.66,0,0,0-1.66-1.06,6.85,6.85,0,0,0-2.91.92h-.06c-.18,0-.31-.11-.4-.33s-.05-.37.13-.46l8.8-4.1.26-.07a.7.7,0,0,1,.43.2.53.53,0,0,1,.23.4q0,.46-.06,2.64c0,1.46-.07,3.18-.07,5.16V43.29a10.32,10.32,0,0,0,.3,2.88A2,2,0,0,0,262,47.49a7,7,0,0,0,2.58.36c.13,0,.19.14.19.4s-.06.4-.19.4c-1.11,0-2,0-2.58-.07l-3.57-.06-3.71.06c-.62.05-1.43.07-2.45.07C252.18,48.65,252.12,48.52,252.12,48.25Zm3.6-34.06a3,3,0,0,1-.83-2.25,2.78,2.78,0,0,1,.83-2.11A3.15,3.15,0,0,1,258,9a2.94,2.94,0,0,1,2.18.8,2.83,2.83,0,0,1,.8,2.11,3,3,0,0,1-.8,2.25A2.93,2.93,0,0,1,258,15,3.15,3.15,0,0,1,255.72,14.19ZM300,48.25c0,.27-.07.4-.2.4-1.1,0-2,0-2.58-.07l-3.57-.06-3.57.06c-.62.05-1.46.07-2.51.07-.14,0-.2-.13-.2-.4s.06-.4.2-.4a6.73,6.73,0,0,0,2.54-.36,2,2,0,0,0,1.13-1.32,10.8,10.8,0,0,0,.29-2.88V32.78q0-3.84-1.42-5.66a5.41,5.41,0,0,0-4.53-1.82,8.86,8.86,0,0,0-3.93,1A12.42,12.42,0,0,0,278,29.07V43.29a10.4,10.4,0,0,0,.29,2.88,2,2,0,0,0,1.16,1.32,7,7,0,0,0,2.58.36c.13,0,.2.14.2.4s-.07.4-.2.4c-1.1,0-2,0-2.58-.07l-3.57-.06-3.57.06c-.62.05-1.46.07-2.52.07-.13,0-.19-.13-.19-.4s.06-.4.19-.4a6.76,6.76,0,0,0,2.55-.36,2,2,0,0,0,1.12-1.32,10.32,10.32,0,0,0,.3-2.88v-13a7,7,0,0,0-.53-3.18,1.8,1.8,0,0,0-1.72-1,11.63,11.63,0,0,0-3.5,1h-.07a.42.42,0,0,1-.39-.29c-.09-.2,0-.35.13-.43l7.93-3.84.4-.07c.44,0,.87.5,1.29,1.49A11.17,11.17,0,0,1,278,28c3.21-3.79,6.59-5.69,10.11-5.69a7.42,7.42,0,0,1,5.66,2.12,8.38,8.38,0,0,1,2,6v12.9a10.8,10.8,0,0,0,.29,2.88,2,2,0,0,0,1.16,1.32,7,7,0,0,0,2.58.36C299.93,47.85,300,48,300,48.25Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                      {" "}
                      <li className="el-item ">
                        <a className="el-link" href="#" uk-scroll="">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="#" uk-scroll="">
                          Privacy
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="#" uk-scroll="">
                          Imprint
                        </a>
                      </li>
                      <li className="el-item ">
                        <a className="el-link" href="#" uk-scroll="">
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
                          href="https://www.facebook.com/yootheme"
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
                          href="https://twitter.com/yootheme?lang=en"
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
                          href="https://www.youtube.com/channel/UCScfGdEgRCOh9YJdpGu82eQ"
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
                          href="https://www.instagram.com/"
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
                        <a className="el-link" href="https://www.reddit.com/">
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
<div
  className="uk-section-default uk-section uk-section-small"
  tm-header-transparent="dark"
>
  <div className="uk-container uk-container-xlarge">
    <div
      className="tm-header-placeholder uk-margin-remove-adjacent"
      style={{ height: 193 }}
    />
    <div
      className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-width-1-1 uk-first-column">
        <div className="uk-alert uk-alert-primary uk-text-center">
          <a
            className="el-link uk-link-reset"
            href="/joomla/themes/paladin/business/markets/52-experts-predict-the-markets-won-t-be-out-of-recession-before-next-year"
          >
            <h2 className="el-title uk-h3 uk-display-inline uk-text-middle">
              Breaking News —
            </h2>
            <div className="el-content uk-panel uk-display-inline uk-text-middle">
              Experts predict the markets won’t be out of recession before next
              year
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Nav;
