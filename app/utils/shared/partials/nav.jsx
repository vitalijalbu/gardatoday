import React, { useRef } from "react";
import Link from "next/link";
;

const Nav = () => {
  const ref = React.useRef();

  return (
    <div id="Nav">
      <div className="uk-container">
     <nav className="uk-navbar-container" uk-navbar="">
    <div className="uk-navbar-left">
    <a className="uk-logo" href="/">
              <img
                src="https://beta.resthotels.it/web/static/logo.svg"
                alt="Logo"
              />
            </a>
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">
            Parent <span uk-navbar-parent-icon="" />
          </a>
          <div className="uk-navbar-dropdown">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="uk-active">
                <a href="#">Active</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li className="uk-nav-header">Header</li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li className="uk-nav-divider" />
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
      </ul>
    </div>
    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <li>
          <a href="#">
            Il mio profilo <span uk-navbar-parent-icon="" />
          </a>
          <div className="uk-navbar-dropdown">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="uk-active">
                <a href="#">Preferiti</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li className="uk-nav-header">Header</li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Gestisci gli annunci</a>
              </li>
              <li className="uk-nav-divider" />
              <li>
                <a href="#">Esci</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
    </div>
    </div>
  );
};

export default Nav;
